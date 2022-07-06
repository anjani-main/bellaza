import React, { useState } from 'react';
import {View,Text, StyleSheet, TouchableOpacity,ScrollView,Image,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
const oneS=(
    <View style={{flexDirection:'row'}}>
        <Image source={require('../../../statics/star.png')} />
    </View>
)
const twoS=(
    <View style={{flexDirection:'row'}}>
        <Image source={require('../../../statics/star.png')} />
        <Image source={require('../../../statics/star.png')} />
    </View>
)
const threeS=(
    <View style={{flexDirection:'row'}}>
        <Image source={require('../../../statics/star.png')} />
        <Image source={require('../../../statics/star.png')} />
        <Image source={require('../../../statics/star.png')} />
    </View>
)
const fourS=(
    <View style={{flexDirection:'row'}}>
        <Image source={require('../../../statics/star.png')} />
        <Image source={require('../../../statics/star.png')} />
        <Image source={require('../../../statics/star.png')} />
        <Image source={require('../../../statics/star.png')} />
    </View>
)
const fiveS=(
    <View style={{flexDirection:'row'}}>
        <Image source={require('../../../statics/star.png')} />
        <Image source={require('../../../statics/star.png')} />
        <Image source={require('../../../statics/star.png')} />
        <Image source={require('../../../statics/star.png')} />
        <Image source={require('../../../statics/star.png')} />
    </View>
)
const CardScroll=({source,nav,val,key})=>{
   
    
    return(
        <TouchableOpacity >
            <Image style={{marginHorizontal:20,width:200,height:133,borderRadius:10}} source={source}/>
            <Text style={{fontFamily:'Poppins-Regular',fontSize:16,fontWeight:'600',lineHeight:24,color:'black',paddingLeft:25,marginBottom:2}}>Loreal Salon & Spa</Text>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',width:200,justifyContent:'center',alignItems:'center'}}>
                <Text style={{flex:1,fontFamily:'Poppins-Regular',fontSize:12,fontWeight:'600',lineHeight:18,color:'#4CAF50',paddingLeft:25,marginBottom:1}}>Open</Text>
                <Icon name="schedule" size={15} color="#FF3737" style={{flex:1}}/>
                <Text style={{flex:3,fontFamily:'Poppins-Regular',fontSize:12,fontWeight:'500',lineHeight:18,color:'black',paddingLeft:4,marginBottom:1}}>10 Am to 11:30 Pm</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',width:198,justifyContent:'center',alignItems:'center',paddingLeft:25}}>
                {val==5?(fiveS):((val==4)?(fourS):((val==3)?(threeS):((val==2)?(twoS):(oneS))))}
                <Text style={{flex:1,fontFamily:'Poppins-Regular',fontSize:10,fontWeight:'500',lineHeight:24,color:'black',paddingLeft:25,marginBottom:2}}>11.5k Ratings</Text>
            </View>
        </TouchableOpacity>
    )
}
const BannerScroll=({nav,source})=>{
    return(
        <TouchableOpacity >
              <Image source={source} style={{width:'90%',height:115,alignSelf:'center',borderRadius:15}}/>
        </TouchableOpacity>
    )
}

const ServiceScroll=({iName,service,key,category,changeCateg})=>{
    return(
        <View  style={{borderRadius:8,marginHorizontal:20,height:70,width:70}}>
            <TouchableOpacity onPress={()=>changeCateg(service)}>
                <View style={{borderRadius:8,height:65,width:66,backgroundColor:(category==service?'#FF3737':'#F6F6F6'),justifyContent:'center'}}>
                    <Icon name={'email'} size={28} color={category==service?'white':'#FF3737'}/>
                </View>
            </TouchableOpacity>
           
           <Text style={{fontFamily:'Poppins-Regular',fontSize:11,fontWeight:'500',lineHeight:17,color:'black',textAlign:'center',textTransform:'capitalize',marginTop:5}}>{service}</Text>
        </View>
    )
}
const HomeContent=({navigation})=>{
    const [category,setCategory]=useState('Haircut');
    const changeCateg=(service)=>{
        setCategory(service);
    }
    return(
        <ScrollView style={{backgroundColor:'white',height:500,flex:1}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'90%',paddingRight:0,alignSelf:'center'}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',borderColor:'gray',borderWidth:1,width:'85%',backgroundColor:'#F9F9F9',paddingLeft:25,borderRadius:8,height:45}}>
                    <Icon
                        name="search"
                        size={25}
                        color="gray"
                        iconStyle={{alignSelf:'center'}}
                    />
                    <TextInput
                        style={{width:'80%',borderWidth:0,borderRadius:0, color: 'white',alignSelf:'center',backgroundColor:'transparent',marginTop:0}}
                        multiline={true}
                        editable={true}
                        // onChangeText={(text)=>{setSearch(text)}}
                        // value={search}
                        placeholderTextColor = "gray"
                        placeholder=" Search for salon, Services etc"
                ></TextInput>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Filters',{ns:4})}>
                    <View style={{alignItems:'center',width:40}}>
                        <LinearGradient  colors={['#FF5353', '#9A0000DB']} style={{width:'100%',height:45,alignItems:'center',justifyContent:'center',borderRadius:8}}>
                            <Icon name="tune" size={30} color="white"/>
                    </LinearGradient>
                    </View>
                </TouchableOpacity>
               
            </View>
           <View style={{height:200,width:'100%',justifyContent:'center',alignItems:'center'}}>
           <Swiper
                style={styles.wrapper}
                activeDotColor="red"
                activeDot={<View style={{backgroundColor: '#A900BD', width: 25, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                dot={<View style={{backgroundColor: 'white' , width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,borderColor:'gray',borderWidth:1}} />}
            >
                <View style={styles.slide1}>
                    <BannerScroll source={require('../../../statics/subland.jpeg')} nav={navigation}/>
                </View>
                <View style={styles.slide2}>
                    <BannerScroll source={require('../../../statics/subland.jpeg')} nav={navigation}/>
                </View>
                <View style={styles.slide3}>
                     <BannerScroll source={require('../../../statics/subland.jpeg')} nav={navigation}/>
                </View>
                <View style={styles.slide4}>
                     <BannerScroll source={require('../../../statics/poster.png')} nav={navigation}/>
                </View>
            </Swiper>
           </View>
           <Text style={{fontFamily:'Poppins-Regular',fontSize:16,fontWeight:'600',lineHeight:24,color:'black',paddingLeft:25,marginBottom:15}}>Top Services</Text>
           <View style={{height:85,marginBottom:0}}>
            <ScrollView  horizontal={true} >
                <ServiceScroll changeCateg={changeCateg} iName={'calendar'} service={'Haircut'} category={category}/>
                <ServiceScroll changeCateg={changeCateg} iName={'calendar'} service={'Haircut2'} category={category}/>
                <ServiceScroll changeCateg={changeCateg} iName={'calendar'} service={'Haircu'} category={category}/>
                <ServiceScroll changeCateg={changeCateg} iName={'calendar'} service={'Hairct'} category={category}/>
                <ServiceScroll changeCateg={changeCateg} iName={'calendar'} service={'Haicut'} category={category}/>
                
            </ScrollView>
           </View>
          
           <View style={{flexDirection:'row',justifyContent:'space-between',width:'90%',alignSelf:'center'}}>
            <Text style={{fontFamily:'Poppins-Regular',color:'white'}}>Curated for you</Text>
            <Icon name="chevron-right"
                size={24}
                color='white'
                />
           </View>
           <Text style={{fontFamily:'Poppins-Regular',fontSize:16,fontWeight:'600',lineHeight:24,color:'black',paddingLeft:25,marginBottom:15}}>Best  Rated Salon</Text>
           <View style={{height:194,marginBottom:20,}}>
            <ScrollView horizontal={true} >
                <CardScroll val={4} nav={navigation} source={require('../../../statics/movImg.png')}/>
                <CardScroll val={3} nav={navigation} source={require('../../../statics/movImg.png')}/>
                <CardScroll val={4} nav={navigation} source={require('../../../statics/movImg.png')}/>
                <CardScroll val={5} nav={navigation} source={require('../../../statics/movImg.png')}/>
                <CardScroll val={2} nav={navigation} source={require('../../../statics/movImg.png')}/>
              
            </ScrollView>
           </View>
        </ScrollView>
    )
}

export default HomeContent;
const styles = StyleSheet.create({
    wrapper: {
        marginTop:30
    },
    slide1: {
      flex: 1,
      backgroundColor: 'white'
    },
    slide2: {
      flex: 1,
      backgroundColor: 'white'
    },
    slide3: {
      flex: 1,
      backgroundColor: 'white'
    },
    slide4: {
        flex: 1,
        backgroundColor: 'white'
      },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })