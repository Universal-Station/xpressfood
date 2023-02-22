//import liraries
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from '@rneui/themed';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../global/styles';
import HomeScreen from './HomeScreen';

// create a component
const HomeStack = createStackNavigator();
const Tab =  createBottomTabNavigator()

const MainTabScreen = () => {
    return (
       <Tab.Navigator initialRouteName='Home'  screenOptions={{headerShown:false}}>
            <Tab.Screen
            name='Home'
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Inicio',
                tabBarColor: '#d02860',
                tabBarIcon:({color})=>(
                    <Icon 
                    name='ios-home'
                    type='ionicon'
                    color={color}
                    size={26}
                    />
                ),
            }}
            />
            <Tab.Screen
            name='Search'
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Search',
                tabBarColor: '#d02860',
                tabBarIcon:({color})=>(
                    <Icon 
                    name='search'
                    type='ionicon'
                    color={color}
                    size={26}
                    />
                ),
            }}
            />
             <Tab.Screen
            name='Ordenes'
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Ordenes',
                tabBarColor: '#d02860',
                tabBarIcon:({color})=>(
                    <Icon 
                    name='order-bool-descending-variant'
                    type='material-community'
                    color={color}
                    size={26}
                    />
                ),
            }}
            />
             <Tab.Screen
            name='Cuenta'
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Cuenta',
                tabBarColor: '#d02860',
                tabBarIcon:({color})=>(
                    <Icon 
                    name='account'
                    type='material-community'
                    color={color}
                    size={26}
                    />
                ),
            }}
            />
           
       </Tab.Navigator>
    );
};

//make this component available to the app
export default MainTabScreen;

const HomeStackScreen = ({navigation}) =>{
    
    return(
        <HomeStack.Navigator
        screenOptions={{
            headerShown:false,
            headerStyle:{
                backgroundColor: Colors.buttons,
                shadowColor:Colors.buttons,
                elevation:0,

            },
            headerTintColor:Colors.grey1,
            headerTitleStyle:{
                fontWeight:'bold'
            }
        }}
        >
            <HomeStack.Screen 
            name='home'
            component={HomeScreen}
            options={{
                title :'Home'
            }}
            />
        </HomeStack.Navigator>

    )
}

