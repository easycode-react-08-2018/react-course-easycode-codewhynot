import React from 'react';

const UserTitle = (props) => {
    let user = props.users;
    return <h3 className="panel-title">{user.fullName}</h3>
}
export {
    UserTitle
}