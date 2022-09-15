import {AsyncStorage} from 'react-native';

export const storeItem = (key: string, value: any) => {
  return AsyncStorage.setItem(key, JSON.stringify(value));
};

export const retrieveItem = (key: string) => {
  return AsyncStorage.getItem(key);
};
