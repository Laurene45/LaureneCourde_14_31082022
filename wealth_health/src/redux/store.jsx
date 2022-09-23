import { combineReducers, configureStore} from '@reduxjs/toolkit';
import { employeeReducer } from './employeeSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

// thunk : Middleware  =>  travaillé différé 
// Plutôt que d'exécuter une logique maintenant , nous pouvons écrire un corps de fonction ou un code qui pourra être utilisé pour effectuer le travail plus tard .
// modèle d'écriture de fonctions avec une logique à l'intérieur qui peut interagir dans le store

//REdux-persist : données persistantes dans le tableau des employees

// Au fur et à mesure que votre application devient plus complexe, vous souhaiterez diviser votre fonction de réduction en fonctions distinctes, chacune gérant des parties indépendantes de l' état .
//CombineReducers d'assistance transforme un objet dont les valeurs sont différentes fonctions de réduction en une seule fonction de réduction à laquelle vous pouvez passer createStore.

// L'action REHYDRATE est envoyée par Redux Persist immédiatement après l'obtention de votre état persistant à partir du stockage.

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

