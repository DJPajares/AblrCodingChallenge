import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

const BuyScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Buy</Text>
    </SafeAreaView>
  );
};

export default BuyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
