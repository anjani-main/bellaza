import React, { useState } from 'react';
import {View,Text, StyleSheet, TouchableOpacity,ScrollView,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationHome from './NavigationHome';
import NavigationFavourite from './NavigationFavourite';




const Tab=createBottomTabNavigator();

const Home=()=>{
    return(
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                return <IonIcon name="github" size={37} color="blue"     />;
              },
              
            })}
        tabBarOptions={{
            showLabel:false,
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}
        >
            <Tab.Screen
                name="Home"
                component={NavigationHome}
                options={{
                    header:()=>{
                        return <Header title="Home"/>
                    },
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home-outline" color={color} size={30} />
                    ),
                }}
            />
              <Tab.Screen
                name="Favourite"
                component={NavigationFavourite}
                options={{
                    header:()=>{
                        return <Header title="Favourite"/>
                    },
                    tabBarIcon: ({ color }) => (
                        <Icon
                        name="favorite-border"
                        size={26}
                        color={color}
                     />
                    ),
                }}
            />
             <Tab.Screen
                name="Calender"
                component={NavigationFavourite}
                options={{
                    header:()=>{
                        return <Header title="Home"/>
                    },
                    tabBarIcon: ({ color }) => (
                        <View style={{backgroundColor:'red',width:60,height:60,borderRadius:100,alignItems:'center',justifyContent:'center',position:'relative',top:-10}}>
                            <MaterialCommunityIcons name="calendar" color={`white`} size={30} />
                        </View>
                        
                    ),
                    tabBarIconStyle:{position:'relative',top:-10,backgroundColor:'red'}
                }}
            />
              <Tab.Screen
                name="Notifications"
                component={NavigationFavourite}
                options={{
                    header:()=>{
                        return <Header title="Notifications"/>
                    },
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell-outline" color={color} size={30} />
                    ),
         
                  
                }}
            />
              <Tab.Screen
                name="Settings"
                component={NavigationFavourite}
                options={{
                    header:()=>{
                        return <Header title="Settings"/>
                    },
                    tabBarIcon: ({ color }) => (
                        
                        <MaterialCommunityIcons name="cog-outline" color={color} size={30} />
                    ),
                }}
            />
          


        </Tab.Navigator>
    )
}

export default Home;
