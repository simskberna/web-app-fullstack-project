const reducer = (state = 'DEFAULT CATEGORY', action) => {
    switch (action.type) {
        case 'category': 
            return action.payload 
        default:
            return state
    }
}
export default reducer