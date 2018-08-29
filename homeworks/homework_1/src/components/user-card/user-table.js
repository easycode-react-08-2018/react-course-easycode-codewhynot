import React from 'react';

export const UserTable = props => {
    const {data} = props;
    let mailto = "mailto:" + data.email;
    return (
        <table className="table table-user-information">
            <tbody>
            <tr>
                <td>Дата рождения</td>
                <td>{data.birthdate}</td>
            </tr>
            <tr>
                <td>Пол</td>
                <td>{data.gender}</td>
            </tr>
            <tr>
                <td>Адрес</td>
                <td>{data.address}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td><a href={mailto}>{data.email}</a></td>
            </tr>
            </tbody>
        </table>
    )
}
