/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { act, create } from 'react-test-renderer';
jest.useFakeTimers();
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native-device-info', () => ({
  hasNotch: jest.fn(),
}));

it('renders correctly', async () => {
  act(() => {
    create(<App />);
  });
});
