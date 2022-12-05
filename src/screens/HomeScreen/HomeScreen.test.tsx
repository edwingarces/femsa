/**
 * @format
 */

import 'react-native';
import React from 'react';
import HomeScreen from './';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
jest.useFakeTimers();
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native-device-info', () => ({
  hasNotch: jest.fn(),
}));

const items = [
  {
    createdAt: '2022-11-17T00:15:55.519Z',
    id: '1',
    image: 'http://loremflickr.com/640/480/city',
    is_redemption: true,
    price: '292.00',
    product: 'Ergonomic Rubber Towels',
  },
];

jest.mock('../../hooks/useRequest', () => {
  return () => ({
    response: {
      data: items,
      status: 200,
    },
    execCall: jest.fn(),
    error: false,
  });
});

type NavigationScreenPropAlias = NativeStackNavigationProp<{}>;

describe('HomeScreen', () => {
  let navigation: Partial<NavigationScreenPropAlias>;
  beforeEach(() => {
    navigation = {
      navigate: jest.fn(),
    };
  });

  it('HomeScreen', () => {
    render(<HomeScreen navigation={navigation as NavigationScreenPropAlias} />);
    fireEvent.press(screen.getByText(items[0].product));
    fireEvent.press(screen.getByText('Canjeados'));
    fireEvent.press(screen.getByText('Ganados'));
  });
});
