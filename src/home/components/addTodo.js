import React from "react";
import { Text, View, ScrollView, TouchableOpacity, Dimensions, TextInput } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'

const AddToDo = (props) => {
    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            <View style={{padding:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Ionicons 
            name="chevron-back-outline"
            size={24}
            color={"#222222"}
            onPress={() => props.navigation.goBack()}
            />
            <Text style={{fontSize:18, color:'#222222', fontWeight:'600'}}>Header</Text>
            <View />
            </View>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            >
            </ScrollView>
        </View>
    )
}

export default AddToDo