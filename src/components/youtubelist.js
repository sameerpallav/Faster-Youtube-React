import React, { Component } from 'react';
import YoutubeListItem from './youtubelistitem';

class YoutubeList extends Component {

	constructor(props){
		super(props);

	}

	render(){
		const { videos, onVideoSelect } = this.props;
		const youtubeItems = videos.map((video) => {
			return (
				<YoutubeListItem 
				onVideoSelect={onVideoSelect}
				key={video.etag} 
				video={video} />
			)
		});

		return (
			<ul className="col-md-4 list-group">
				{youtubeItems}
			</ul>
		)
	}
}

export default YoutubeList;