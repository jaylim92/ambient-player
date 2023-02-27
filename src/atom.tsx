import { atom } from 'recoil';
import { IWeatherData } from './App';

export const weatherInfo = atom<IWeatherData | null>({
  key: 'weatherInfo',
  default: null,
});

export const imgUrlState = atom({
  key: 'imgUrl',
  default: {},
});
