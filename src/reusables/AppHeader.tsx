import {Image, Text, View} from 'react-native';
import Colors from '../themes/Colors';
import Images from '../themes/Images';

interface HeaderProps {
  title: string;
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

export default AppHeader;
