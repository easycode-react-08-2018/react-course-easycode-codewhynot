import React, {Component} from 'react';
import './admin.sass'

import {Header} from "../../components/header/header";

export class AdminPage extends Component {
    constructor (props) {
        super (props)
    }
    render () {
        const {setPage,active,owner} = this.props;
        const visibility = active === 'admin' ? "admin_page visible" : 'admin_page'
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