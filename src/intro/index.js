import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

const SplashIntro = (props) => {
    return(
        <ImageBackground source={require('../assets/bg.jpg')} style={{flex:1}}>
            <View style={{flex:0.5,justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:64, color:'white', fontWeight:'bold'}}>Project X</Text>
            </View>
            <View style={{flex:0.5, justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Login')} activeOpacity={0.5} style={{padding:10, backgroundColor:'#9cff99', borderRadius:5, marginVertical:10 }}>
                    <Text style={{color:'black', fontWeight:'500', fontSize:16}}>Log in to your account</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Registration')} activeOpacity={0.5} style={{padding:10, backgroundColor:'#9cff99', borderRadius:5, marginVertical:10 }}>
                        <Text style={{color:'black', fontWeight:'500', fontSize:16}}>Create New Account</Text> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')} activeOpacity={0.5} style={{padding:10, backgroundColor:'#9cff99', borderRadius:5, marginVertical:10 }}>
                    <Text style={{color:'black', fontWeight:'500', fontSize:16}}>Guest User</Text> 
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default SplashIntro