import obj2arg from "graphql-obj2arg"
export default class BirthsService {
	static get host() {
		delete BirthsService.host
		return (BirthsService.host = "http://172.104.240.125:8102/evr/dev")
	}

	static newBirth(birthDetails) {
		return fetch(BirthsService.host, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				query: `
                mutation {
                    createBirth(
                        input:{
                            birth:{
                                ${obj2arg(birthDetails, {
	noOuterBraces: true
})}
                            }
                        }
                    )
                    {
                        newBirth{
                            id,
                            uid,
                            childFirstName,
                            childLastName,
                            organisationUnit{
                                id,
                                uid,
                                name,
                                code
                            }
                        }

                    }

                }
                `
			})
		}).then(response => response.json())
	}
	static getBirthsList(orgUnit) {
		return fetch(BirthsService.host, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				query: `
                query{
                    organisationUnit(id:"T3JnYW5pc2F0aW9uVW5pdE5vZGU6MTIwNDE4"){
                        id
                        name
                        birthSet {
                        edges {
                            node {
                            id
                            childFirstName,
                            childLastName,
                            childMiddleName,
                            }
                        }
                        }
                    }
                }
                `
			})
		}).then(response => response.json())
	}

	static getBirthDetails(birthId) {
		return fetch(BirthsService.host, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				query: `
                query{
                    birth(id:"${birthId}") {
                        id
                        childFirstName,
                        childLastName,
                        childMiddleName,
                        sex,
                        placeOfBirth,
                        nameOfMother,
                        dateOfBirth,
                        natureOfBirth,
                        motherIdNumber,
                        motherIdNumber
                    }
                }
                `
			})
		}).then(response => response.json())
	}
	static getVaccineList() {
		return fetch(BirthsService.host, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				query: `
                query{
                    allVaccines{
                        edges{
                            node{   
                                name
                                id
                            }
                        } 
                    }
                }
                `
			})
		}).then(response => response.json())
	}
}
