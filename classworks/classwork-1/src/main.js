import React from 'react';
import ReactDOM from 'react-dom';

const mountNode = document.getElementById('app');

let List = props => {
    return (
        <ul> 
            {props.frameworks.map(val => {
                return <li className={'user-item'} key={val}>{val}</li>
            })}
        </ul>
    )
}
ReactDOM.render(<List frameworks={['vue','angular','react']}/>,mountNode)
