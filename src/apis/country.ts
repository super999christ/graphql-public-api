import axios from 'axios';
import { GET_COUNTRY_URL } from '../constants';

// Gets country by ISO code (2~3 letters)
export const getCountry = (code: string): Promise<Country> => {
  return axios.get(`${GET_COUNTRY_URL}/${code}?format=json`)
    .then(res => {
      return res.data[1][0];
    })
    .catch(err => {
      console.error(err);
    });
};