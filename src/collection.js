import React from 'react';
import CollectionNav from './collection-nav';
import './collection.css';

export default class Collection extends React.Component {
	handleNav(e) {
		console.log(e.target.value, 'clicked');
	}

	render() {
		return (
			<div className="collection">
				<CollectionNav handleNav={e => this.handleNav(e)} />
			</div>
		);
	}
}
