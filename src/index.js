import React from 'react';

import '~/config/ReactotronConfig';

import Routes from '~/routes';
import {StatusBar} from 'react-native';
import {mainColor} from './styles';

const App = () => (
  <>
    <StatusBar backgroundColor={mainColor} barStyle="light-content" />
    <Routes />
  </>
);

export default App;
