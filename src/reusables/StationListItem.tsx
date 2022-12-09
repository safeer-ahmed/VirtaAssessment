import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Station} from '../models/nearby/Station';
import Colors from '../themes/Colors';
import Images from '../themes/Images';

interface StationProps {
  station: Station;
}

const StationListItem = (props: StationProps) => {
  const {station} = props;

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

export default React.memo(StationListItem);

const styles = StyleSheet.create({
  rowContainer: {
    backgroundColor: Colors.cellBackground,
    padding: 16,
    margin: 4,
  },
  sectionTitle: {fontWeight: 'bold', fontSize: 18},
  powerRow: {flexDirection: 'row', flex: 1, marginVertical: 16},
  powerCell: {flex: 1},
});
