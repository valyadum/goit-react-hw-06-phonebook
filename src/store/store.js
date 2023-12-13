import { configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { contactReducer } from './contactSlice';
import { filterReducer } from "./filterSlice";

const persistConfig = {
    key: 'ContactsLS',
    storage,
}
const persistedReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filter:filterReducer,

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

})


export const persistor = persistStore(store);