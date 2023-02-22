//import liraries
import { Icon } from '@rneui/base';
import React, { Component, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Pressable, 
    Image} from 'react-native';
import { Colors } from '../global/styles';
import {filterData} from '../global/Data'
// create a component
const HomeScreen = () => {
    const [delivery, setDelivery] = useState(true)
    const [indexCheck, setIndexCheck] = useState("0")
    return (
        <View style={styles.container}>
             <ScrollView
             stickyHeaderIndices={[0]}
             showsHorizontalScrollIndicator={true}>
                <View>
                    <View style={{marginTop:20, flexDirection:'row', justifyContent:'space-evenly'}}>
                        <TouchableOpacity
                            onPress={()=>{
                            setDelivery(true)
                        }}>
                            <View style={{...styles.deliveryButton,backgroundColor:delivery?Colors.buttons : Colors.grey5}}>
                                <Text style={styles.deliveryText}>Delivery</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                            setDelivery(false)
                        }}>
                            <View style={{...styles.deliveryButton,backgroundColor:delivery?Colors.grey5 : Colors.buttons}}>
                                <Text style={styles.deliveryText}>Recojo  </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.filterView}>
                    <View style={styles.addressView}>
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            paddingLeft:10}}>
                            <Icon 
                            type='material-community'
                            name='map-marker'
                            color={Colors.grey1}
                            size={26}
                            />
                            <Text style={{marginLeft:5}}> 22 bussie street</Text>
                        </View>
                        <View style={styles.clockView}>
                            <Icon 
                            type='material-community'
                            name='clock-time-four'
                            color={Colors.grey1}
                            size={26}
                            />
                            <Text style={{marginLeft:5}}> now</Text>
                        </View>
                    </View>
                    <View>
                    <Icon 
                            type='material-community'
                            name='tune'
                            color={Colors.grey1}
                            size={26}
                            />
                    </View>
                </View>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Categorías</Text>
                </View>

                <View>
                    <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data ={filterData}
                    keyExtractor={(item) =>item.id}
                    extraData= {indexCheck}
                    renderItem={({item,index})=>(
                        <Pressable
                            onPress={()=>{setIndexCheck(item.id)}}
                        
                        >
                            <View style={indexCheck === item.id ? {...styles.smallCardSelected}: {...styles.smallCard}}>
                                <Image 
                                style= {{height:60, width:60, borderRadius:30}}
                                source={item.Image}
                                />
                                <View>
                                    <Text style={indexCheck=== item.id ?{ ...styles.smallCardTextSelected}:{...styles.smallCardText}}>{item.name}</Text>
                                </View>
                            </View>
                        </Pressable>
                    )}
                    />
                </View>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Delivery Gratis</Text>
                </View>

                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Promociones Disponibles</Text>
                </View>
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    deliveryButton:{
        paddingHorizontal:20,
        borderRadius:15,
        paddingVertical:5
    },
    deliveryText:{
        marginLeft:15,
        fontSize:16
    },
    filterView:{
        flexDirection:'row',
        alignItems:'center',
       justifyContent:'space-evenly',
        marginHorizontal:10,
        marginVertical:10
    },
    clockView:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:20,
        backgroundColor:Colors.cardbackground,
        borderRadius:15,
        paddingHorizontal:5,
        marginRight:20
        
    },
    addressView:{
        flexDirection:'row',
        backgroundColor:Colors.grey5,
        borderRadius:15,
        paddingVertical:3,
        justifyContent:'space-between',
        paddingHorizontal:20
    },
    headerText:{
        color:Colors.grey1,
        fontSize:24,
        fontWeight:'bold',
        paddingLeft:10
    },
    headerTextView:{
        backgroundColor:Colors.grey5,
        paddingVertical:3,
    },
    smallCard:{
        borderRadius:30,
        backgroundColor:Colors.grey5,
        justifyContent:"center",
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100,
    },
    smallCardSelected:{
        borderRadius:30,
        backgroundColor:Colors.buttons,
        justifyContent:"center",
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100,
    },
    smallCardTextSelected:{
        fontWeight:'bold',
        color:Colors.cardbackground,
        textAlign:'center',
        fontSize:10
    },
    smallCardText:{
        fontWeight:'bold',
        color:Colors.grey2,
        textAlign:'center',
        fontSize:11
    }

});

//make this component available to the app
export default HomeScreen;
