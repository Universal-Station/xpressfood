//import liraries
import { Icon } from '@rneui/themed';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, parameters } from '../global/styles';

// create a component
const Header = ({title,type,navigation}) => {
    return (
        <View style={styles.header}>
            <View style={{marginLeft:20,}}>
                <Icon 
                type='material-community'
                name={type}
                color= {Colors.headerText}
                size={28}
                onPress={()=>navigation.getBack}
                />
            </View>
            <View style={{}}>
                <Text style= {styles.headerText}>
                    {title}
                </Text>
            </View>
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
   header:{
    flexDirection:'row',
    backgroundColor:Colors.buttons,
    height:parameters.headerHeight,
    padding:10,
    marginTop:10
    
   },
   headerText:{
    color:Colors.headerText,
    fontSize:22,
    fontWeight:'bold',
    marginLeft:30

   }
});

//make this component available to the app
export default Header
;
