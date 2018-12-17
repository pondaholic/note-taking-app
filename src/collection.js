import React from 'react';
import CollectionNav from './collection-nav';
import './collection.css';

export default class Collection extends React.Component {
	render() {
		return (
			<div className="collection">
				<CollectionNav />
			</div>
		);
	}
}
