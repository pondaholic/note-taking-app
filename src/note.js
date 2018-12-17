import React from 'react';
import './note.css';

export default function Note(props) {
	return (
		<div className="notes-box">
			<input
				className="note-title"
				name="subject"
				label="subject"
				placeholder="Science"
			/>
			<input
				className="note-date"
				name="date"
				label="date"
				placeholder="Jan 20"
			/>
			<textarea name="notes" placeholder="Something about other things" />
			<button>Save</button>
		</div>
	);
}
