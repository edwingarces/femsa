import React from 'react';
import { View, Text } from 'react-native';
import { details } from '../../styles';

interface DetailStatusProps {
  price: string;
  isRedemption?: boolean;
}

const DetailStatus = ({ price, isRedemption = false }: DetailStatusProps) => {
  const { card, cardPrice, cardStatus } = details;
  const title = isRedemption ? 'Utilizaste' : 'Ganaste';
  return (
    <View style={card}>
      <Text style={cardStatus}>{title}</Text>
      <Text style={cardPrice}>{price} puntos</Text>
    </View>
  );
};

export default DetailStatus;
