/** @format */

import axios from 'axios';

const getEndpoint = (endPoint: string) => {
  return 'https://apitest.virta.fi/v4/' + endPoint;
};

export const commonAPICall = async (requestedURL: string, payload: any) => {
  try {
    let data;

    const url = getEndpoint(requestedURL);

    if (payload) {
      data = await (await axios.post(url, payload)).data;
    } else {
      data = await (await axios.get(url)).data;
    }

    if (data) {
      return {success: true, payload: {...data}};
    } else {
      return {success: false, payload: data};
    }
  } catch (error) {
    return {success: false, payload: error};
  }
};
