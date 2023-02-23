//import liraries
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Avatar } from '@rneui/base';
import { Icon } from '@rneui/themed';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Colors } from '../global/styles';
// create a component
const DrawerContent = (props) => {
    return (
        <View style={styles.container}>
           
            <DrawerContentScrollView {...props}> 
                <View style={{backgroundColor:Colors.buttons}}>
                    <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                        paddingLeft:20,
                        paddingVertical:10
                        }}>
                        <Avatar
                            rounded
                            avatarStyle={styles.avatar}
                            size={75}
                            source={{uri:'https://1.bp.blogspot.com/-rFm-eBCw_O0/Uj8LV0iPoDI/AAAAAAABCyY/pxMB6I5hQGE/s1600/minions43.jpg'}}
                        />
                        <View style={{marginLeft:10}}>
                            <Text style={{
                                fontWeight:'bold',
                                color:Colors.pagebackground,
                                fontSize:18
                            }}>Will Nuñez</Text>
                            <Text style={{
                                color:Colors.pagebackground,
                                fontSize:14
                            }}>willn@gmail.com</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',paddingBottom:5}}> 
                        <View style={{flexDirection:'row', marginTop:0,}}>
                            <View style={{marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{
                                fontWeight:'bold',
                                color:Colors.cardbackground,
                                fontSize:18
                                }}>1</Text>
                                <Text style={{
                                color:Colors.cardbackground,
                                fontSize:14
                                }}>Fovoritos</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row', marginTop:10}}>
                            <View style={{marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{
                                fontWeight:'bold',
                                color:Colors.cardbackground,
                                fontSize:18
                                }}>0</Text>
                                <Text style={{
                                color:Colors.cardbackground,
                                fontSize:14
                                }}>Carrito</Text>
                            </View>
                        </View>
                    </View>
                </View>
               
            <DrawerItemList {...props} />
            <DrawerItem 
                    label='Pomociones'
                    icon={({color,size})=>(
                        <Icon
                            type='material-community'
                            name='tag-heart'
                            color={color}
                            size={size}
                        />
                    )}
            />

            <DrawerItem 
                    label='Configuraciòn'
                    icon={({color,size})=>(
                        <Icon
                            type='material-community'
                            name='cog-outline'
                            color={color}
                            size={size}
                        />
                    )}
            />

            <DrawerItem 
                    label='Ayuda'
                    icon={({color,size})=>(
                        <Icon
                            type='material-community'
                            name='lifebuoy'
                            color={color}
                            size={size}
                        />
                    )}
            />
            <View style={{borderTopWidth:1,borderTopColor:Colors.grey5}}>
                <Text style={styles.preferences}>Preferencias</Text>

                <View style={styles.switchText}>
                        <Text style={styles.darkTemeText}>Dark theme</Text>
                        <View style={{paddingRight:10}}>
                            <Switch
                                trackColor={{false: '#767577', true:'#81b0ff'}}
                                thumbColor="#f4f3f4"
                            />
                        </View>
                </View>
            </View>
            </DrawerContentScrollView>
            <DrawerItem style={{marginBottom:15,borderTopColor:Colors.grey2,borderWidth:1,borderRadius:30}}
                    label='Cerrar Sesion'
                    icon={({color,size})=>(
                        <Icon
                            type='material-community'
                            name='logout-variant'
                            color={color}
                            size={size}
                        />
                    )}
            />
       </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    avatar:{
        borderWidth:2,
        borderColor:Colors.pagebackground
        
    },
    preferences:{
        fontSize:16,
        color:Colors.grey2,
        paddingTop:20,
        paddingLeft:20
    },
    switchText:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10
    },
    darkTemeText:{
        fontSize:16,
        color:Colors.grey2,
        paddingTop:10,
        paddingLeft:0,
        fontWeight:'bold'
    }
});

//make this component available to the app
export default DrawerContent;
