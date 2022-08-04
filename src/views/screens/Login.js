import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import COLORS from '../../consts/colors';
import { PrimaryButton } from '../components/Button';

import AsyncStorage from '@react-native-async-storage/async-storage';



const LoginScreen = ({ navigation }) => {

    const handleSignup = () => {
        AsyncStorage.setItem('@storage_Key', value)
        navigation.navigate('OnBoardScreen')
    }
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={style.container}>
                <View style={{ backgroundColor: COLORS.primary, height: 50, width: 150, borderRadius: 40 }}>
                    <Text style={{ fontSize: 45, textAlign: 'center', color: COLORS.white, fontWeight: 'bold' }} >Foodie</Text>
                </View>
                <View style={{ top: '10%', alignSelf: 'flex-start', marginHorizontal: 30 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Wellcome!</Text>
                </View>

                <View style={style.row}>
                    <Text style={{ ...style.label, paddingTop: 10 }}>Username</Text>
                    <TextInput style={{ ...style.input, marginBottom: 20 }} placeholder={'Username'} />
                    <Text style={{ ...style.label }}> Password</Text>
                    <TextInput style={style.input} placeholder={'Password'} />
                </View>

                <TouchableOpacity onPress={() => handleSignup}>
                    <View style={{ flexDirection: 'row', backgroundColor: COLORS.primary, height: 50, width: 150, alignSelf: 'center', top: '22%', borderRadius: 30 }}>
                        <Text style={{ flex: 1, color: '#fff', textAlign: 'center', alignSelf: 'center', fontSize: 22, fontWeight: 'bold' }}>Login</Text>
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
        top: '-8%'
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
export default LoginScreen