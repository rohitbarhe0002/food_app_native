import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import COLORS from './src/consts/colors'
import DetailsScreen from './src/views/screens/DetailsScreen';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import BottomNavigator from './src/views/navigation/BottomNavigator';
import SignUpScreen from './src/views/screens/SignUpScreen';
import LoginScreen from './src/views/screens/LoginScreen';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
       <StatusBar  translucent backgroundColor="transparent"/>
 <Stack.Navigator  screenOptions={
   
   {
    headerShown: false,
    initialRouteName:'SignUpScreen'
    
  }}>
<Stack.Screen name='Signup' component={SignUpScreen}/>
    
<Stack.Screen name='OnBoardScreen' component={OnBoardScreen}/>
<Stack.Screen name='Login' component={LoginScreen}/>
<Stack.Screen name='Home' component={BottomNavigator}/>
<Stack.Screen name='Detaild' component={DetailsScreen}/>


 </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
