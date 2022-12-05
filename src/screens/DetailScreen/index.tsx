import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../../components/CustomButton';
import DetailStatus from '../../components/DetailStatus';
import { common, details } from '../../styles';
import { ItemType } from '../../types';

const DetailScreen = () => {
  const { mainContainer, statusBar, whiteBackGround, centerHorizontal } =
    common;
  const { title } = details;
  const navigation = useNavigation();
  const route = useRoute<RouteProp<{ params: { item: ItemType } }>>();

  const {
    params: {
      item: { price, is_redemption: isRedemption, product },
    },
  } = route;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={[statusBar, whiteBackGround]} />
      <View style={[mainContainer, whiteBackGround]}>
        <Text style={title}>{product}</Text>
        <DetailStatus price={price} isRedemption={isRedemption} />
        <View style={centerHorizontal}>
          <CustomButton title="Regresar" onPress={handleGoBack} />
        </View>
      </View>
    </>
  );
};

export default DetailScreen;
