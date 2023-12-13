import { combineReducers, configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { contactReducer } from './contactSlice';
import { filterReducer } from "./filterSlice";

const persistConfig = {
    key: 'ContactsLS',
    storage,
    blacklist: ['filter']
}
const reducer = combineReducers({
    contacts: contactReducer,
    filter: filterReducer,
})
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

})


export const persistor = persistStore(store);