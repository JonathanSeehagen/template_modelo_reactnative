import React from 'react';
import {StatusBar, Text} from 'react-native';

import './config/ReactotronConfig';

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Text>Hello World</Text>
    </>
  );
}
