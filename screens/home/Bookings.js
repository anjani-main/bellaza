import React, { useEffect, useState } from 'react';
import {View,Text, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Bookings=({navigation})=>{
    
const OrderCard=()=>{
    return(
        <View style={{width:'88%',height:89,borderColor:'#ACACAC',borderWidth:1,borderRadius:10,alignSelf:'center',marginTop:20,padding:15}}>
            <Text style={{color:'black'}}>Order ID : GISo7OmXnp59 </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{color:'black'}}><Text style={{color:'black'}}>Booking Time :</Text> 19:07</Text>
            <Text style={{color:'green'}}>(invoice received)</Text>
            </View>
          
            <Text style={{color:'black'}}><Text style={{color:'black'}}>Booking Date :</Text> April 15 2022</Text>
            
        </View>
    )
}
  
    const OrderCardClickable=({orderId,bookingTime,bookingDate,navigation})=>{
        return(
            <>
            {/* <TouchableOpacity  onPress={()=>{navigation.navigate('OrderDetails',{request_id:orderId})}}> */}
            <View style={{width:'88%',height:89,borderColor:'#ACACAC',borderWidth:1,borderRadius:10,alignSelf:'center',marginTop:20,padding:15}}>
                <Text style={{color:'black'}}>Order ID : {orderId} </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{color:'black'}}><Text style={{color:'black'}}>Booking Time :</Text>{bookingTime}</Text>
                {/* <Icon 
                 name="arrow-forward-ios"
                 /> */}
                </View>
              
                <Text style={{color:'black'}}><Text style={{color:'black'}}>Booking Date :</Text> {bookingDate}</Text>
                
            </View>
            {/* </TouchableOpacity> */}
            </>
        )
    }

    
    useEffect(()=>{
       
    },[])
    return(
        <ScrollView style={{backgroundColor:'white',flex:1,paddingTop:60}}>
            <Text style={{fontFamily:'Poppins-Light',fontWeight:'600',fontSize:18,color:'black',paddingTop:25,paddingLeft:25}}>
                Notifications
            </Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('OrderDetails')}}>
            {/* <OrderCard/> */}
            <View style={{marginBottom:100}}>
                 {oldOrders.length!=0?oldOrders.map((order,index)=>(
                        
                    (<OrderCardClickable key={`${index}_${order.bookingDate}_${order.bookingTime}`} navigation={navigation} orderId={order.orderId} bookingTime={order.bookingTime} bookingDate={order.bookingDate}/>)
                        // (<OrderCardUnClickable   orderId={order.orderId} bookingTime={order.bookingTime} bookingDate={order.bookingDate} />)
                )):null}
           </View>
            
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Bookings;