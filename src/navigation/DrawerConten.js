//import liraries
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Icon } from '@rneui/themed';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Drawer } from 'react-native-paper';

// create a component
const DrawerContent = (props) => {
    return (
       <DrawerContentScrollView {...props}> 
            <Drawer.Section>
                <DrawerItem 
                icon={({color, size}) =>(
                    <Icon
                    name='home-outline'
                    type='material-community'
                    color={color}
                    size={size}
                    />
                )}
                label='Home'
                />
            </Drawer.Section>
            <DrawerItem
        label="Help"
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
