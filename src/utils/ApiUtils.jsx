import UsersServiceActionCreators from '../actions/UsersServiceActionCreators';

import man4 from '../images/pine.jpeg';
import man2 from '../images/evans.jpeg';
import man3 from '../images/pratt.jpeg';
import man1 from '../images/hemsworth.png';

let ApiUtils = {
    loadUsers() {
        setTimeout(() => {
            console.log('data retrieved!'); //tells dispatcher action is complete and data can be passed

            var response = [
                {name: "Lewis Wolfe", job: "Simple Carpenter", image: man4},
                {name: "Thomas Rivera", job: "Tap Dancer", image: man2},
                {name: "Connor Trenton", job: "Exotic Dancer", image: man3},
                {name: "Ryan Nelson", job: "Brooding Male Model", image: man1}
             ];
            UsersServiceActionCreators.loadedUsers(response);
        }, 100);
    }
};

export default ApiUtils;