import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

const ScanScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Scan</Text>
    </SafeAreaView>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
