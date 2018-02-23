import * as types from "./actionTypes"
import BirthService from "./services"

export const newBirth = birthDetails => {
	return dispatch => {
		dispatch({ type: types.NEW_BIRTH_REQUEST })
		BirthService.newBirth(birthDetails).then(response => {
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
