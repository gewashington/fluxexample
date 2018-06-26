import React from 'react';
import './User.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const User = (props) => (
    <div className="card">
        <div className="box">
            <div className="img">
                <img src={props.user.image} alt="Person" />
            </div>
            <h2>{props.user.name}<br /><span>{props.user.job}</span></h2>
            <p>
            The swallow may fly south with the sun, and the house martin or the plover may seek warmer climes in winter, yet these are not strangers to our land. Oh! Come and see the violence inherent in the system! Help, help, I'm being repressed!
            </p>
            <ul>
                <li><a href="http://facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    </div>
);

export default User;