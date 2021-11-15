import React from 'react';

import {SafeAreaView} from 'react-native';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <SafeAreaView>
      <Greeting name="Props" />
    </SafeAreaView>
  );
};

export default App;
