import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

export default function SideBar() {
	return (
		<div className="sidebar">
			<Link to="/">
				<button>
					<b>Home</b>
				</button>
			</Link>
			<Link to="/collection">
				<button>My Pages</button>
			</Link>
			<Link to="/new">
				<button>New Page</button>
			</Link>
		</div>
	);
}
