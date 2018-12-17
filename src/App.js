import React, { Component } from 'react';
import Collection from './collection';
import Note from './note';
import SideBar from './sidebar';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">This is the header</header>
				<Collection />
				<SideBar />
				{/* <Note /> */}
			</div>
		);
	}
}

export default App;
