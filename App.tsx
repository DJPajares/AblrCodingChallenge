import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './containers/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BuyScreen from './containers/BuyScreen';
import ScanScreen from './containers/ScanScreen';
import TransactionsScreen from './containers/TransactionsScreen';
import ProfileScreen from './containers/ProfileScreen';
import NotificationsScreen from './containers/NotificationsScreen';
import TransactionScreen from './containers/TransactionScreen';
import {StyleSheet, View} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Transaction" component={TransactionScreen} />
    </Stack.Navigator>
  );
}

function BuyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Buy"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Buy" component={BuyScreen} />
    </Stack.Navigator>
  );
}

function ScanStack() {
  return (
    <Stack.Navigator
      initialRouteName="Scan"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Scan" component={ScanScreen} />
    </Stack.Navigator>
  );
}

function TransactionsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Transactions"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Transactions" component={TransactionsScreen} />
      <Stack.Screen name="Transaction" component={TransactionScreen} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Transaction" component={TransactionScreen} />
    </Stack.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          tabBarStyle: styles.tabBar,
        })}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Ionicons name={'ios-home-sharp'} color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="BuyStack"
          component={BuyStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Buy',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name={'storefront'}
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ScanStack"
          component={ScanStack}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <View style={styles.middleButton}>
                <MaterialCommunityIcons
                  name={'line-scan'}
                  color="#ffffff"
                  size={size}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="TransactionsStack"
          component={TransactionsStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Transactions',
            tabBarIcon: ({color, size}) => (
              <Ionicons name={'ios-card'} color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Ionicons name={'person'} color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  tabBar: {
    height: 90,
    paddingTop: 10,
  },
  middleButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#43a2ea',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
  },
});
