import React from 'react';

export const UserTitle = props => {
    const {data} = props;
    return <h3 className="panel-title">{data.fullName}</h3>
}