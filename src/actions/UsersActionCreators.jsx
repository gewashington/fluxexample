//Action objects notify the dispactcher that the action is being performed, then performs the action
//Actions must be sent to the dispatcher when any changes to data occur
//'Actions DO the data work, but they TELL the Dispatcher, so that all the other components in the application can be notified.'
import AppDispatcher from '../Dispatcher';
import ApiUtils from '../utils/ApiUtils';

let UsersActionCreators = {
    loadUsers() {
        AppDispatcher.dispatch({ 
            type: 'LOAD_USERS' //the action is telling the dispatcher that it is going to load users here
        });
        ApiUtils.loadUsers();
    }
};

export default UsersActionCreators;