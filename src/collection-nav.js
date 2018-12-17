import React from 'react';
import './collection-nav.css';

export default function CollectionNav(props) {
	return (
		<ul className="categories" onClick={e => props.handleNav(e)}>
			<li value="subjects">Subjects</li>
			<li value="title">Title</li>
			<li value="date">Date</li>
		</ul>
	);
}
