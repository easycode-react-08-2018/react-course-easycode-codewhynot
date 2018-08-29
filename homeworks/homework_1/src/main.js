import React from 'react';
import ReactDOM from 'react-dom';
import {usersDB} from './components/user-card/users';
import {UserCard} from './components/user-card/user-card';
import './assets/main.sass';


let data = [];

const mountNode = document.getElementById('app');

const clone = () => {
    ReactDOM.render(<RenderModule users={usersDB}/>, mountNode)
};

const button = <button onClick={clone}>Add user</button>;

const RenderModule = props => {
    let {users} = props;
    data.push(<UserCard users={users}/>);
    return (
        <div className={'usersList'}>
            {data.map((val,i) =>{
                return (
                    <div key={i} className={'usersList-item'}>{val}</div>
                );
            })}
            {button}
        </div>
    )
};

ReactDOM.render(<RenderModule users={usersDB}/>, mountNode)