import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from './containers/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BuyScreen from './containers/BuyScreen';
import ScanScreen from './containers/ScanScreen';
import TransactionsScreen from './containers/TransactionsScreen';
import ProfileScreen from './containers/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
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
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          tabBarStyle: {
            height: 70,
            backgroundColor: '#fff',
            borderTopWidth: 0,
            elevation: 0,
          },
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
              <MaterialCommunityIcons
                name={'line-scan'}
                color={color}
                size={size}
              />
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
              <FontAwesome5 name={'user'} color={color} size={size} solid />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabView: {
    flexDirection: 'row',
  },
});

export default App;
