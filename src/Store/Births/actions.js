import * as types from "./actionTypes"
import BirthService from "./services"

export const newBirth = birthDetails => {
	return dispatch => {
		dispatch({ type: types.NEW_BIRTH_REQUEST })

		let newBirthDetails = Object.assign({}, birthDetails)
		newBirthDetails.dateOfBirth = newBirthDetails.dateOfBirth.toISOString()
		BirthService.newBirth(newBirthDetails).then(response => {
			if ("errors" in response) {
				return dispatch({
					type: types.NEW_BIRTH_ERROR,
					errors: response.errors
				})
			} else {
				return dispatch({
					type: types.NEW_BIRTH_SUCCESS,
					newBirth: response.data
				})
			}
		})
	}
}

export const fetchBirthDetails = birthId => {
	return dispatch => {
		dispatch({ type: types.BIRTH_DETAILS_REQUEST })

		BirthService.getBirthDetails(birthId).then(response => {
			if ("errors" in response) {
				return dispatch({
					type: types.BIRTH_DETAILS_ERROR,
					errors: response.errors
				})
			} else {				
				return dispatch({
					type: types.BIRTH_DETAILS_SUCCESS,
					birthDetails: response.data.birth
				})
			}
		})
	}
}

export const fetchBirthList = () => {
	return dispatch => {
		dispatch({ type: types.BIRTH_LIST_REQUEST })
		BirthService.getBirthsList({}).then(response => {
			if ("error" in response) {
				return dispatch({
					type: types.BIRTH_LIST_ERROR,
					errors: response.errors
				})
			} else {
				return dispatch({
					type: types.BIRTH_LIST_SUCCESS,
					births: response.data.organisationUnit.birthSet.edges
				})
			}
		})
	}
}

export const fetchAllVaccines = () => {
	return dispatch => {
		dispatch({ type: types.VACCINE_LIST_REQUEST })
		BirthService.getVaccineList().then(response => {
			if ("error" in response) {
				return dispatch({
					type: types.VACCINE_LIST_ERROR,
					errors: response.errors
				})
			} else {
				return dispatch({
					type: types.VACCINE_LIST_SUCCESS,
					vaccines: response.data.allVaccines.edges
				})
			}
		})
	}
}
