//import liraries
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { CommonActions, DrawerActions } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Drawer } from 'react-native-paper';
import { Colors } from '../global/styles';
// create a component
const DrawerContent = ({navigation,props}) => {
    return (
       <DrawerContentScrollView {...props}> 
            <Drawer.Section>
                <DrawerItem 
                labelStyle={{color:Colors.grey2}}
                icon={({size}) =>(
                    <Icon 
                        type='material-community'
                        name='home'
                        color={Colors.grey2}
                        size={size}
                        
                    />
                )}
                focused={false}
                label='Cliente'
                onPress={()=>{
                    navigation.dispatch({
                        ...(true
                            ? DrawerActions.closeDrawer():
                             CommonActions.navigate('RootClientTabs'))
                    })
                }}
                />
                <DrawerItem
                 
                icon={({focussed, size}) =>(
                    <Icon 
                        type='material'
                        name='business'
                        color={focussed ? '#7cc' :Colors.grey2}
                        size={size}
                    />
                )}
                label='Consola Restaurants'
                />
                <DrawerItem 
                icon={({focussed, size}) =>(
                    <Icon 
                        type='material-community'
                        name='home'
                        color={focussed ? '#7cc' :Colors.grey2}
                        size={size}
                    />
                )}
                label='Driver Console'
                />
                <DrawerItem 
                icon={({focussed, size}) =>(
                    <Icon 
                        type='material-community'
                        name='home'
                        color={focussed ? '#7cc' :Colors.grey2}
                        size={size}
                    />
                )}
                label='Promociones'
                />
                <DrawerItem 
                icon={({focussed, size}) =>(
                    <Icon 
                        type='material-community'
                        name='home'
                        color={focussed ? '#7cc' :Colors.grey2}
                        size={size}
                    />
                )}
                label='Configuraciòn'
                />
                <DrawerItem 
                icon={({focussed, size}) =>(
                    <Icon 
                        type='material-community'
                        name='home'
                        color={focussed ? '#7cc' :Colors.grey2}
                        size={size}
                    />
                )}
                label='Ayuda'
                />
            </Drawer.Section>
           
            <DrawerItem
        label="exit"
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />

       </DrawerContentScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default DrawerContent;
