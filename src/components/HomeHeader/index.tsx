import React from 'react';
import { View, Text } from 'react-native';
import { home } from '../../styles';

interface HomeHeaderProps {
  name: string;
  birthDate: string;
}

const HomeHeader = ({ name, birthDate }: HomeHeaderProps) => {
  const { container, title, name: nameStyle, birthDate: birthDateStyle } = home;
  return (
    <View style={container}>
      <Text style={title}>¡Bienvenido!</Text>
      <Text style={nameStyle}>{name}</Text>
      <Text style={birthDateStyle}>Cumpleaños: {birthDate}</Text>
    </View>
  );
};

export default HomeHeader;
