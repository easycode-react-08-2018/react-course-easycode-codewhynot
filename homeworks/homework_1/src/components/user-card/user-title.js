import React from 'react';

export const UserTitle = props => {
    let {users} = props;
    return <h3 className="panel-title">{users.fullName}</h3>
}