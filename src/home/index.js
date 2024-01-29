import React, {useEffect, useState} from "react";

import { View, Text, PermissionsAndroid, StatusBar, ScrollView, Image, TouchableOpacity, FlatList, Modal, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import RNCalendarEvents from "react-native-calendar-events";
import { PERMISSIONS, request } from "react-native-permissions";
import AddToDo from "./components/addTodo";

const HomeScreen = (props) => {
    const [todoList, setTodoList] = useState([])
    useEffect(() => {
        // RNCalendarEvents.checkPermissions((readOnly = false)).then(success => {
        //     console.log(success)
        //     if(success !== 'authorized') {
        //         RNCalendarEvents.requestPermissions((readOnly = false))
        //     }
        //     else {
        //         RNCalendarEvents.findCalendars().then(succes => {
        //             console.log(succes)
        //         }).catch(err => console.log(err))
        //     }
        // }).catch(err => console.log(err))
    },[])
    
    const addToDo = () => {
        // const loremipsumString = 'Excepteur duis ullamco aliquip occaecat deserunt ipsum aliquip sit et dolor ut nulla. Proident magna consequat in magna id. Nulla consectetur nostrud adipisicing occaecat laboris quis officia proident exercitation laborum qui culpa. Reprehenderit culpa id duis cupidatat commodo est ut cupidatat aliqua'
        // const todoObj = {
        //     index: todoList?.length + 1,
        //     text: loremipsumString.slice(Math.min(Math.random()*200, loremipsumString?.length - 10)),
        // }
        // setTodoList(prev => ([...prev, todoObj]))
        props.navigation.push('AddList')
    }
    const _renderItem = ({item, index}) => {
        return (
            <TouchableOpacity style={{padding:10, margin:10, borderRadius:10, backgroundColor:'#eeeeee95', borderColor:'#dddddd', borderWidth:1}}>
                <Text>{item?.text}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            <StatusBar backgroundColor={'#000000'} barStyle={'light-content'} />
            <View style={{padding:10, alignItems:'center'}}>
                <Text style={{color:'#65aa22', fontWeight:'500', fontSize:24}}>To Do List</Text>
            </View>
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={todoList}
            renderItem={_renderItem}
            key={(item) => item?.index}
            />
        <TouchableOpacity onPress={addToDo} style={{position:'absolute', right:20, bottom:20, padding:30, backgroundColor:'#65aa22', borderRadius:50}}>
                {/* <Image style={{height:20, width:20}} source={{uri:''}} /> */}
        </TouchableOpacity>
        </View>
    )
}

export default HomeScreen