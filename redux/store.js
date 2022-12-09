import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { contactsSlice } from './contacts/contactsSlice';
import { userSlice } from './user/userSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const userPersistConfig = {
    key: 'user',
    storage,
    whitelist: ['token'],
};
const userReducer = persistReducer(userPersistConfig, userSlice.reducer);
export const store = configureStore({
    reducer: {
        user: userReducer,
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});
export const persistor = persistStore(store);
//# sourceMappingURL=store.js.map