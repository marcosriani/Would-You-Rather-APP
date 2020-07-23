import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Import middleware (Including redux thunk for API calls inside a action creator)
import middleware from './middleware';

import reducer from './reducers';

const store = createStore(reducer, middleware);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
