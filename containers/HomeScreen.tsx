import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
