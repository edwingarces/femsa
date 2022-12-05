import { StyleSheet } from 'react-native';

const productsList = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
    paddingLeft: 8,
  },
  container: {
    backgroundColor: '#e6e6e6',
    maxHeight: '60%',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#c9c9c9',
    padding: 8,
    fontSize: 18,
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  circle: {
    width: 18,
    height: 18,
    backgroundColor: '#fff',
    borderRadius: 9,
    marginRight: 6,
  },
  chevronRight: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 16,
  },
});

export default productsList;
