import React, { Component } from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import styles from "./style.css"

import NewBirth from "../../Components/NewBirths"

class Births extends Component {
	render() {
		return (
			<div className={styles.birthScreen}>
				<div className="ui two column grid ">
					<div className="row">
						<div className="column five wide">
							<h1>Birth Options</h1>
							<div className="ui vertical menu">
								<a className="active teal item">
									New Birth
									<div className="ui teal left pointing label">1</div>
								</a>
								<a className="item">
									Register in MOH 510
									<div className="ui label">510</div>
								</a>
								<a className="item">Record Vaccinnes</a>
								<a className="item">Record Death</a>
								<a className="item">Transfer Out</a>
								<a className="item">Search Child Records</a>
								<a className="item">Query Vaccination status</a>
								<div className="item">
									<div className="ui transparent icon input">
										<input placeholder="Search mail..." type="text" />
										<i className="search icon" />
									</div>
								</div>
							</div>
						</div>

						<div className="column eleven wide">
							<NewBirth />							
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Births)
