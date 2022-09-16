import {Image, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../themes/Colors';
import Images from '../themes/Images';

interface HeaderProps {
  title: string;
  rightPress: Function;
}

const AppHeader = (props: HeaderProps) => {
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
          color: Colors.text,
        }}>
        {props.title}
      </Text>
      <TouchableOpacity onPress={props.rightPress}>
        <Image
          source={Images.Cross}
          style={{
            width: 24,
            height: 24,
            marginRight: 16,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;
