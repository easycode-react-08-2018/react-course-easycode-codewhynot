import React from 'react';

const UserAvatar = (props) => {
    let user = props.users;
    return <img src={user.avatarUrl} className="pull-left"/>
}
export {
    UserAvatar
}