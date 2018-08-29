import React from 'react';

export const UserAvatar = props => {
    let {users} = props;
    return <img src={users.avatarUrl} className="pull-left"/>
}
