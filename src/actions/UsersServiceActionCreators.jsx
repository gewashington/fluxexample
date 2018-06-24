import AppDispatcher from '../Dispatcher';

let UsersServiceActionCreators = {
    loadedUsers(users) {
        AppDispatcher.dispatch({
            type: 'USERS_LOADED',
            users: users,
        });
    }
};

export default UsersServiceActionCreators;