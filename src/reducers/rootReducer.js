import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { entryReducer } from './entryReducer';



export const rootReducer = combineReducers({
    auth: authReducer,
    entry: entryReducer,
})

