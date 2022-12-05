import { Platform, StatusBar } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const StatusBarHeight = Platform.select({
  ios: DeviceInfo.hasNotch() ? 44 : 20,
  android: StatusBar.currentHeight,
  default: 0,
});
