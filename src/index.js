import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import firebase from './config/fbConfig';

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    // reactReduxFirebase(fbConfig),
    reduxFirestore(firebase),
  ))

  const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true,
  };

  // firebase.initializeApp();
  // firebase.firestore();

  

  const rrfProps ={
    firebase,
    config: fbConfig,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
  }

  // STUFF TO DISPLAY BEFORE FIREBASE AUTH IS LOADED
  function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div>Loading Kasas Console...</div>;
    return children
  }

  // WRAP <APP /> IN THE AUTH IS LOADED COMPONENT
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>

          <App />     
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

