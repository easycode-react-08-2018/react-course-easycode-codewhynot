import React, {Component} from 'react';
import YouSearch from 'youtube-api-search';
import {Search} from './Search/Search'

export class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            searchIsMinimize: false
        }
    }

    render () {
        return (
            <React.Fragment>
                <Search/>
            </React.Fragment>
        )
    }
}