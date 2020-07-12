const initialState = {
    loggedIn: false
}

const LoginReducer = (state = initialState, { type, payload }) => {
    const updateState = (updation) => Object.assign({}, state, updation)

    switch (type) {
        case "LOGIN":
            return updateState({ loggedIn: true })
        case "LOGOUT":
            return updateState({ loggedIn: false })

        default:
            return state;
    }
};

export default LoginReducer;