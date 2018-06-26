import React from 'react';
import User from './User';
import UsersStore from '../stores/UsersStore';
import UsersActionCreators from '../actions/UsersActionCreators';
import './Users.css';

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
            return (
                <User user={user} />
            )
        })
    }
    render() {
        if (!this.state.loaded) {
            return <div>Loading...</div>
        }
        return(
            <div className="cards-container">
                    {this.renderUsers()}
            </div>
        )
    }
}

// const containerStyle = {
//     height: '50%',
//     paddingTop: '15%',
//     margin: '0',
//     display: '-webkit-box',
//     display: '-moz-box',
//     display: '-ms-flexbox',
//     display: '-webkit-flex',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }
