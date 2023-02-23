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
    Image,Dimensions} from 'react-native';
import { Colors } from '../global/styles';
import {filterData, restaurantsData} from '../global/Data'
import FoodCard from '../components/FoodCard';
import CountDown from 'react-native-countdown-component';
import Header from '../components/Header';
// create a component
const SCREEN_WIDTH= Dimensions.get('window').width


const HomeScreen = ({navigation}) => {
    const [delivery, setDelivery] = useState(true)
    const [indexCheck, setIndexCheck] = useState("0")
    return (
        <View style={styles.container}>
             <ScrollView
             stickyHeaderIndices={[0]}
             showsHorizontalScrollIndicator={true}>
                <View style={{backgroundColor:Colors.cardbackground, paddingBottom:9}}>
                    <View style={{marginTop:10, flexDirection:'row', justifyContent:'space-evenly'}}>
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
                            navigation.navigate('RestaurantsMapScreen')
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
                <View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{marginLeft:15, fontSize:16,marginTop:-10,marginRight:5}}>Termina en</Text>
                        <CountDown 
                            until={3600}
                            size={14}
                            digitStyle={{backgroundColor:Colors.lightgreen}}
                            digitTxtStyle={{color:Colors.cardbackground}}
                            timeToShow={['M','S']}
                            timeLabels={{m:'min',s:'sec'}}

                        />
                    </View>
                   <FlatList 
                        style={{marginTop:10,marginBottom:10}}
                        horizontal={true}
                        data={restaurantsData}
                        keyExtractor= {(item, index)=> index.toString()}
                        showsHorizontalScrollIndicator={false}
                        renderItem= {({item})=>(
                            <View style={{marginRight:5}}> 
                                <FoodCard 
                                    screenWith={SCREEN_WIDTH*0.8}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    farAway={item.farAway}
                                    businessAdress={item.businessAddres}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberOfReviw}

                                 />
                            </View>
                        )}
                   />
                </View>

                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Promociones Disponibles</Text>
                </View>
                <View>
                   <FlatList 
                        style={{marginTop:10,marginBottom:10}}
                        horizontal={true}
                        data={restaurantsData}
                        keyExtractor= {(item, index)=> index.toString()}
                        showsHorizontalScrollIndicator={false}
                        renderItem= {({item})=>(
                            <View style={{marginRight:5}}> 
                                <FoodCard 
                                    screenWith={SCREEN_WIDTH*0.8}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    farAway={item.farAway}
                                    businessAdress={item.businessAddres}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberOfReviw}

                                 />
                            </View>
                        )}
                   />
                </View>

                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Restaurantes Cerca de Ti</Text>
                </View>
                <View style={{width:SCREEN_WIDTH, paddingTop:10}}>
                            {
                                restaurantsData.map(item =>(
                                    <View key={item.id} style={{paddingBottom:20}}>
                                        <FoodCard 
                                            screenWith={SCREEN_WIDTH*0.95}
                                            images={item.images}
                                            restaurantName={item.restaurantName}
                                            farAway={item.farAway}
                                            businessAdress={item.businessAddres}
                                            averageReview={item.averageReview}
                                            numberOfReview={item.numberOfReviw}

                                        />
                                    </View>
                                ))
                            }
                </View>
               
            </ScrollView>
            { delivery &&              
            <View style={styles.floatingButton}>
                <TouchableOpacity
                    onPress={()=>{navigation.navigate('RestaurantsMapScreen')}}
                >
                        <Icon
                        name='place'
                        type='material'
                        size={32}
                        color={Colors.buttons}
                         />
                        <Text style={{color:Colors.grey2}}>Map</Text>
                </TouchableOpacity>
            </View>
            }
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
    },
    floatingButton:{
        position:'absolute',
        bottom:10,
        right:15,
        backgroundColor:'white',
        elevation:10,
        width:60,
        height:60,
        borderRadius:30,
        alignItems:'center'
    }

});

//make this component available to the app
export default HomeScreen;
