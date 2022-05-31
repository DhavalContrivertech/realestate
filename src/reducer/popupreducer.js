// exports

// const reducer = (state, action) => {
//     if (action.type === "COMPLETE") {
//         return action.payload;
//     }
//     return state;
// };
  
export const initialState = null;

export const reducer = (state , action) => {
    if (action.type === "POPUP") {
        return action.payload;
    }

    return state;
}