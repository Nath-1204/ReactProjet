
import {configureStore} from '@reduxjs/toolkit'
import countReducer from '../counter/reducer';

let store = configureStore({reducer: countReducer});

export default store;