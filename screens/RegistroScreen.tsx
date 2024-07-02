import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Registro: undefined;
  Usuario: undefined;
};

type RegistroScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Registro'
>;

type RegistroScreenRouteProp = RouteProp<RootStackParamList, 'Registro'>;

type Props = {
  navigation: RegistroScreenNavigationProp;
  route: RegistroScreenRouteProp;
};

function RegistroScreen({ navigation }: Props) {
  return (
    <View>
      <Text>Registro Screen</Text>
      <Button
        title="Go to Usuario"
        onPress={() => navigation.navigate('Usuario')}
      />
    </View>
  );
}

export default RegistroScreen;
