import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";

const AddToDo = (props) => {
    return (
        <TouchableOpacity onPress={() => props.navigation.goBack()} style={{backgroundColor: "transparent", justifyContent:'flex-end', flex:1}}>
            <View style={{padding:10, backgroundColor:'#eeeeee', borderTopEndRadius:10, borderTopStartRadius:10}}>
                <Text>Hi</Text>
            </View>
        </TouchableOpacity>
    )
}

export default AddToDo