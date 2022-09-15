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

import FloatingLabelInput from '../reusables/FloatingLabelInput';
import Colors from '../themes/Colors';
import Images from '../themes/Images';

const Login = ({navigation, route}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginImage, showLoginImage] = useState(true);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      console.log('keyboard shown');
      showLoginImage(false);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      console.log('keyboard hide');
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
              console.log('im adsfas');
            }}>
            <Text
              style={{
                color: Colors.textColor,
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
