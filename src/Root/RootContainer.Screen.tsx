import React from 'react';
import { View } from 'react-native';
import Level from '../Level/Level';
import Game from '../Game/Game';

const RootContainerScreen = () => {
  return (
    <View>
      <Level />
      <Game />
    </View>
  );
}

export default RootContainerScreen;
