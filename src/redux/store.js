import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const persistConfig = {
    key: 'root',
    storage,
};
 
// persisted reducer to persist all changes to the user's store
const persistedReducer = persistReducer(persistConfig, rootReducer);

// configures a store with our persistedReducer
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
// persistor to persist our store
export const persistor = persistStore(store);