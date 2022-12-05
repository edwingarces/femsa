import { StyleSheet } from 'react-native';

const home = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#91d3ff',
    height: 110,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 8,
  },
  birthDate: {
    fontSize: 12,
    fontWeight: '300',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 16,
  },
});

export default home;
