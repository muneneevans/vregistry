import obj2arg from "graphql-obj2arg"
export default class BirthsService {
	static get host() {
		delete BirthsService.host
		return (BirthsService.host = "http://172.104.240.125:8102/evr/dev")
	}

	static newBirth(birthDetails) {
		console.log(obj2arg(birthDetails))
		return fetch(BirthsService.host, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				query: `
                mutation {
                    createBirth(
                        input:{
                            birth:{
                                ${obj2arg(birthDetails, { noOuterBraces: true })}
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
}
