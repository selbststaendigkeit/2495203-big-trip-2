import {mockSentences} from './mock-text.js';
import {getCityPhotos, getRandomSentences} from '../utils.js';

const cities = [
  {
    id: 0,
    cityName: 'Amsterdam',
    description: getRandomSentences(mockSentences, 2),
    photos: getCityPhotos(2)
  },
  {
    id: 1,
    cityName: 'Chamonix',
    description: getRandomSentences(mockSentences),
    photos: getCityPhotos(3)
  },
  {
    id: 2,
    cityName: 'Geneva',
    description: getRandomSentences(mockSentences, 5),
    photos: getCityPhotos()
  },
  {
    id: 3,
    cityName: 'Vien',
    description: getRandomSentences(mockSentences, 4),
    photos: getCityPhotos(5)
  }
];

export {cities};
