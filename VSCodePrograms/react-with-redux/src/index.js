import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {combineReducers, createStore} from 'redux';
import reducer from './Store/reducer'   // single reducer 
import {Provider} from 'react-redux'
import {persistReducer,persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'   //web storage internally use localStorage 
import { PersistGate } from 'redux-persist/integration/react';  // import 
import {composeWithDevTools} from 'redux-devtools-extension';   // add dev tool module 

const persistConfiguration = {
  key:"root",
  storage:storage
}

/* const multReducer =      combineReducers({
                    employeeReducer,productReducer
        })*/

const PersistReducer = persistReducer(persistConfiguration,reducer);

const storeInfo = createStore(PersistReducer,composeWithDevTools());  // adding 

const PersistStore = persistStore(storeInfo);


ReactDOM.render(
  <React.StrictMode>

    <Provider store={storeInfo}>
    
    <PersistGate persistor={PersistStore}>
          <App />
    </PersistGate> 

    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

