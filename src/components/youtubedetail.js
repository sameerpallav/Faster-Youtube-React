import React, { Component } from 'react';

class YoutubeDetail extends Component {
	constructor(props) {
		super(props);
	}

	render(){

		if(!this.props.video){
			return <div>Loading...</div>
		}

		const {video} = this.props;
		const {videoId} = video.id;
		const url = `https://youtube.com/embed/${videoId}?autoplay=1&fullscreen=1`;

		return (
			<div className="video-detail col-md-8">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>					
				</div>
				<div className="details">
					<div>{video.snippet.title}</div>
					<div>{video.snippet.description}</div>
				</div>
			</div>
		)		
	}

	// methods
}

export default YoutubeDetail;