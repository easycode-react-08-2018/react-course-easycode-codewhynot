import React, {Component} from 'react';

export class Background extends Component {
    constructor (props) {
        super (props)
    }
    render () {
        return (
            <React.Fragment>
                <div
                    className={this.props.thumb && this.props.min ? "thumb_background visible" : "thumb_background"}
                    style={this.props.thumb && this.props.min ? {backgroundImage: 'url(' + this.props.thumb + ')'} : null}>
                </div>
            </React.Fragment>
        )
    }
}