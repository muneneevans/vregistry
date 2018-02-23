import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import styles from "./style.css"

import * as birthActions from "../../Store/Births/actions"
import * as birthSelectors from "../../Store/Births/selectors"

import NewBirth from "../../Components/NewBirths"
import Banner from "../../Components/Banner"

class Births extends Component {
	componentDidMount() {}

	newBirth(birthDetails) {
		// alert("creating")
		this.props.birthActions.newBirth(birthDetails)
	}

	render() {
		return (
			<div className={styles.birthScreen}>
				<Banner title="Births" secondaryText="manage children birth records"/>
				<div className={styles.contentScreen}>
					<div className="ui two column grid ">
						<div className="row">
							<div className="column four wide">
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

							<div className="column eight wide">
								<NewBirth
									newBirth={this.newBirth.bind(this)}
									newBirthProcess={this.props.newBirthProcessStatus}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		births: birthSelectors.getBirths(state.births),
		newBirthProcessStatus: birthSelectors.getNewBirthProcess(state.births)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		birthActions: bindActionCreators(birthActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Births)
