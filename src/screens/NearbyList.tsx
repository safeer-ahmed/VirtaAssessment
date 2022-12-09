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
import {FlatList, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {USER_DATA} from '../constants/keys';
import {MockedStations} from '../models/nearby/MockedStations';
import {Station} from '../models/nearby/Station';
import AppHeader from '../reusables/AppHeader';
import StationListItem from '../reusables/StationListItem';
import {clearStorage} from '../services/storeUtil';
import Colors from '../themes/Colors';
import {calculateDistance} from '../utils/Utils';

const NearbyList = ({navigation, route}) => {
  const [stations, setStations] = useState<Station[]>();

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

  const renderStationItem = ({item}: {item: Station}) => {
    return <StationListItem station={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <FlatList
        data={stations}
        keyExtractor={item => item?.id.toString()}
        renderItem={renderStationItem}
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
});
