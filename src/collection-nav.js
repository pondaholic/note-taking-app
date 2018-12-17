import React from 'react';
import { Link } from 'react-router-dom';
import './collection-nav.css';

export default function CollectionNav(props) {
	return (
		<ul className="categories">
			<li value="subjects">
				<Link to="/subjects">Subjects</Link>
			</li>
			<li value="title">
				<Link to="/title">Title</Link>
			</li>
			<li value="date">
				<Link to="/date">Date Added</Link>
			</li>
		</ul>
	);
}
