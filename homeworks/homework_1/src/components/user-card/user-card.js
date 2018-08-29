import React from 'react';
import {UserTable} from './user-table';
import {UserTitle} from './user-title';
import {UserAvatar} from './user-avatar';



const UserCard = props => {
    return props.users.map(user => {
        return (
            <div className="panel panel-info" key={'user' + user.id}>
                <div className="panel-heading">
                    <UserTitle users={user}/>
                </div>

                <div className="panel-body">
                    <div className="row">
                        <div>
                            <div className="col-md-3 col-lg-3 " align="center">
                                <UserAvatar users={user}/>
                            </div>
                            <div className=" col-md-9 col-lg-9">
                                <UserTable users={user}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
}

export {
    UserCard
}