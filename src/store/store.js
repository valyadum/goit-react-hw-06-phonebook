import { configureStore, createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialStateContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]
const persistConfig = {
    key: 'ContactsLS',
    storage,
}


const contactSlice = createSlice({
    name: 'contacts',
    initialState:initialStateContacts,
    reducers: {
        addContacts: {
            reducer(state, action) { state.push(action.payload) },
            prepare(name, number) {
                return {
                    payload: {
                        name: name,
                        number: number,
                        id: nanoid(),
                    },
                };
            },
        },
        deleteContacts(state, action) { return state.filter(contact => contact.id !== action.payload) }
    }
});
const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterContacts(state, action){return action.payload}
    }
    
})
const persistedReducer = persistReducer(persistConfig, contactSlice.reducer);
export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filter:filterSlice.reducer,

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

})
export const { addContacts, deleteContacts } = contactSlice.actions;
export const { filterContacts } = filterSlice.actions


export const persistor = persistStore(store);