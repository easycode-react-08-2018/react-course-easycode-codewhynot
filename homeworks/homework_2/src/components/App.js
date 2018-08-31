import React, {Component} from 'react';
import {Search} from './Search'

export class App extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <React.Fragment>
                <Search/>
            </React.Fragment>
        )
    }
}