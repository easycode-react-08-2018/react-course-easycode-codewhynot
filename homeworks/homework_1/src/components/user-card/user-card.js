import React from 'react';

const UserCard = props => {
    return props.users.map((user,id) => {
        return (
            <div className="panel panel-info" key={'user' + user.id}>
                <div className="panel-heading">
                    <h3 className="panel-title">{user.fullName}</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div>
                            <div className="col-md-3 col-lg-3 " align="center">
                                <img src={user.avatarUrl} className="pull-left"/>
                            </div>
                            <div className=" col-md-9 col-lg-9">
                                <table className="table table-user-information">
                                    <tbody>
                                    <tr>
                                        <td>Дата рождения</td>
                                        <td>{user.birthdate}</td>
                                    </tr>
                                    <tr>
                                        <td>Пол</td>
                                        <td>{user.gender}</td>
                                    </tr>
                                    <tr>
                                        <td>Адрес</td>
                                        <td>{user.address}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td><a href={"mailto:" + user.email}>{user.email}</a></td>
                                    </tr>
                                    </tbody>
                                </table>
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