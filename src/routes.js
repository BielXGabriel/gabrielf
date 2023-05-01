import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import navegação de Paginas
import Home from './pages/Home/index';
import Money from './pages/Money/index';
import Store from './pages/Store/index';

// import customização TabBar
import TabBarCustom from './components/TabBarCustom/index';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTinColor: '#004d2c',

        tabBarStyle: {
          borderTopWidth: 0,
          backgrounColor: '#004d2c ',
        },
      }}
      tabBar={(props) => <TabBarCustom {...props} />}>

      
      <Tab.Screen
        name="Money"
        component={Money}
        options={{ tabBarIcon: 'compare-arrows' }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarIcon: 'attach-money' }}
      />

      <Tab.Screen
        name="Store"
        component={Store}
        options={{ tabBarIcon: 'storefront' }}
      />
    </Tab.Navigator>
  );
}
