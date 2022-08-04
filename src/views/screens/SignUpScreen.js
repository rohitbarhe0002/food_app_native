import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/colors';
import { PrimaryButton } from '../components/Button';

import AsyncStorage from '@react-native-async-storage/async-storage';



const SignUpScreen = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSignUp = () => {
        console.log("fgfgg");
       console.log(username,password,"=====her is object");
       
        AsyncStorage.setItem('@storage_data', username)
        navigation.navigate('Login')
    }
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={style.container}>
                <View style={{ backgroundColor: COLORS.primary, height: 60, width: 190, borderRadius: 40 }}>
                    <Text style={{ fontSize: 40,padding:10, textAlign: 'center', color: COLORS.white, fontWeight: 'bold' }} >Foodie</Text>
                </View>
                <View style={{ top: '10%', alignSelf: 'flex-start', marginHorizontal: 30 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Wellcome!</Text>
                </View>

                <View style={style.row}>
                    <Text style={{ ...style.label, paddingTop: 10 }}>Username</Text>
                    <TextInput style={{ ...style.input, marginBottom: 20 }} value={username} onChangeText={(username)=>setUsername(username)} placeholder={'Username'} />
                    <Text style={{ ...style.label }}> Password</Text>
                    <TextInput style={style.input}  value = {password} onChangeText={(password)=>setPassword(password)} placeholder={'Password'} />
                </View>
                <TouchableOpacity onPress={handleSignUp}>
                <View style={  { display:'flex', backgroundColor: COLORS.primary, height: 50, width: 150,  borderRadius: 30,flexDirection:'row',marginTop:'30%'}}>
                        <Text style={{  color: '#fff', fontSize: 22, fontWeight: 'bold',marginTop:10,marginLeft:50 }}>sign up</Text>
                    </View> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Text style={{color:'#0f0f0',borderWidth:1,borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0,borderBottomColor:'#000'}}>already have an accoun ?</Text>
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
        top: '3%'
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
        justifyContent:'center'

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
export default SignUpScreen