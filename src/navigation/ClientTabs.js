//import liraries
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from '@rneui/themed';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../global/styles';
import HomeScreen from '../screens/HomeScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import RestaurantsMapScreen from '../screens/RestaurantsMapsScreen';
import SearchScreen from '../screens/SearchScreen';

// create a component
const HomeStack = createStackNavigator();
const Tab =  createBottomTabNavigator()

const MainTabScreen = () => {
    return (
       <Tab.Navigator 
       initialRouteName='Home'
       screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: Colors.buttons
       }}>
            <Tab.Screen
            name='Home'
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Inicio',
                tabBarIcon:({color,size})=>(
                    <Icon 
                    name='ios-home'
                    type='ionicon'
                    color={color}
                    size={size}
                    />
                ),
            }}
            />

            <Tab.Screen
            name='Search'
            component={SearchScreen}
            options={{
                headerShown:false,
                tabBarLabel: 'Search',
                tabBarIcon:({color,size})=>(
                    <Icon 
                    name='search'
                    type='material'
                    color={color}
                    size={size}
                    />
                ),
            }}
            />
            
            <Tab.Screen
            name='Ordenes'
            component={MyOrdersScreen}
            options={{
                tabBarLabel: 'Ordenes',
                tabBarIcon:({color,size})=>(
                    <Icon 
                    name='view-list'
                    type='material'
                    color={color}
                    size={size}
                    />
                ),
            }}
            />

            <Tab.Screen
            name='Cuenta'
            component={MyAccountScreen}
            options={{
                tabBarLabel: 'Mi Cuenta',
                tabBarIcon:({color,size})=>(
                    <Icon 
                    name='person'
                    type='material'
                    color={color}
                    size={size}
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

