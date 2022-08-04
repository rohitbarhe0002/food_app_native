import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput,Alert  } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';



const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    const handleLogin = async () => {
        console.log("coe in login ");
        try{
       const loginData =  await  AsyncStorage.getItem('@storage_data')
       console.log(loginData,"login data");
       console.log(username,"username");
       if (username===loginData)
       {
              console.log("come in conditionfdfdf");
          navigation.navigate('OnBoardScreen')
       }
       else{
        Alert.alert(
            "Alert Title",
            "Pls sign up for Login",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
       }
        }catch (error){
console.log(error);
        }

  
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={style.container}>
            <View style={{ backgroundColor: COLORS.primary, height: 60,position:'relative', width: 190, borderRadius: 40 }}>
                <Text style={{ fontSize: 40,padding:10, textAlign: 'center', color: COLORS.white, fontWeight: 'bold' }} >Foodie</Text>
            </View>
            <View style={{ top: '10%', alignSelf: 'flex-start', marginHorizontal: 30 }}>
                <Text style={{ fontSize: 22, fontWeight: '600',marginBottom:5 }}>Login  <Icon name="login" style={{top:20,color:'grey'}} size={25}/></Text>
            </View>

            <View style={style.row}>
                <Text style={{ ...style.label, paddingTop: 10 }}>Username</Text>
                <TextInput style={{ ...style.input, marginBottom: 20 }} value={username} onChangeText={(username)=>setUsername(username)} placeholder={'Username'} />
                <Text style={{ ...style.label }}> Password</Text>
                <TextInput style={style.input}  value = {password} onChangeText={(password)=>setPassword(password)} placeholder={'Password'} />
            </View>
            <TouchableOpacity onPress={handleLogin}>
            <View style={  { display:'flex', backgroundColor: COLORS.primary, height: 50, width: 150,  borderRadius: 30,flexDirection:'row',marginTop:'30%'}}>
                    <Text style={{  color: '#fff', fontSize: 22, fontWeight: 'bold',marginTop:10,marginLeft:50 }}>Login</Text>
                </View> 
                </TouchableOpacity>
        </View>

     
              
       
    </SafeAreaView>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        top: '2%'
    },
    input: {
        display: 'flex',
        height: 40,
        margin: 0,
        borderWidth: 1,
        padding: 10,
        // width:300

    },
    row: {
        top: '10%',
        alignSelf: 'baseline',
        marginHorizontal: 20,
        width: 320,



    },
    label: {
        fontWeight: 'bold',
        marginHorizontal: 5,
        fontSize: 15
    },
    input: {
        height: 40,
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'light-grey',
        borderColor: COLORS.primary
    },
})
export default LoginScreen;