//import liraries
import { Icon, SearchBar } from '@rneui/base';
import React, {
    useState,
    useRef
 } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Modal, 
    TouchableOpacity,
    TextInput,
    Platform,
    FlatList,
    Keyboard
} from 'react-native';
import {Colors} from '../global/styles'
import { filterData } from '../global/Data';
import { useNavigation } from '@react-navigation/native';
import { filter } from 'lodash';
// create a component
const SearchComponentIOS = () => {
    
    const [data, setData]=useState([...filterData])
    const navigation =useNavigation()

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
        <View style={{}}>
         <SearchBar
            round
            platform='ios'
            placeholder='¿qué estás buscando?'
            onChangeText={handleSearch}
            value={data}
            onPressOut={()=>{
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
        flex: 1,
    },
    text1:{
        color:Colors.grey3,
        fontSize:16
    },
    textInput:{
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:0,
        borderColor:'#85939e',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignContent:'center',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10
    },
    SearchArea:{
        marginTop:10,
        width:'94%',
        height:50,
        backgroundColor:Colors.grey5,
        borderRadius:12,
        borderWidth:1,
        borderColor:Colors.grey4,
        flexDirection:'row',
        alignItems:'center'
    },
    searchIcon:{
        fontSize:24,
        padding:5,
        color:Colors.grey2
    },
    view1:{
        height:70,
        justifyContent:'center',
        paddingHorizontal:10
    },
    view2:{
        flexDirection:'row',
        padding:15,
        alignItems:'center',
    },
    icon2:{
        fontSize:24,
        padding:5,
        color:Colors.grey2
    },
    modal:{
        flex:1,
        
    }
});

//make this component available to the app
export default SearchComponentIOS;
