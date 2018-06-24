import UsersServiceActionCreators from '../actions/UsersServiceActionCreators';

let ApiUtils = {
    loadUsers() {
        setTimeout(() => {
            console.log('data retrieved!'); //tells dispatcher action is complete and data can be passed

            var response = ['hemsworth', 'pine', 'pratt', 'evans'];
            UsersServiceActionCreators.loadedUsers(response);
        }, 100);
    }
};

export default ApiUtils;