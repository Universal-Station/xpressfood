//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../global/styles';
import { heightPercentageToDP as hp, widthPercentageToDP as wp,  } from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
// create a component
const SignInWelcomeScreen = ({navigation}) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         style={styles.container}>
            <View style={styles.heading}>
            <Text style={styles.headingText}>ENCUENTRA RESTAURANTES</Text>
            <Text style={styles.headingText}>CERCA DE TI</Text>
            </View>

           
            <View style={{flex:4, justifyContent:'center'}}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                        <Image 
                          source={{uri:'https://e7.pngegg.com/pngimages/475/477/png-clipart-pizza-delivery-take-out-food-delivery-others-miscellaneous-boy.png'}}
                          style={{height:'100%', width:'100%'}}
                        />
                    </View>
                    <View style={styles.slide2}>
                        <Image 
                          source={{uri:'https://www.clara.es/medio/2021/12/16/que-comer-hoy_1962056a_1280x1167.jpg'}}
                          style={{height:'100%', width:'100%'}}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image 
                          source={{uri:'https://www.saborusa.com/wp-content/uploads/2019/12/origen-de-la-pizza-1.jpg.webp'}}
                          style={{height:'100%', width:'100%'}}
                        />
                    </View>
                    <View style={styles.slide4}>
                        <Image 
                          source={{uri:'https://peru21.pe/resizer/jEHYDumD2yB_gLtoiWoyyVpnwhQ=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/UM7KUSCNXFED7IRS6DKSZL4CME.jpg'}}
                          style={{height:'100%', width:'100%'}}
                        />
                    </View>
                </Swiper>
            </View>
            <View style={{flex:4,justifyContent:'flex-end', alignItems:'center', marginBottom:20}}>
            <TouchableOpacity
            onPress={()=> navigation.navigate("SignInScreen")}
            style={styles.button}>
            <Text style={styles.buttonText}>Inicia sesiòn</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>(text)} 
            style={styles.button1}>
            <Text style={styles.buttonText1}>Crea tu cuenta</Text>
            </TouchableOpacity>

            </View>
         

        </KeyboardAvoidingView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading:{
        flex:2,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:60,
       
    },
    headingText:{
        fontWeight: "bold",
        color: Colors.buttons,
        fontSize: 26,
        marginBottom: 15,
    },
    slide1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#9DD6EB'
    },
    button: {
        backgroundColor: Colors.statusbar,
        height: 45,
        width:280,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    button1: {
        borderWidth:1,
        borderColor:Colors.buttons,
        height: 45,
        width:280,
        marginTop:20,
        marginBottom:60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    buttonText1: {
        color: Colors.grey1,
        fontWeight: 'bold',
        fontSize: 20
    },
});

//make this component available to the app
export default SignInWelcomeScreen;
