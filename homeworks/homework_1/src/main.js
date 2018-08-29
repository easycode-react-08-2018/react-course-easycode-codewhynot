import React from 'react';
import ReactDOM from 'react-dom';
import {usersDB} from './components/user-card/users';
import {UserCard} from './components/user-card/user-card';
import './assets/main.sass';


let data = [];

const mountNode = document.getElementById('app');

const clone = () => {
    ReactDOM.render(<RenderModule usersList={usersDB}/>, mountNode)
};

const button = <button onClick={clone}>Add user</button>;

const RenderModule = props => {
    const {usersList} = props;
    data.push(<UserCard data={usersList}/>);
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

ReactDOM.render(<RenderModule usersList={usersDB}/>, mountNode)