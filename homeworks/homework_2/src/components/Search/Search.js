import React, {Component} from 'react';
import {Content} from "../Content/Content";
import YouTubeSearch from 'youtube-api-search';
import './search.sass'
const  API_KEY = 'AIzaSyAq8HPrbemKw4a23McQJD9ksl2w2lGAcII';


export class Search extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isMinimize: false,
            inputValue: null,
            resultShown: false,
            videos: [],
            selectedVideo: null,
            selectedThumb: null,
            selectedDesc: ''
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
        this.onSearchTermChange(this.state.inputValue);
    }
    onSearchTermChange(term) {
        YouTubeSearch({key: API_KEY, term: term, order: 'rating'}, videos => this.setState({videos: videos}))
    }
    selectVideo (event) {
        let desc = '';
        this.state.videos.map(val => {
            if(val.id.videoId === event.target.getAttribute('video')){
                desc = val.snippet.description;
            }

        })
        this.setState({
            selectedVideo: event.target.getAttribute('video'),
            selectedThumb: event.target.getAttribute('thumb'),
            resultShown: false,
            selectedDesc: desc
        })
    }
    render () {
        return (
            <React.Fragment>
                <div
                    className={this.state.selectedThumb && this.state.isMinimize ? "thumb_background visible" : "thumb_background"}
                    style={this.state.selectedThumb && this.state.isMinimize ? {backgroundImage: 'url(' + this.state.selectedThumb + ')'} : null}
                ></div>
                <div className={this.state.isMinimize ? "search_container isMinimize" : 'search_container'}>
                    <div className={this.state.isMinimize ? "search isMinimize" : 'search'}>
                        <div className="search_logo">
                            <div className="search_logo-content">Aloe <span>Hub</span></div>
                        </div>
                        <div className="search_field">
                            <input
                                onInput={this.type}
                                type="text" placeholder="Search" />
                            <div className={this.state.resultShown ? "search_results show" : "search_results"}>
                                <ul onClick={this.selectVideo}>
                                    {this.state.videos.map(val => {
                                            return ( <li key={val.etag} video={val.id.videoId} thumb={val.snippet.thumbnails.high.url}>
                                                <img src={val.snippet.thumbnails.default.url} alt=""/>
                                                {val.snippet.title}
                                                </li> )
                                        })}
                                </ul>
                            </div>
                            <Content
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