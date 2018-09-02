import React, {Component} from 'react';
import './header.sass'

export class Header extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        const {globalOwner,setPageFunc} = this.props;
        return (
            <header>
                <div className="owner">
                    You are {globalOwner} !
                </div>
                <button page="home" onClick={setPageFunc}>Logout</button>
            </header>
        )
    }
}