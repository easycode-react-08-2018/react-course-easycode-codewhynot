import React from 'react';

export const UserTable = props => {
    let {users} = props;
    let mailto = "mailto:" + users.email;
    return (
        <table className="table table-user-information">
            <tbody>
            <tr>
                <td>Дата рождения</td>
                <td>{users.birthdate}</td>
            </tr>
            <tr>
                <td>Пол</td>
                <td>{users.gender}</td>
            </tr>
            <tr>
                <td>Адрес</td>
                <td>{users.address}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td><a href={mailto}>{users.email}</a></td>
            </tr>
            </tbody>
        </table>
    )
}
