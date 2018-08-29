import React from 'react';

export const UserAvatar = props => {
    const {data} = props;
    return <img src={data.avatarUrl} className="pull-left"/>
}
