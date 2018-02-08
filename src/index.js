// Code goes here
import React from 'react';

import { message } from './components/foo';
import Tweet from './Tweet';
import ReactDOM from 'react-dom';

import fruit from './fruits';
console.log(fruit.apple);


 
ReactDOM.render(
  <Tweet />,
  document.getElementById('root')
);