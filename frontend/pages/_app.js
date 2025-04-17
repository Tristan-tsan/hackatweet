import '../styles/globals.css';
import Head from 'next/head';

import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit'; //add combineReducers pour config persistor
import hashtag from '../reducers/hashtag';
//import user from '../reducers/user';
//import hiddenArticles from '../reducers/hiddenArticles'

//config redux persistor
//import { persistStore, persistReducer } from 'redux-persist';
//import { PersistGate } from 'redux-persist/integration/react';
//import storage from 'redux-persist/lib/storage';

/*const reducers = combineReducers({ hashtag });
const persistConfig = { key: 'hackatweet', storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});*/

const store = configureStore ({reducer: {hashtag}});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
