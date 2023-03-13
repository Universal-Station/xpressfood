//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Platform } from 'react-native';
import SearchComponentAndroid from '../components/SearchComponentAndroid';
import SearchComponentIOS from '../components/SearchComponentIOS';

// create a component
const SearchScreen = () => {
    if(Platform.OS==='ios'){
        return(
            <View style={styles.container}>
            
            <SearchComponentIOS />
        </View>
        )
    }else if(Platform.OS==='android')
    return (
        <View style={styles.container}>
            
            <SearchComponentAndroid />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

       
    },
});

//make this component available to the app
export default SearchScreen;
