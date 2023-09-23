import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

//Reducers
import userReducer from "./reducers/userSlice";

const rootReducer = combineReducers({
    user: userReducer,
});

export const store = configureStore({
    reducer: persistReducer({ key: "root", storage }, rootReducer),
});
export const persistor = persistStore(store);

