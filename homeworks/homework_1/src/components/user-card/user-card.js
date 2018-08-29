import React from 'react';
import {UserTable} from './user-table';
import {UserTitle} from './user-title';
import {UserAvatar} from './user-avatar';


export const UserCard = props => {
    return props.data.map(element => {
        return (
            <div className="panel panel-info" key={'user' + element.id}>
                <div className="panel-heading">
                    <UserTitle data={element}/>
                </div>

                <div className="panel-body">
                    <div className="row">
                        <div>
                            <div className="col-md-3 col-lg-3 " align="center">
                                <UserAvatar data={element}/>
                            </div>
                            <div className=" col-md-9 col-lg-9">
                                <UserTable data={element}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
}
