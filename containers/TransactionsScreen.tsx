import React from 'react';
import {Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';

const DATA = [
  {id: 'T100', notification_read: false},
  {id: 'T200', notification_read: true},
  {id: 'T300', notification_read: false},
];

const TransactionsScreen = ({navigation}) => {
  const handleNavigateTransaction = (id: string) => {
    navigation.navigate('Transaction', {id});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Transactions screen</Text>

      {DATA.map(item => (
        <TouchableOpacity onPress={() => handleNavigateTransaction(item.id)}>
          <Text style={styles.bodyText}>{`Transaction ${item.id}`}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

export default TransactionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: '500',
    marginVertical: 5,
  },
  bodyText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'blue',
    marginVertical: 5,
  },
});
