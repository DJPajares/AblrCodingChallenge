import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DATA = [
  {id: 'T100', notification_read: false},
  {id: 'T200', notification_read: true},
  {id: 'T300', notification_read: false},
];

const NotificationsScreen = ({navigation}) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleNavigateTransaction = (id: string) => {
    navigation.navigate('Transaction', {id});
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Ionicons name="arrow-back" size={20} color="white" />
      </TouchableOpacity>

      <View style={styles.subContainer}>
        <Text style={styles.headerText}>Notifications screen</Text>

        {DATA.map(item => (
          <TouchableOpacity onPress={() => handleNavigateTransaction(item.id)}>
            {!item.notification_read && (
              <Text style={styles.bodyText}>
                {`Unread notification - Transaction ID ${item.id}`}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#adadad',
    padding: 10,
    borderRadius: 30,
    width: 40,
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