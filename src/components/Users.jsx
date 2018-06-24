import React from 'react';
import UsersStore from '../stores/UsersStore';
import UsersActionCreators from '../actions/UsersActionCreators';


export default class Users extends React.Component {
    constructor() {
        super();
        this.state = UsersStore.getState();
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange() {
        this.setState(UsersStore.getState());
    }
    componentDidMount() {
        UsersStore.addChangeListener(this.handleChange);
        UsersActionCreators.loadUsers();
    }
    renderUsers() {
        return this.state.users.map((user) => {
            return<li>{user}</li>
        })
    }
    render() {
        if (!this.state.loaded) {
            return <div>Loading...</div>
        }
        return(
            <div>
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }
}

