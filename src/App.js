import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAqTiP03T3dl6I0scfumqDESm_ASKbwV3k',
      authDomain: 'boss-mode.firebaseapp.com',
      databaseURL: 'https://boss-mode.firebaseio.com',
      projectId: 'boss-mode',
      storageBucket: '',
      messagingSenderId: '608750660489'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    // the empty obj {} is for any initial state we'd like to pass to our application

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
