import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CartStack from './stacks/CartStack.tsx';
import ReservationSuccessScreen from '../screens/ReservationSuccessScreen.tsx';
import MenuScreen from '../screens/MenuScreen.tsx';
import HomeScreen from '../screens/HomeScreen.tsx';
import ReservationScreen from '../screens/ReservationScreen.tsx';
import ContactScreen from '../screens/ContactScreen.tsx';
import CustomHeader from '../components/CustomHeader.tsx';
import BroadcastsScreen from '../screens/BroadcastsScreen.tsx';
import EventMenuScreen from '../screens/EventMenuScreen.tsx';
import EventScreen from '../screens/EventScreen.tsx';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true, // Makes the AppBar transparent
          headerTitle: '', // Optional: Removes the title
          headerTintColor: 'white', // Optional: Changes back button color
        }}>
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CartStack"
          component={CartStack}
          options={{
            headerShown: false,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Shop"
          component={HomeScreen}
          options={{
            header: () => <CustomHeader title={''} />,
          }}
        />
        <Stack.Screen
          name="Reservation"
          component={ReservationScreen}
          options={{
            header: () => <CustomHeader title={''} />,
          }}
        />
        <Stack.Screen
          name="Contacts"
          component={ContactScreen}
          options={{
            header: () => <CustomHeader title={''} />,
          }}
        />
        <Stack.Screen
          name="ReservationSuccessScreen"
          component={ReservationSuccessScreen}
          options={{
            header: () => <CustomHeader title={''} />,
            title: 'Reservation',
          }}
        />
        <Stack.Screen
          name="Broadcasts"
          // @ts-ignore
          component={BroadcastsScreen}
          options={{
            header: () => <CustomHeader title={''} />,
          }}
        />
        <Stack.Screen
          name="Events"
          // @ts-ignore
          options={{
            headerShown: false,
          }}
          component={EventMenuScreen}
        />
        <Stack.Screen
          name="Event"
          // @ts-ignore
          options={{
            headerShown: false,
          }}
          component={EventScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
