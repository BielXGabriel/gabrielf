import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements/index';
import Actions from '../../components/Actions/index';

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        label: 'Boleto conta luz',
        value: '-300,90',
        date: '17/04/2023',
        type: 0, // despesas
      },
      {
        id: 2,
        label: 'Pix Cliente X',
        value: '100,00',
        date: '20/04/2023',
        type: 1, // receita / entradas
      },
      {
        id: 3,
        label: 'Salário',
        value: '2000,00',
        date: '30/04/2023',
        type: 1, // receita / entradas
      },
    ],
  };

  calculateBalance = () => {
    let saldo = 0;
    let gastos = 0;

    this.state.list.forEach((item) => {
      if (item.type === 0) {
        gastos += parseFloat(item.value.replace(',', '.'));
      } else {
        saldo += parseFloat(item.value.replace(',', '.'));
      }
    });

    return { saldo, gastos };
  };

  handleAddItem = (label, value, date, type) => {
    const newItem = {
      id: this.state.list.length + 1,
      label: label,
      value: value,
      date: date,
      type: type,
    };

    this.setState({ list: [...this.state.list, newItem] });
  };

  handleRemoveItem = (itemId) => {
    const updatedList = this.state.list.filter((item) => item.id !== itemId);
    this.setState({ list: updatedList });
  };

  render() {
    const { saldo, gastos } = this.calculateBalance();
    return (
      <View style={styles.container}>
        <Header name="Gabriel Ferreira" />

        <Balance saldo={saldo} gastos={gastos} />

        <TouchableOpacity
          onPress={() =>
            this.handleAddItem('Novo Item', '100,00', '01/01/2023', 1)
          }>
          <Text>Add</Text>
        </TouchableOpacity>
        <Actions />

        <Text style={styles.title}>Últimas movimentações</Text>
        <FlatList
          style={styles.list}
          data={this.state.list}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity onPress={() => this.handleRemoveItem(item.id)}>
                <Text>Remover {item.label}</Text>
              </TouchableOpacity>
              <Movements data={item} />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 15,
  },
  list: {
  marginStart: 20,
  marginEnd: 20,
  marginBottom: 20,
  maxHeight: 430, 
},
});
