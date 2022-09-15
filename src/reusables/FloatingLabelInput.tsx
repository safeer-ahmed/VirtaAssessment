import React, {useEffect, useState} from 'react';
import {
  Animated,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import Colors from '../themes/Colors';
import Images from '../themes/Images';

interface FloatingLabelInputProps {
  value: string;
  containerStyle: ViewStyle;
  iconLeft: ImageSourcePropType;
  label: string;
  isPassword: boolean;
  iconRight: ImageSourcePropType;
  passwordIcon: ImageSourcePropType;
  onChangeText: Function;
}

const FloatingLabelInput = (props: FloatingLabelInputProps) => {
  const [focused, isFocused] = useState(false);
  const _animatedIsFocused = new Animated.Value(props.value === '' ? 0 : 1);
  const handleFocus = () => isFocused(true);
  const handleBlur = () => isFocused(false);

  useEffect(() => {
    Animated.timing(_animatedIsFocused, {
      toValue: focused || props.value != '' ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [focused]);

  const labelStyle = {
    position: 'absolute',
    left: 0,
    top: _animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 0],
    }),
    fontSize: _animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 14],
    }),
    color: _animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#000'],
    }),
  };

  return (
    <View
      style={[
        styles.container,
        props.containerStyle,
        {
          borderBottomColor: focused ? Colors.primary : '#555',
        },
      ]}>
      <Image
        source={props.iconLeft}
        style={[
          styles.icon,
          {
            marginRight: 16,
          },
        ]}
      />
      <View style={styles.inputRow}>
        <Animated.Text style={labelStyle}>{props.label}</Animated.Text>
        <TextInput
          {...props}
          style={styles.textInput}
          secureTextEntry={props.isPassword}
          onFocus={handleFocus}
          onBlur={handleBlur}
          blurOnSubmit
          onChangeText={text => props.onChangeText(text)}
        />
      </View>
      <Image
        source={
          props.isPassword && focused ? props.iconRight : props.passwordIcon
        }
        style={styles.icon}
      />
    </View>
  );
};

FloatingLabelInput.defaultProps = {
  value: '',
  containerStyle: {},
  iconLeft: Images.Person,
  label: 'string',
  isPassword: false,
  iconRight: Images.Cross,
  passwordIcon: Images.Lock,
};

export default FloatingLabelInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 4,
  },
  icon: {
    width: 30,
    height: 30,
  },
  inputRow: {
    paddingTop: 16,
    flex: 1,
  },
  textInput: {
    fontSize: 20,
    margin: 0,
    padding: 0,
    color: '#000',
  },
});
