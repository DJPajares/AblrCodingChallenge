import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';

const DATA = [
  {id: 'T100', notification_read: false},
  {id: 'T200', notification_read: true},
  {id: 'T300', notification_read: false},
];

type RootStackParamList = {
  Transaction: {id: string};
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Transaction'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const TransactionsScreen = ({navigation}: Props) => {
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
