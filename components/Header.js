import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

export default function Header(){
 const navigation = useNavigation();
  return(
    <View style={headerStyles.container}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
            <Icon name="menu" size={24} color="white" />
        </TouchableOpacity>
        <View>
            <Icon name="search"
                onPress={()=>navigation.navigate('Search')}
               color='white'
                />

        </View>
    </View>
    )
}

const headerStyles=StyleSheet.create({
   container:{
     
       width:'100%',
       backgroundColor:'black',
       elevation:0,
       height:50,
       display:'flex',
       flexDirection:'row',
       paddingHorizontal:20,
       alignItems:'center',
       justifyContent:'space-between',
       alignSelf:'center'
   }
})