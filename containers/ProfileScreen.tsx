import React from 'react';
import {Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';

const ProfileScreen = ({navigation}) => {
  const handleNavigateToNotifications = () => {
    navigation.navigate('Notifications');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Profile screen</Text>

      <TouchableOpacity onPress={handleNavigateToNotifications}>
        <Text style={styles.bodyText}>Go to Notifications</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;

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
