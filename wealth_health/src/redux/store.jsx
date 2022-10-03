import { combineReducers, configureStore} from '@reduxjs/toolkit';
import { employeeReducer } from './employeeSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({employeeList: employeeReducer});

export const persistedReducer = persistReducer(persistConfig, rootReducer );

export const store = configureStore({
  middleware: [thunk],
  reducer: persistedReducer
});

