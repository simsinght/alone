import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from "./redux/store";
import {startLoop} from './redux/actions'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}> <App onDismiss={() => store.dispatch(startLoop(0))}style={{'backgroundColor': 'black'}}/> </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
