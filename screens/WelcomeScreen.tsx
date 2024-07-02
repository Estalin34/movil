import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Welcome: undefined;
  Usuario: undefined;
};

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;
type WelcomeScreenRouteProp = RouteProp<RootStackParamList, 'Welcome'>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
  route: WelcomeScreenRouteProp;
};

function WelcomeScreen({ navigation }: Props) {
  return (
    <View>
      <Text>Welcome Screen</Text>
      <Button
        title="Go to Usuario"
        onPress={() => navigation.navigate('Usuario')}
      />
    </View>
  );
}

export default WelcomeScreen;
