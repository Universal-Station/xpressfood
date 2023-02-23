//import liraries
import { StatusBar } from 'expo-status-bar';
import React,{useState,useRef} from 'react';
import { View,
        KeyboardAvoidingView,
        Text,
        StyleSheet,
        TextInput,
        TouchableOpacity } from 'react-native';
import { Colors } from '../../global/styles';
import { heightPercentageToDP as hp, widthPercentageToDP as wp,  } from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';
import { Icon, SocialIcon } from '@rneui/themed';
import Header from '../../components/Header';
// create a component
const SignInScreen = ({navigation}) => {
    const [textInput2Fossued, setTextInput2Fossued] = useState(false)
    const textInput1= useRef(1)
    const textInput2 = useRef(2)


    return (
       <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container} >
        <View style={styles.heading}>
        <Text style={styles.headingText}>Bienvenido</Text>
        <Text style={styles.headingText2}>ingrese <Text style={{color: Colors.statusbar}}>a tu cuenta</Text></Text>
        </View>
        <View style={styles.body}>
            <View>
            <TextInput 
                placeholder='Correo Electronico'
                placeholderTextColor={Colors.grey3}
                keyboardType='email-address'
                style={[styles.inputBox, {marginTop: 50}]}
                ref={textInput1} />
            </View>
            <View style={styles.textInput2}>
            <Animatable.View animation={textInput2Fossued?"":"fadeInLeft"} duration={400}>
                <Icon
                name='lock'
                iconStyle={{color:Colors.grey3}}
                style={{}}
                />
            </Animatable.View>
                <TextInput 
                style={{width:'80%'}}
                placeholder='Contraseña'
                placeholderTextColor={Colors.grey3}
                secureTextEntry= {true}
                ref={textInput2}
                onFocus={()=>{
                    setTextInput2Fossued(false)
                }}
                onBlur={() =>{
                    setTextInput2Fossued(true)
                }}
                />
            <Animatable.View animation={textInput2Fossued?"":"fadeInLeft"} duration={400}>
                <Icon 
                name='visibility-off'
                iconStyle={{color:Colors.grey3}}
                tipe='material'
                style={{marginRight:10}}
                />
            </Animatable.View>
            </View>
            
            <TouchableOpacity
            onPress={()=>(navigation.navigate('DrawerNavigator'))} 
            style={styles.button}>
            <Text style={styles.buttonText}>Iniciar sesiòn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:10}}>
            <Text style= {{color:Colors.statusbar}}>Olvidaste tu Contraseña ?</Text>
            </TouchableOpacity>
            

            <View style={{alignItems:'center', marginTop:30, marginBottom:20}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>OR</Text>
            </View>

            <View style={{marginHorizontal:10,marginTop:10}}>
                <SocialIcon 
                    title='Ingresar con Facebook'
                    button
                    type='facebook'
                    style={styles.SocialIcon}
                    onPress={()=>{}}
                /> 
            </View>

            <View style={{marginHorizontal:10,marginTop:10}}>
                <SocialIcon 
                    title='Ingresar con Google'
                    button
                    type='google'
                    style={styles.SocialIcon}
                    onPress={()=>{}}
                />
            </View>

            <View>
            <Text style={{color: Colors.grey1, marginTop: 40, fontSize: 14 }} >
                        No tiene cuenta en XpressFood ? 
            </Text>
            </View>

            <TouchableOpacity style={{alignItems:'center'}} onPress={()=> navigation.navigate("SignUp")}>
            <Text style= {{color:Colors.statusbar, fontWeight: 'bold', fontSize:14, marginTop:10}}>Registrate aquì</Text>
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
        padding:45,
        alignSelf:'center',
        marginBottom: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    headingText:{
        fontWeight: "bold",
        color: Colors.statusbar,
        fontSize: 40,
        marginBottom: 10,
        
    },
    headingText2:{
        fontSize: 20,
        color: Colors.grey1,
        marginTop: 10
    },
    body:{
        marginTop:-80,
        width:wp(100),
        height: hp(50),
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#0000',
        shadowOffset:{
            width: 0,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation:5,
    },
    inputBox:{
        borderWidth:2,
        borderColor:Colors.buttons,
        borderRadius: 100,
        padding: 10,
        width: 280,
        height: 45,
        opacity: 0.8,
        color: Colors.grey1,
        paddingLeft:15
    },
    textInput2:{
        marginTop:10,
        borderWidth:2,
        borderEndWidth:1,
        paddingLeft:15,
        width: 280,
        height: 45,
        opacity: 0.8,
        borderRadius:100,
        marginHorizontal:20,
        borderColor:Colors.buttons,
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center',
        color: Colors.grey1 
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
    SocialIcon:{
        borderRadius:100,
        height:50,
        width:280
    }


});

//make this component available to the app
export default SignInScreen;
