// In App.js in a new project

import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import Providr from './Navigations/Providr';
// import Providr from './Navigations/'
import {Provider} from 'react-redux';
import {store} from './Redux/store';
function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Providr />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
