import { StyleSheet } from 'react-native';
import { StatusBarHeight } from '../utils';

const common = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBar: {
    width: '100%',
    bottom: 0,
    right: 0,
    height: StatusBarHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  whiteBackGround: {
    backgroundColor: '#fff',
  },
  blueBackGround: {
    backgroundColor: '#91d3ff',
  },
  centerHorizontal: {
    alignItems: 'center',
  },
});

export default common;
