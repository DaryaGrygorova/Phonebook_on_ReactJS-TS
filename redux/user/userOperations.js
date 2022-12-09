var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
export const fetchCurrentUser = createAsyncThunk('user/fetchUser', (_, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const persistedToken = thunkAPI.getState().user.token;
        if (!persistedToken) {
            throw new Error('Unauthorized');
        }
        token.set(thunkAPI.getState().user.token);
        const response = yield axios.get('/users/current');
        return response.data;
    }
    catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
}));
export const signUp = createAsyncThunk('user/signUp', (credentials, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.post('/users/signup', credentials);
        token.set(response.data.token);
        return response.data;
    }
    catch (err) {
        console.log(err.message);
        return thunkAPI.rejectWithValue(err.message);
    }
}));
export const logIn = createAsyncThunk('user/logIn', (credentials, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.post('/users/logIn', credentials);
        token.set(response.data.token);
        return response.data;
    }
    catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
}));
export const logOut = createAsyncThunk('user/logOut', (_, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.post(`/users/logout`);
        token.unset();
        return response.data;
    }
    catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
}));
//# sourceMappingURL=userOperations.js.map