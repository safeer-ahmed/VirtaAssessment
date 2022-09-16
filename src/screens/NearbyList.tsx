/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {CommonActions} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {USER_DATA} from '../constants/keys';
import {MockedStations} from '../models/nearby/MockedStations';
import {Station} from '../models/nearby/Station';
import AppHeader from '../reusables/AppHeader';
import {clearStorage} from '../services/storeUtil';
import Colors from '../themes/Colors';
import Images from '../themes/Images';
import {calculateDistance} from '../utils/Utils';

const NearbyList = ({navigation, route}) => {
  const [stations, setStations] = useState<Station[]>();

  const itemStation = (station: Station) => {
    return (
      <View style={styles.rowContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.sectionTitle}>{station.name}</Text>
            <Text>
              {station.address}, {station.city}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>{Math.round(station.distanceFromMe).toFixed(2)} km</Text>
            <Image source={Images.RightArrow} style={{width: 14, height: 14}} />
          </View>
        </View>

        <View style={styles.powerRow}>
          <View style={styles.powerCell}>
            <Text style={styles.sectionTitle}>00</Text>
            <Text>kW</Text>
          </View>
          <View style={styles.powerCell}>
            <Text style={styles.sectionTitle}>00</Text>
            <Text>kW</Text>
          </View>
          <View style={styles.powerCell}>
            <Text style={styles.sectionTitle}>00</Text>
            <Text>kW</Text>
          </View>
          <View style={styles.powerCell}>
            <Text style={styles.sectionTitle}>00</Text>
            <Text>kW</Text>
          </View>
        </View>
      </View>
    );
  };

  useEffect(() => {
    const myLocation = {latitude: 62.6040496, longitude: 29.7444736};
    MockedStations.map((item, index) => {
      console.log(
        'index: ',
        index,
        ', lat',
        item.latitude,
        ', lon: ',
        item.longtitude,
      );

      MockedStations[index].distanceFromMe = calculateDistance(
        myLocation.latitude,
        myLocation.longitude,
        item.latitude,
        item.longtitude,
        'K',
      );
    });

    const distancedList = MockedStations.sort(
      (a, b) => a.distanceFromMe - b.distanceFromMe,
    );
    setStations(distancedList);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <AppHeader
          title="Nearby List"
          rightPress={() => {
            clearStorage(USER_DATA)
              .then(() => {
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{name: 'Login'}],
                  }),
                );
              })
              .catch();
          }}
        />
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <FlatList
        data={stations}
        keyExtractor={item => item?.id.toString()}
        renderItem={({item, index}) => itemStation(item)}
      />
    </SafeAreaView>
  );
};

export default NearbyList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  rowContainer: {
    backgroundColor: Colors.cellBackground,
    padding: 16,
    margin: 4,
  },
  sectionTitle: {fontWeight: 'bold', fontSize: 18},
  powerRow: {flexDirection: 'row', flex: 1, marginVertical: 16},
  powerCell: {flex: 1},
});
