import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import { Provider } from 'react-redux';
import { store, persistor } from './components/redux/store'; 
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


persistor.persist();
