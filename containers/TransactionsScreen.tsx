import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

const TransactionsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>TransactionsScreen</Text>
    </SafeAreaView>
  );
};

export default TransactionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
