//Stores are used to hold the initial state for components

import { EventEmitter } from 'events';
import AppDispatcher from '../Dispatcher';

let state = {
    loaded: false,
    users: [],
};

let events = new EventEmitter();

let setState = (newState) => {
    /*We’ve added a function called setState that matches the api of the one inside a React Component. We’ve also referenced assign here again — because we want to add new state to our state object and overwrite existing data, but we don’t want to replace it and possibly lose some data that didn’t change. */
    Object.assign(state, newState);
    events.emit('CHANGE');
};

let UsersStore = {
    getState() { //retrieves state
        return state;
    },
    addChangeListener (fn) { //notifies user components of when state changes
        events.addListener('CHANGE', fn);
    }
};

UsersStore.dispatchToken = AppDispatcher.register((action) => {
    console.log(action.type);

    if (action.type === 'USERS_LOADED') { //condition that waits for users loaded to set state
        setState({
            loaded: true,
            users: action.users,
        })
    }

});





export default UsersStore;