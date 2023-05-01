import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// import icones
import { MaterialIcons } from '@expo/vector-icons';

export default function TabBarCustom({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonTab}>
              <View style={styles.icons}>
                <View style={[styles.icons2,{backgroundColor: isFocused  ? 'rgba(209, 255, 206, 0.5)' :  "Transparent"}]}>
                  <MaterialIcons
                    name={options.tabBarIcon}
                    size={34}
                    color={isFocused ? '#fff' : '#0ba86d'}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    flexDirection: 'row',
    marginBottom: 38,
    marginLeft: 18,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#00703c',
    borderRadius: 40,
    elevation: 10,
    gap: 8,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.8,
  },

  buttonTab: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  icons:{
   alignItems: 'center',
   padding: 8,
  },

  icons2:{
   alignItems: 'center',
   padding: 8,
  borderRadius: 80,
  }
});
