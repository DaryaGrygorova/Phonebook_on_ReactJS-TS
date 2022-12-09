export const pending = (state) => {
    state.isLoading = true;
};
export const fulfilled = (state) => {
    state.isLoading = false;
    state.error = null;
};
export const rejected = (state, action) => {
    state.items = [];
    state.isLoading = false;
    state.error = action.payload;
};
export const fetchItems = (state, action) => {
    state.items = action.payload;
};
export const addItem = (state, action) => {
    state.items.push(action.payload);
};
export const deleteItem = (state, action) => {
    const idx = state.items.findIndex(item => item.id === action.payload);
    if (idx >= 0) {
        state.items.splice(idx, 1);
    }
    ;
};
//# sourceMappingURL=contactsHandles.js.map