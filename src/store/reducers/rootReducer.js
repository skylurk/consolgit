import { combineReducers } from 'redux';

import authReducer from './authReducer';
import userReducer from './userReducer';
import handoverItemReducer from './handoverItemReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    handoveritem: handoverItemReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;