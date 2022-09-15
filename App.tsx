/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image, LogBox, Text, View} from 'react-native';
import Login from './src/screens/Login';
import NearbyList from './src/screens/NearbyList';
import Colors from './src/themes/Colors';
import Images from './src/themes/Images';

LogBox.ignoreAllLogs();
const Stack = createNativeStackNavigator();

const LoginHeader = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
          color: Colors.textColor,
        }}>
        Log In and Charge!
      </Text>
      <Image
        source={Images.Cross}
        style={{
          width: 24,
          height: 24,
          marginRight: 16,
        }}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: props => <LoginHeader />,
          }}
        />
        <Stack.Screen name="NearbyList" component={NearbyList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
