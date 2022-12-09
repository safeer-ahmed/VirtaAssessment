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
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Keys} from './src/constants';
import Login from './src/screens/Login';
import NearbyList from './src/screens/NearbyList';
import {retrieveItem} from './src/services/storeUtil';

const Stack = createNativeStackNavigator();

const App = () => {
  const [wait, keepWaiting] = useState(true);
  const [initialRoute, setInitialRouteName] = useState('Login');

  const validateUser = () => {
    retrieveItem(Keys.USER_DATA).then(response => {
      if (response) {
        // TODO: Perform the token expiry check
        setInitialRouteName('NearbyList');
      } else {
        setInitialRouteName('Login');
      }
      keepWaiting(false);
    });
  };

  useEffect(() => {
    validateUser();
  }, []);

  return wait ? (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size={'large'} />
    </View>
  ) : (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="NearbyList" component={NearbyList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
