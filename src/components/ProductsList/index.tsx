import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ItemProps, ProductsListProps, RenderItemProps } from '../../types';
import { productsList, common } from '../../styles';

const Item = ({ item, onPress }: ItemProps) => {
  const { item: itemStyle, circle, chevronRight } = productsList;
  const { product, price, is_redemption } = item;
  const symbol = is_redemption ? '-' : '+';
  const { row } = common;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={itemStyle}>
        <View style={row}>
          <View style={circle} />
          <Text>{product}</Text>
        </View>
        <View style={row}>
          <Text>
            {symbol}${price}
          </Text>
          <Text style={chevronRight}>{'>'}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const ProductsList = ({ data, onPress }: ProductsListProps) => {
  const { container } = productsList;

  const renderItem = ({ item }: RenderItemProps) => {
    return <Item item={item} onPress={() => onPress(item)} />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      nestedScrollEnabled
      style={container}
    />
  );
};

export default ProductsList;
