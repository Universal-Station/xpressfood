//import liraries
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Icon, withBadge } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {  Provider as PaperProvider } from 'react-native-paper';
import { Colors } from '../global/styles';
import MainTabScreen from './ClientTabs';
import AuthStack from './AuthStack';
import DrawerContent from './DrawerConten';


// create a component



const Routes = () => {
    return (
        
       <PaperProvider>
        <NavigationContainer >
            <AuthStack />
        </NavigationContainer>
       </PaperProvider>
    );
};

//make this component available to the app
export default Routes;
