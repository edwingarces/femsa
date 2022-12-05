import { StatusBarHeight } from './';
jest.mock('react-native-device-info', () => ({
  hasNotch: () => true,
}));
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'android',
  select: jest.fn(),
}));

it('', () => {
  const height = StatusBarHeight;
  console.log(height);
});
