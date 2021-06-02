export default (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_TO_BAG":
            return {
                ...state,
                bag: [action.payload, ...state.bag],
            };
        case "REMOVE_PRODUCT_FROM_BAG":
            return {
                ...state,
                bag: state.bag.filter(product => product.id !== action.payload)
            };
        default:
        return state
    }
};