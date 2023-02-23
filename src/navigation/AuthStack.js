//import liraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  TransitionPresets } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../global/styles';
import SignInScreen from '../screens/authScreen/SignInScreen';
import SignInWelcomeScreen from '../screens/authScreen/SignInWelcomeScree';
import HomeScreen from '../screens/HomeScreen';
import MainTabScreen from './ClientTabs';
import RestaurantsMapScreen from '../screens/RestaurantsMapsScreen';
import DrawerNavigator from './DrawerNavigator';
// create a component
const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen 
            name='SignInWelcomeScreen'
            component={SignInWelcomeScreen}
            options={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }} /> 
            <Stack.Screen 
            name='SignInScreen'
            component={SignInScreen}
            options={{
                title:'MI CUENTA',
                headerShown: true,
                headerStyle:{
                    backgroundColor:Colors.statusbar,
                },
                headerTitleStyle:{
                    fontWeight:'bold',
                },
                headerTintColor:Colors.headerText,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />

            <Stack.Screen 
                name='DrawerNavigator'
                component={DrawerNavigator}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid,
                    
                }}
            /> 
            <Stack.Screen 
                name='RestaurantsMapScreen'
                component={RestaurantsMapScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid,
                    
                }}
            /> 
        </Stack.Navigator>
    );
};


//make this component available to the app
export default AuthStack;
