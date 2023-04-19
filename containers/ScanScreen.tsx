import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

const ScanScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Scanning...</Text>
    </SafeAreaView>
  );
};

export default ScanScreen;

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
});
