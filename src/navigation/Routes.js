//import liraries
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Icon, withBadge } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {  Provider as PaperProvider } from 'react-native-paper';
import { Colors } from '../global/styles';
import MainTabScreen from '../screens/MainTabScreen';
import AuthStack from './AuthStack';
import DrawerContent from './DrawerConten';


// create a component
const BadgeIcon =withBadge(0)(Icon)

const Drawer = createDrawerNavigator();
const Routes = () => {
    return (
        
       <PaperProvider>
        <NavigationContainer >
            <Drawer.Navigator  drawerContent={props => <DrawerContent {...props}  />} >
                <Drawer.Screen name='HomeDrawer' component={MainTabScreen} 
                options={{
                    title:'XpressFood',
                    headerTintColor:Colors.headerText,
                    headerStyle:{
                        backgroundColor:Colors.buttons
                    },
                    headerRight:() =>(
                        <TouchableOpacity style={{marginRight:10}}>
                           <BadgeIcon 
                           type='material-community'
                           name='cart'
                           size={35}
                           color={Colors.cardbackground} />
                        </TouchableOpacity>
                    )
                    }}/>
            </Drawer.Navigator>
        </NavigationContainer>
       </PaperProvider>
    );
};

//make this component available to the app
export default Routes;
