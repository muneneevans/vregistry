export const getBirths = birthsReducer => {
	return birthsReducer.births.births
}
export const getNewBirthProcess = birthsReducer =>
	birthsReducer.births.newBirthProcess

export const getAllVaccines = birthsReducer => birthsReducer.vaccines.vaccines