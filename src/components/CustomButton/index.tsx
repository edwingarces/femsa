import React from 'react';
import { Pressable, Text } from 'react-native';
import { button } from '../../styles';

interface CustomButtonProps {
  title: string;
  onPress?: () => void;
}

const CustomButton = ({ title, onPress }: CustomButtonProps) => {
  const { customButton } = button;
  return (
    <Pressable style={customButton} onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
