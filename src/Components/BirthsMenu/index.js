import React from "react"

const BirthSidebar = () => (
	<div className="ui segments">
		<a className="active teal item" href="/births/new">
			<div className="ui secondary segment">New Birth</div>
		</a>
		<a className="item" href="/births/list">
			<div className="ui segment">All Births</div>
		</a>
		<a className="item" href="/births/new">
			<div className="ui segment">
				Register in MOH 510
				<div className="ui label">510</div>
			</div>
		</a>
		<a className="item" href="/births/vaccines/list">
			<div className="ui segment">All Vaccinnes</div>
		</a>
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
