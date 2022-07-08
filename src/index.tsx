import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import reducer from './reducers';
import initialState from './mocks/response.json';

import App from './App';

const store = createStore(reducer, initialState);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);