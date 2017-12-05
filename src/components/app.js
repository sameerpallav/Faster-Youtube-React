import React, { Component } from 'react';
import YTsearch from 'youtube-api-search';
import SearchBar from './searchbar';
import YoutubeDetail from './youtubedetail';
import YoutubeList from './youtubelist';
import _ from 'lodash';

const YOUTUBE_API_KEY = 'AIzaSyCi7pqfLKng9idCJLZVwYyb805PgJQ6ego';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null,
			term: 'If these trees could talk'
		}

		this.onVideoSearch('If these trees could talk');
		
	}

	render() {
		const onVideoSearch = _.debounce((term) => this.onVideoSearch(term), 1000);
		return (
		  <div>
		  	<SearchBar onVideoSearch={onVideoSearch}/>
		  	<YoutubeDetail video={this.state.selectedVideo} />
		  	<YoutubeList 
		  		onVideoSelect={selectedVideo => this.setState({selectedVideo})}
		  		videos={this.state.videos} />
		  </div>
		);
	}

	onVideoSearch(term) {
		// console.log('state changed term', term);
		// this.setState({term});
		// console.log('current state', this.state);
		YTsearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
			this.setState({
				videos:videos,
				selectedVideo: videos[0],
				term: term
			});
		});
	}

	
}
