import axios from 'axios';

export const weatherApi = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/',
});

export const localApi = axios.create({
  baseURL: 'https://us1.locationiq.com/v1/',
})