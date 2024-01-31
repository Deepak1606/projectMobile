import React from "react";
import { Text, View, ScrollView, TouchableOpacity, Dimensions, TextInput } from "react-native";

const BottomSheet = (props) => {
    const stopPropagation = event => event.stopPropagation();
    return (
        <TouchableOpacity activeOpacity={1} onPress={props.onClickPerimeters} style={{backgroundColor: "transparent", justifyContent:'flex-end', flex:1}}>
            <TouchableOpacity activeOpacity={1} onPress={stopPropagation} style={{padding:10, backgroundColor:'#eeeeee', borderTopEndRadius:10, borderTopStartRadius:10, maxHeight: Dimensions.get('screen').height/2, minHeight: Dimensions.get('screen').height/4}}>
                {props.children}
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default BottomSheet