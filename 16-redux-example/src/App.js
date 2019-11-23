import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import PostFrom from './components/PostForm';
import Users from './components/Users'
import {Provider} from 'react-redux';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Users/> */}
        <PostFrom/>
        <hr/>
        <Posts/>
      </div>
    </Provider>
  );
}

export default App;
