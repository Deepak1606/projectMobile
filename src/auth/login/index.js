import React from "react";

import { View, Text, StatusBar, TouchableOpacity } from "react-native";

const LoginScreen = (props) => {
    return (
        <View style={{flex:1, backgroundColor:'#000000'}}>
            <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
            <View style={{}}>
                <Text style={{color:'#dddddd', textAlign:'center', padding:10, fontSize:32}}>Login</Text>
            </View>
            <View style={{flexGrow:1, justifyContent:'center', alignItems:'center'}}>
                <View style={{width:'80%', marginVertical:5, borderRadius:10, padding:10, borderWidth:1, borderColor:'#aaaaaa'}}>
                    <Text style={{color:'#dddddd'}}>Email Id</Text>
                </View>
                <View style={{width:'80%', marginVertical:5, borderRadius:10, padding:10, borderWidth:1, borderColor:'#aaaaaa'}}>
                    <Text style={{color:'#dddddd'}}>Password</Text>
                </View>
                <TouchableOpacity activeOpacity={0.6} style={{width:'80%', borderRadius:10, marginVertical:10, padding:5, backgroundColor:'#dddddd'}}>
                <Text style={{color:'#222222', padding:10, fontSize:16, fontWeight:'600', textAlign:'center'}}>Log In</Text>
                </TouchableOpacity>
                <View style={{width:'80%'}}>
                    <Text style={{color:'#dddddd'}}>Don't Have an account? Register Now</Text>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen