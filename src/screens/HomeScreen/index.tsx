/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import HomeHeader from '../../components/HomeHeader';
import ProductsList from '../../components/ProductsList';
import useRequest from '../../hooks/useRequest';
import { common, productsList as productsListStyle, home } from '../../styles';
import { ItemType, HookResponse, ReturnedValues } from '../../types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CustomButton from '../../components/CustomButton';

interface HomeScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

type filters = 'positive' | 'negative';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [productsList, setProductsList] = useState<[] | ItemType[]>([]);
  const {
    response: productsResponse,
    execCall: productsCall,
    error: productsError,
  }: ReturnedValues<HookResponse> = useRequest(
    'get',
    'https://6222994f666291106a29f999.mockapi.io/api/v1/products',
  );

  const { mainContainer, statusBar, blueBackGround } = common;
  const { title } = productsListStyle;
  const { bottomButtons } = home;

  const handlePressItem = (item: ItemType) => {
    navigation.navigate('Details', {
      item,
    });
    console.log(item);
  };

  const handleFilter = (type: filters) => {
    const positiveItems = productsResponse?.data.filter(
      item => item.is_redemption === (type === 'negative'),
    );
    setProductsList(positiveItems as ItemType[]);
  };

  useEffect(() => {
    const getProducts = async () => {
      await productsCall(null, null);
    };
    getProducts();
  }, []);

  useEffect(() => {
    if (productsResponse) {
      const { data, status } = productsResponse;
      if (status === 200) {
        setProductsList(data);
      }
    }
    if (productsError) {
      console.log('Error');
    }
  }, [productsError, productsResponse]);

  return (
    <>
      <View style={[statusBar, blueBackGround]} />
      <View style={mainContainer}>
        <HomeHeader name="Edwin Garcés Saucedo" birthDate="5 de Agosto" />
        <Text style={title}>Tus movimientos:</Text>
        {productsList.length ? (
          <ProductsList data={productsList} onPress={handlePressItem} />
        ) : null}
        <View style={bottomButtons}>
          <CustomButton
            title="Canjeados"
            onPress={() => handleFilter('negative')}
          />
          <CustomButton
            title="Ganados"
            onPress={() => handleFilter('positive')}
          />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
