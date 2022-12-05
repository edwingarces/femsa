/**
 * @format
 */

import 'react-native';
import React from 'react';
import DetailScreen from './';
import { render, screen, fireEvent } from '@testing-library/react-native';
jest.useFakeTimers();
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native-device-info', () => ({
  hasNotch: jest.fn(),
}));

const item = {
  createdAt: '2022-11-17T00:15:55.519Z',
  id: '1',
  image: 'http://loremflickr.com/640/480/city',
  is_redemption: true,
  price: '292.00',
  product: 'Ergonomic Rubber Towels',
};

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      goBack: jest.fn(),
    }),
    useRoute: () => ({
      params: {
        item,
      },
    }),
  };
});

describe('DetailScreen', () => {
  it('DetailScreen ', async () => {
    render(<DetailScreen />);
    expect(screen.getByText(item.product)).toBeTruthy();
    fireEvent.press(screen.getByText('Regresar'));
  });
});
