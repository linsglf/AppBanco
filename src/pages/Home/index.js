import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [  
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '300,90',
    date: '01/09/2023',
    type: 0,
  },
  {
    id: 2,
    label: 'Pix recebido do Cliente X',
    value: '2500,00',
    date: '05/09/2023',
    type: 1,
  },
  {
    id: 4,
    label: 'Salário',
    value: '9.700,00',
    date: '07/09/2023',
    type: 1,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Gabriel Lins"/>

        <Balance balance="12.200,00" expenses="-300,90"/>

        <Actions/>

        <Text style={styles.title}>Últimas movientações</Text>

        <FlatList
          style={styles.list}
          data={list}
          keyExtractor={ (item) => String(item.id) }
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Movements data={item}/>}
        />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
