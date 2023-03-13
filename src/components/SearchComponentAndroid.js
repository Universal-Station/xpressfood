//import liraries
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from '@rneui/base';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Keyboard } from 'react-native';
import {filterData} from '../global/Data'
import { Colors } from '../global/styles';
import { filter } from 'lodash';
// create a component
const SearchComponentAndroid = () => {
    const [search, setSearch] = useState("");
    const updateSearch = (search)=>{
        setSearch(search);
    };
    const [data, setData]=useState([...filterData])
    const navigation =useNavigation();
    const contains =({name},query) =>{
        if (name.includes(query)){
            return true
        }
        return false
    }

    const handleSearch = text =>{
        const dataS = filter(filterData,user =>{
            return contains(user, text)
        })
        setData([...dataS])
    }
    const [shouldShow, setShouldShow] = useState(false);
    return (
        <View style={styles.container}>
            <SearchBar
            platform='android'
            placeholder='¿qué estás buscando?'
            onChangeText={handleSearch}
            value={data}
            onPressOut={()=>{
                setShouldShow(!shouldShow)
            }}
            onKeyPress={()=>{
                setShouldShow(!shouldShow)
            }}
            
            />
            {shouldShow ? (
             <FlatList
            data={data}
            renderItem={({item})=>(
                <TouchableOpacity
                    onPress={()=>{
                        Keyboard.dismiss
                        navigation.navigate('RestaurantSearchScreen',{item:item.name})
                    
                    }}
                >
                    <View style={styles.view2}>
                        <Text style={{color:Colors.grey2,fontSize:15}}>{item.name}</Text>
                    </View>

                </TouchableOpacity>
            )}
            keyExtractor={item=> item.id}
            />
            ):null}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        
        
    },
    view2:{
        flexDirection:'row',
        padding:15,
        alignItems:'center',
    },
});

//make this component available to the app
export default SearchComponentAndroid;
