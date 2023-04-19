import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

const BuyScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Buy screen</Text>
      <Text style={styles.bodyText}>Purchase items here</Text>
    </SafeAreaView>
  );
};

export default BuyScreen;

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
    marginVertical: 5,
  },
});
