import { ADD, DELETE } from './appActions';

export const appReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        case DELETE:
            return state.filter(place => place.id !== action.payload.id);
        default:
            return state;
    };
};