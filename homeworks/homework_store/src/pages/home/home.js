import React, {Component} from 'react';
import './home.sass'

export class HomePage extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        const {setPage,active} = this.props;
        const visibility = active === 'home' ? "main_page visible" : 'main_page';
        return (
            <div className={visibility}>
                <div className="main_page_content">
                    <div className="main_page_title">And, who are you?</div>
                    <div className="main_page_buttons">
                        <button page="admin" onClick={setPage}>Admin</button>
                        <span> or </span>
                        <button page="user" onClick={setPage}>User</button>
                    </div>
                </div>
            </div>
        )
    }
}