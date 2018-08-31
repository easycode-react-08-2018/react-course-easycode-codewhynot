import React, {Component} from 'react';
import {Video} from "./Video";
import {Results} from "./Results";
import {Background} from "./Background";
import YouTubeSearch from 'youtube-api-search';

export class Search extends Component {
    constructor (props) {
        super(props)
        this.state = {
            videos: [],
            api_key: 'AIzaSyAq8HPrbemKw4a23McQJD9ksl2w2lGAcII',
            isMinimize: false,
            inputValue: null,
            resultShown: false,
            selectedVideo: null,
            selectedThumb: null,
            selectedDesc: null
        }
        this.type = this.type.bind(this);
        this.onSearchTermChange = this.onSearchTermChange.bind(this);
        this.selectVideo = this.selectVideo.bind(this);
    }

    type (event) {
        this.setState({
            isMinimize: event.target.value !== '' ? true : false,
            inputValue: event.target.value !== '' ? event.target.value + '' : null,
            resultShown: event.target.value !== '' ? true : false
        })
        this.onSearchTermChange(this.state.inputValue)
    }

    onSearchTermChange(term) {
        YouTubeSearch({
            key: this.state.api_key,
            term: term,
            order: 'rating'
        }, videos => this.setState({videos: videos}))
    }

    selectVideo (event) {
        let desc = null;
        let thumb = null
        this.state.videos.map(val => {
            if(val.id.videoId === event.target.getAttribute('video')){
                desc = val.snippet.description;
                thumb = val.snippet.thumbnails.high.url
            }
        })
        this.setState({
            selectedVideo: event.target.getAttribute('video'),
            selectedThumb: thumb,
            selectedDesc: desc,
            resultShown: false
        })
    }

    render () {
        return (
            <React.Fragment>
                <Background
                    thumb={this.state.selectedThumb}
                    min={this.state.isMinimize}
                />
                <div className={this.state.isMinimize ? "search_container isMinimize" : 'search_container'}>
                    <div className={this.state.isMinimize ? "search isMinimize" : 'search'}>
                        <div className="search_logo">
                            <div className="search_logo-content">Aloe <span>Hub</span></div>
                        </div>
                        <div className="search_field">
                            <input onInput={this.type} type="text" placeholder="Search" />
                            <Results
                                videos={this.state.videos}
                                select={this.selectVideo}
                                shown={this.state.resultShown}
                            />
                            <Video
                                id={this.state.selectedVideo}
                                minimize={this.state.isMinimize}
                                show={this.state.resultShown}
                                data={this.state.videos}
                                desc={this.state.selectedDesc}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}