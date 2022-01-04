import React from 'react';
import { View, Text } from 'react-native';

function Greeting({ name = '이도현' }) {
  return (
    <View>
      <Text>안녕하세요111 {name}</Text>
    </View>
  );
}

export default Greeting;
