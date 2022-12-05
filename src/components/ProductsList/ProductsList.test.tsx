/**
 * @format
 */

import 'react-native';
import React from 'react';
import ProductsList from './';
import { render, screen, fireEvent } from '@testing-library/react-native';
jest.useFakeTimers();
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native-device-info', () => ({
  hasNotch: jest.fn(),
}));

const positiveItems = [
  {
    createdAt: '2022-11-17T00:15:55.519Z',
    id: '1',
    image: 'http://loremflickr.com/640/480/city',
    is_redemption: true,
    price: '292.00',
    product: 'Ergonomic Rubber Towels',
  },
];

const negativeItems = [
  {
    createdAt: '2022-11-17T00:15:55.519Z',
    id: '1',
    image: 'http://loremflickr.com/640/480/city',
    is_redemption: false,
    price: '292.00',
    product: 'Ergonomic Rubber Towels',
  },
];

const onPress = jest.fn();

describe('ProductsList', () => {
  it('ProductsList with redemption', async () => {
    render(<ProductsList data={positiveItems} onPress={onPress} />);
    fireEvent.press(screen.getByText(positiveItems[0].product));
    expect(onPress).toHaveBeenCalled();
  });
  it('ProductsList with no redemption', async () => {
    render(<ProductsList data={negativeItems} onPress={onPress} />);
    fireEvent.press(screen.getByText(positiveItems[0].product));
    expect(onPress).toHaveBeenCalled();
  });
});
