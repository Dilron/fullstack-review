import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import {HashRouter} from 'react-router-dom'
import NavBar from './components/NavBar'
import router from './router'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <NavBar />
        {router}
      </HashRouter>
    </Provider>
  );
}

export default App;
