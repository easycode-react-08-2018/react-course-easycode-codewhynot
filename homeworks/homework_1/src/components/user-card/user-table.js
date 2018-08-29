import React from 'react';

const UserTable = (props) => {
    let user = props.users;
    return (
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
    )
}
export {
    UserTable
}