import React, {Component} from 'react';
import {Header} from './Header/Header'
import {Content} from './Content/Content'

export class App extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <React.Fragment>
                <Header/>
                <Content/>
            </React.Fragment>
        )
    }
}