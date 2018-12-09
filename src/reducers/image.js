
const initialState = {
    arrayIndex: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'NEXT_IMAGE':
            return {
                ...state,
                arrayIndex: action.payload
            };
        default:
            return state
    }
}
