export const DELETE = 'DELETE';
export const ADD = 'ADD';

export const deleteSeat = ({ id }) => ({
    type: DELETE,
    payload: {
        id,
    }
});

export const addSeat = ({ id, cords, reserved }) => ({
    type: ADD,
    payload: {
        id,
        cords,
        reserved,
    },
});

