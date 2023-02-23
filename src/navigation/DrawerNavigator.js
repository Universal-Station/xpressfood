//import liraries
import React, { Component } from 'react';
import { Icon, withBadge } from '@rneui/base';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './ClientTabs';
import { Colors } from '../global/styles';
import DrawerContent from './DrawerConten';


import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';


const BadgeIcon =withBadge(0)(Icon);
const Drawer = createDrawerNavigator();
// create a component
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}  />}>
                <Drawer.Screen 
                    name='RootClientTabs'
                    component={MainTabScreen}
                    options={{
                        
                        title:'Cliente',
                        drawerIcon:({focussed, size}) =>(
                            <Icon
                                type='material-community'
                                name='home'
                                color={focussed ? '#7cc':Colors.grey2}
                                size={size}
                            />
                        ),
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
                        }}
                />

                <Drawer.Screen
                    name='BusinessScreen' 
                    component={BusinessConsoleScreen}
                    options={{
                        headerShown:false,
                        title:'Restaurants Console',
                        drawerIcon:({focussed, size}) =>(
                            <Icon
                                type='material'
                                name='business'
                                color={focussed? '#7cc':Colors.grey2}
                                size={size}
                            />
                        ),
                        
                        }}
                />
        </Drawer.Navigator>
    );
};



//make this component available to the app
export default DrawerNavigator;

/*
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

    */