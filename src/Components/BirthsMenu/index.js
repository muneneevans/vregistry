import React from "react"

const BirthSidebar = () => (
	<div className="ui segments">
		<div className="ui secondary segment">
			<a className="active teal item">New Birth</a>
		</div>
		<div className="ui segment">
			<a className="item">
				Register in MOH 510
				<div className="ui label">510</div>
			</a>
		</div>
		<div className="ui segment">
			<a className="item">Record Vaccinnes</a>
		</div>
		<div className="ui segment">
			<a className="item">Record Death</a>
		</div>
		<div className="ui segment">
			<a className="item">Transfer Out</a>
		</div>
		<div className="ui segment">
			<a className="item">Search Child Records</a>
		</div>
		<div className="ui segment">
			<a className="item">Query Vaccination status</a>
		</div>
		<div className="ui segment">
			<div className="ui transparent icon input">
				<input placeholder="Search mail..." type="text" />
				<i className="search icon" />
			</div>
		</div>
	</div>
)

export default BirthSidebar
