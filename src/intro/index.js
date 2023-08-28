import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StatusBar } from "react-native";

const SplashIntro = (props) => {
    return(
        <View style={{flex:1, backgroundColor:'#000000'}}>
            <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
            <View style={{flex:0.5,justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:64, color:'white', fontWeight:'bold'}}>Project X</Text>
            </View>
            <View style={{flex:0.5, justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Login')} activeOpacity={0.5} style={{padding:10, width:'80%', backgroundColor:'#eeeeee', borderRadius:5, marginVertical:10 }}>
                    <Text style={{color:'black', textAlign:'center', fontWeight:'500', fontSize:16}}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Registration')} activeOpacity={0.5} style={{padding:10, width:'80%', backgroundColor:'#888888', borderRadius:5, marginVertical:10 }}>
                        <Text style={{color:'#eeeeee', textAlign:'center', fontWeight:'500', fontSize:16}}>Create New Account</Text> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')} activeOpacity={0.5} style={{padding:10, borderRadius:5, marginVertical:10 }}>
                    <Text style={{color:'white', fontWeight:'500', fontSize:16}}>Guest User?</Text> 
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SplashIntro