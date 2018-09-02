import React, {Component} from 'react';
import './user.sass'

import {Header} from "../../components/header/header";

export class UserPage extends Component {
    constructor (props) {
        super (props)
    }
    render () {
        const {setPage,active,owner} = this.props;
        const visibility = active === 'user' ? "user_page visible" : 'user_page'
        return (
            <div className={visibility}>
                <div className="container">
                    <div className="content">
                        <Header
                            setPageFunc={setPage}
                            globalOwner={owner}
                        />
                    </div>
                </div>
            </div>
        )
    }
}