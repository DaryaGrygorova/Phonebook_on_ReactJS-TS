var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
export const fetchContacts = createAsyncThunk('contacts/fetchAll', (_, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.get("/contacts");
        return response.data;
    }
    catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
    ;
}));
export const addContact = createAsyncThunk('contacts/addContact', ({ name, number }, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.post("/contacts", { name, number });
        return response.data;
    }
    catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
}));
export const deleteContact = createAsyncThunk('contacts/deleteContact', (id, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield axios.delete(`/contacts/${id}`);
        return id;
    }
    catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
    ;
}));
//# sourceMappingURL=contactsOperations.js.map