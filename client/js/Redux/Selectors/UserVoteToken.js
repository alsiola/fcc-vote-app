export default state => {
    if (state.User.authenticated) {
        return state.User._id;
    }

    return state.User.ip;
}