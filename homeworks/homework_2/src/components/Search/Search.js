import React, {Component} from 'react';
import {Content} from "../Content/Content";
import './search.sass'

export class Search extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isMinimize: false
        }
    }
    focus () {
        this.setState({
            isMinimize: true
        })
    }
    blur () {
        this.setState({
            isMinimize: false
        })
    }
    render () {
        return (
            <React.Fragment>
                <div className={this.state.isMinimize ? "search_container isMinimize" : 'search_container'}>
                    <div className={this.state.isMinimize ? "search isMinimize" : 'search'}>
                        <div className="search_logo">
                            <div className="search_logo-content">Aloe <span>Hub</span></div>
                        </div>
                        <div className="search_field">
                            <input onFocus={this.focus.bind(this)} onBlur={this.blur.bind(this)} type="text" placeholder="Search" />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}