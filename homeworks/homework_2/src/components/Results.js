import React, {Component} from 'react';

export class Results extends Component {
    constructor (props) {
        super (props)
    }
    render () {
        return (
            <React.Fragment>
                <div className={this.props.shown && this.props.videos.length > 0 ? "search_results show" : "search_results"}>
                    <ul onClick={this.props.select}>
                        {this.props.videos.map(val => {
                            return ( <li key={val.etag} video={val.id.videoId}>
                                <img src={val.snippet.thumbnails.default.url} alt=""/>
                                {val.snippet.title}
                            </li> )
                        })}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}