import { StyleSheet } from 'react-native';

const details = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
    paddingLeft: 8,
  },
  card: {
    backgroundColor: '#91d3ff',
    margin: 16,
    padding: 30,
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  cardStatus: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  cardPrice: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default details;
