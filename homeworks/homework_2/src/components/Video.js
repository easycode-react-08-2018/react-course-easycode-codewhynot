import React, {Component} from 'react';

export class Video extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return(
            <React.Fragment>
                <div className={!this.props.show && this.props.minimize ? "video_box visible" : "video_box"}>
                    {!this.props.show && this.props.minimize ? <iframe src={"https://www.youtube.com/embed/" + this.props.id + "?ecver=1"} frameBorder="0"
                            allow="autoplay; encrypted-media" allowFullScreen></iframe> : null}
                </div>
                <div className={!this.props.show && this.props.minimize ? "description visible" : "description"}>{this.props.desc}</div>
            </React.Fragment>
        )
    }
}