/**
 * @format
 */

import 'react-native';
import React from 'react';
import DetailStatus from './';
import { render, screen } from '@testing-library/react-native';
jest.useFakeTimers();
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native-device-info', () => ({
  hasNotch: jest.fn(),
}));

describe('DetailStatus', () => {
  it('DetailStatus with redemption', async () => {
    render(<DetailStatus price="100" isRedemption />);
    expect(screen.getByText('Utilizaste')).toBeTruthy();
  });
  it('DetailStatus with no redemption', async () => {
    render(<DetailStatus price="100" />);
    expect(screen.getByText('Ganaste')).toBeTruthy();
  });
});
