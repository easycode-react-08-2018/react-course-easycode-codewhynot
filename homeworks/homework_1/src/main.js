import React from 'react';
import ReactDOM from 'react-dom';
import {UserCard} from './components/user-card/user-card'
import {users} from './components/user-card/users'



const mountNode = document.getElementById('app');

let renderUsers = () => {
    ReactDOM.render(<UserCard users={users}/>,mountNode)
}

const button = <button onClick={renderUsers}>Show User</button>;

ReactDOM.render(button,mountNode);