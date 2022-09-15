/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {LOGIN_URL} from '../constants/endpoints';
import {USER_DATA} from '../constants/keys';
import {LoginResponse} from '../models/auth/LoginResponse';

import FloatingLabelInput from '../reusables/FloatingLabelInput';
import {commonAPICall} from '../services/api';
import {retrieveItem, storeItem} from '../services/storeUtil';
import Colors from '../themes/Colors';
import Images from '../themes/Images';

const Login = ({navigation, route}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginImage, showLoginImage] = useState(true);

  const attemptLogin = (userName: string, password: string) => {
    const body = {email: 'candidate1@virta.global', code: '1Candidate!'};
    commonAPICall(LOGIN_URL, body)
      .then(response => {
        if (response?.success) {
          const userData: LoginResponse = response.payload;

          storeItem(USER_DATA, userData).then(() => {
            retrieveItem(USER_DATA).then(response => {
              navigation.replace('NearbyList');
            });
          });
        } else {
          Alert.alert('Ooops', 'Response returned but is malformed!');
        }
        console.log('response: ', response);
      })
      .catch(error => {
        console.log('catch: ', error);
        Alert.alert('Ooops', error.toString());
      });
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      showLoginImage(false);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      showLoginImage(true);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              flex: 1,
            }}
            contentContainerStyle={{
              flexGrow: 1,
              marginBottom: 16,
              padding: 16,
            }}>
            {loginImage && <Image source={Images.Login} />}

            <FloatingLabelInput
              label="Email"
              iconLeft={Images.Person}
              iconRight={Images.Cross}
              containerStyle={{marginVertical: 16}}
              value={userName}
              onChangeText={(text: string) => setUserName(text)}
            />

            <FloatingLabelInput
              label="Password"
              iconLeft={Images.Lock}
              iconRight={Images.Cross}
              passwordIcon={Images.Info} //Correct image is not there in the provided resources
              isPassword={true}
              value={password}
              onChangeText={(text: string) => setPassword(text)}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 16,
                paddingHorizontal: 4,
              }}>
              <Text
                style={{
                  color: Colors.primary,
                  fontSize: 18,
                }}>
                I Forgot!
              </Text>

              <Text
                style={{
                  color: Colors.primary,
                  fontSize: 18,
                }}>
                Register and benefit
              </Text>
            </View>
          </ScrollView>
          <Pressable
            style={{
              backgroundColor: Colors.secondary,
              height: 56,
              elevation: 16,
              justifyContent: 'center',
            }}
            onPress={() => {
              attemptLogin(userName, password);
            }}>
            <Text
              style={{
                color: Colors.text,
                fontSize: 18,
                marginHorizontal: 16,
                fontWeight: 'bold',
              }}>
              Log In
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
