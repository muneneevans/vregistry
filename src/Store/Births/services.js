export default class BirthsService {
	static get host() {
		delete BirthsService.host
		return (BirthsService.host = "http://172.104.240.125:8102/evr/dev")
	}

	static newBirth() {
		return fetch(BirthsService.host, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				query: `
                mutation {
                    createBirth(
                        input:{
                            birth:{
                                birthNotificationNumber: "BND123425Qwe34P",
                                childFirstName: "Alice",
                                childLastName: "M'twa",
                                childMiddleName: "Kiptoo Kuria",
                                dateOfBirth: "2018-02-22 11:34:45",
                                sex: "female",
                                natureOfBirth: "Born alive",
                                placeOfBirth: "Facility",
                                nameOfMother: "Lilly M'twa",
                                birthNotificationIssuedTo: "Lilly M'twa",
                                motherPhoneNumber: "254723444059",
                                motherIdNumber: "10928475",
                                organisationUnitId: "T3JnYW5pc2F0aW9uVW5pdE5vZGU6MTIwNDE4"
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
		})
        .then (response => response.json())        

		
	}
}
