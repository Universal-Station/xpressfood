//import liraries
import { Icon } from '@rneui/base';
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
 } from 'react-native';
import { Colors } from '../global/styles';

// create a component
const FoodCard = ({
    onPressFoodCard,
    restaurantName,
    deliveryAvaliable,
    discountAvaliable,
    discountPorcent,
    numberOfReview,
    businessAdress,
    farAway,
    averageReview,
    images,
    screenWith
}) => {
    return (
        <TouchableOpacity>
            <View style={{...styles.cardView, width:screenWith}}>
                <Image 
                style={{...styles.image, width:screenWith}}
                source={{uri:images}}
                />
                <View>
                    <View>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={styles.distance}>
                            <Icon 
                                name='place'
                                type='material'
                                color={Colors.grey2}
                                size={18}
                                iconStyle={{
                                    marginTop:3
                                }}
                            />
                            <Text style={styles.Min}>{farAway} Min</Text>
                        </View>

                        <View style={{flex:9, flexDirection:'row'}}>
                                <Text style={styles.address}>{businessAdress}</Text>
                        </View>
                    </View>
                </View>
            </View>

           
            <View style={styles.review}>
                    <Text style={styles.average}>{averageReview}</Text>
                    <Text style={styles.numberOfReview}>{numberOfReview} reviews</Text>
            </View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    cardView:{
       marginHorizontal:9,
       borderTopRightRadius:5,
       borderTopLeftRadius:5,
       borderWidth:1,
       borderColor:Colors.grey4,
       borderBottomLeftRadius:5,
       borderBottomRightRadius:5
    },
    image:{
        borderTopLeftRadiu:5,
        borderTopRightRadius:5,
        height:150
    },
    restaurantName:{
        fontSize:17,
        fontWeight:'bold',
        color:Colors.grey1,
        marginTop:5,
        marginLeft:10
    },
    distance:{
        flex:4,
        flexDirection:'row',
        borderRightColor:Colors.grey4,
        paddingHorizontal:5,
        borderRightWidth:1
    },
    Min:{
        fontSize:12,
        fontWeight:'bold',
        paddingTop:5,
        color:Colors.grey3
    },
    address:{
        fontSize:12,
        paddingTop:5,
        color:Colors.grey2,
        paddingHorizontal:10
    },
    review:{
        position:'absolute',
        top:0,
        right:10,
        backgroundColor:'rgba(52, 52, 52, 0.3)',
        padding:2,
        alignItems:'center',
        justifyContent:'center',
        borderTopRightRadius:5,
        borderBottomLeftRadius:12
    },
    average:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        marginTop:-3
    },
    numberOfReview:{
        color:"white",
        fontSize:13,
        marginRight:0,
        marginLeft:0
    }
});

//make this component available to the app
export default FoodCard;
