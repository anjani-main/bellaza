import React,{useState,useEffect} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {Text,Image,View,TextInput} from 'react-native';
import Account from './Account';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfUse from './TermsofUse';
import Home from './Home';
import {Button, Icon} from 'react-native-elements';
import Header from '../../components/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Favourite from './Favourite';
import Support from './Support';
import CustomSidebarMenu from '../../components/CustomSideNavbar';
import Bookings from './Bookings';
import RegisterPartner from './RegisterPartner';
const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();
const Modal=()=>{
  useEffect(()=>{
    console.log("Hi")
  },[])
  
  const [coupon,setCoupon]=useState('');
  const [modal,setModal]=useState(true);

  return(
    <>
    <View>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
      >
        <View  style={{backgroundColor:'#37274B',width:"80%",height:350,alignSelf:'center',flexDirection:'column',justifyContent:'space-evenly',borderRadius:10}} >
          <Icon name="redeem" color={'#9E84FF'} size={30}/>
          <Text style={{color:'#9E84FF',fontSize:20,fontWeight:'600',fontFamily:'Poppins-Regular',alignSelf:'center'}}>Redeem Coupon</Text>
          <TextInput 
            value={coupon}
            onChangeText={(text)=>setCoupon(text)}
            style={{width:'80%',height:50,borderRadius:15,borderColor:'#6D44B8',borderWidth:1,alignSelf:'center',textAlign:'center',color:'#9E84FF'}}

            placeholder=" Enter Coupon code"
            placeholderTextColor='#9E84FF'
           />
           <Button title="Apply" onPress={()=>setModal(false)} buttonStyle={{width:'60%',height:46,backgroundColor:'#6644B8',borderRadius:15,alignSelf:'center'}} titleStyle={{alignSelf:'center'}} />
        </View>
      </Modal>
      </View>
    </>
  )
}

const MyDrawer=()=>{

    return (
   <Drawer.Navigator
        drawerType="front"
        initialRouteName="Home2"
        screenOptions={{
            activeTintColor: '#e91e63',
            itemStyle: { marginVertical: 10 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      <Drawer.Screen
          name="Home2"
          component={Home}
          options={{
          drawerActiveTintColor:'#181725',
          drawerActiveBackgroundColor:'none',
          drawerContentContainerStyle:{display:'none'},
          drawerLabelStyle:{display:'none'},
            headerShown:false,

          }}
          />
             <Drawer.Screen
            name="My Profile"
            component={Account}
            
            options={{
              drawerIcon: ({focused, size}) => (
                <MaterialCommunityIcons
                  name="account-circle-outline"
                  size={25}
                  color={'#FF3737'}
                />
           ),
            drawerActiveTintColor:'#181725',
            drawerActiveBackgroundColor:'none',
            drawerContentContainerStyle:{display:'none'},
            drawerLabelStyle:{color:'black'},
            headerShown:false,
            }}
          />
          
       
          <Drawer.Screen
            name="Favourite"
            component={Favourite}
            
            options={{
              drawerIcon: ({focused, size}) => (
                <Icon
                name="favorite-border"
                size={26}
                color={'#FF3737'}
             />
           ),
            drawerActiveTintColor:'#181725',
            drawerActiveBackgroundColor:'none',
            drawerContentContainerStyle:{display:'none'},
            drawerLabelStyle:{color:'black'},
            headerShown:false,
            }}
          />
          
          <Drawer.Screen
            name="My Bookings"
            component={Bookings}
            
            options={{
              drawerIcon: ({focused, size}) => (
                <MaterialCommunityIcons
                  name="ticket-percent-outline"
                  size={25}
                  color={'#FF3737'}
                />
           ),
            drawerActiveTintColor:'#181725',
            drawerActiveBackgroundColor:'none',
            drawerContentContainerStyle:{display:'none'},
            drawerLabelStyle:{color:'black'},
            headerShown:false,
            }}
          />
          
          <Drawer.Screen
            name="Share"
            component={Favourite}
            
            options={{
              drawerIcon: ({focused, size}) => (
                <Icon
                  name="share"
                  size={25}
                  color={'#FF3737'}
                />
           ),
            drawerActiveTintColor:'#181725',
            drawerActiveBackgroundColor:'none',
            drawerContentContainerStyle:{display:'none'},
            drawerLabelStyle:{color:'black'},
            headerShown:false,
            }}
          />
          
          <Drawer.Screen
            name="Register as partner"
            component={RegisterPartner}
            
            options={{
              drawerIcon: ({focused, size}) => (
                <Icon
                  name="wc"
                  size={25}
                  color={'#FF3737'}
                />
           ),
            drawerActiveTintColor:'#181725',
            drawerActiveBackgroundColor:'none',
            drawerContentContainerStyle:{display:'none'},
            drawerLabelStyle:{color:'black'},
            headerShown:false,
            }}
          />
          {/* <Drawer.Screen
          
          name="Reddem"
          mode="modal"
          component={Redeem}
          
          options={{
            drawerIcon: ({focused, size}) => (
              <Icon
                 name="redeem"
                 size={25}
                 color={'#FF3737'}
              />
           ),
            drawerActiveTintColor:'#181725',
            drawerActiveBackgroundColor:'none',
            drawerContentContainerStyle:{borderWidth:1,borderColor:'red'},
            drawerLabelStyle:{color:'white'},
            headerShown:false,
          }}
          />
          */}
          {/* <Drawer.Screen
          name="Downloads"
          component={Downloads}
          options={{
            drawerIcon: ({focused, size}) => (
              <Icon
                 name="file-download"
                 size={25}
                 color={'#FF3737'}
              />
           ),
            drawerActiveTintColor:'#181725',
            drawerActiveBackgroundColor:'none',
            drawerContentContainerStyle:{borderWidth:1,borderColor:'red'},
            drawerLabelStyle:{color:'white'},
            headerShown:false,
          }}
          />
         */}
          <Drawer.Screen
          
            name="PrivacyPolicy"
            component={PrivacyPolicy}
            options={{
            drawerActiveTintColor:'#181725',
            drawerActiveBackgroundColor:'none',
            drawerLabelStyle:{color:'#B6B5B5'},
            headerShown:false,
          }}
          />
          <Drawer.Screen
          
            name="TermsOfUse"
            component={TermsOfUse}
            
            options={{
            drawerActiveTintColor:'#181725',
            drawerActiveBackgroundColor:'none',
            drawerContentContainerStyle:{display:'none'},
            drawerLabelStyle:{color:'#B6B5B5'},
            headerShown:false,
            }}
          />
          <Drawer.Screen
          name="Support"
          component={Support}
          options={{
          drawerActiveTintColor:'#181725',
          drawerActiveBackgroundColor:'none',
          drawerContentContainerStyle:{display:'none'},
          drawerLabelStyle:{color:'#B6B5B5'},
          headerShown:false,
          }}
          />
          <Drawer.Screen
          name="Account"
          component={Account}
          options={{
          drawerActiveTintColor:'#181725',
          drawerActiveBackgroundColor:'none',
          drawerLabelStyle:{display:'none'},
          headerShown:false,
          }}
          />
          
          
    </Drawer.Navigator>
    
    )
  }


export default MyDrawer;