import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import styles from "./style.css"

import * as birthActions from "../../Store/Births/actions"
import * as birthSelectors from "../../Store/Births/selectors"

import NewBirth from "../../Components/NewBirths"
import Banner from "../../Components/Banner"
import BirthsSideBar from "../../Components/BirthsMenu"
import BirthsList from "../../Components/BirthsList"
import VaccinesList from "../../Components/VaccineList"
import BirthDetails from "../../Components/BirthDetails"

class Births extends Component {
	constructor(props) {
		super(props)
		this.getBirthDetails = this.getBirthDetails.bind(this)
	}
	componentDidMount() {
		this.props.birthActions.fetchBirthList()
		this.props.birthActions.fetchAllVaccines()
	}

	newBirth(birthDetails) {
		this.props.birthActions.newBirth(birthDetails)
	}

	getBirthDetails(birthId) {
		this.props.birthActions.fetchBirthDetails(birthId)
	}

	render() {
		return (
			<div className={styles.birthScreen}>
				<Banner title="Births" secondaryText="manage children birth records" />
				<div className={styles.contentScreen}>
					<div className="ui two column centered grid ">
						<div className="row">
							<div className="column three wide">
								<BirthsSideBar />
							</div>

							<div className="column eight wide">
								<Switch>
									<Route
										path={this.props.match.path + "/new"}
										render={() => (
											<NewBirth
												newBirth={this.newBirth.bind(this)}
												newBirthProcess={this.props.newBirthProcessStatus}
											/>
										)}
									/>
									<Route
										path={this.props.match.path + "/list"}
										render={() => (
											<BirthsList
												birthsList={this.props.births}
												getBirthDetailsAction={this.getBirthDetails}
											/>
										)}
									/>
									<Route
										path={this.props.match.path + "/vaccines/list"}
										render={() => (
											<VaccinesList vaccinesList={this.props.vaccines} />
										)}
									/>
									<Route
										path={this.props.match.path + "/:id"}
										render={props => (
											<BirthDetails
												birthDetails={this.props.birthDetails}
												getBirthDetails={this.getBirthDetails}
												match={props.match}
											/>
										)}
									/>
									<Route
										path={this.props.match.path }
										render={() => (
											<NewBirth
												newBirth={this.newBirth.bind(this)}
												newBirthProcess={this.props.newBirthProcessStatus}
											/>
										)}
									/>
								</Switch>
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
		newBirthProcessStatus: birthSelectors.getNewBirthProcess(state.births),

		vaccines: birthSelectors.getAllVaccines(state.births),

		birthDetails: birthSelectors.getBirthDetails(state.births)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		birthActions: bindActionCreators(birthActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Births)
