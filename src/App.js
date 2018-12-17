import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Collection from './collection';
import Note from './note';
import SideBar from './sidebar';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<header className="App-header">This is the header</header>
					<SideBar />
					<div className="notes-body">
						<Collection />
						<Note />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
