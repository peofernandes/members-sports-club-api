const FindAllMembersUseCase = require('./findAllMembersUseCase')

class CreateMemberController {

	constructor(app) {
		this.findAllMembersUseCase = new FindAllMembersUseCase(app)
	}

	execute (req, res) {

		return this.findAllMembersUseCase.handler()
			.then(response => {
				res.status(response.statusCode)
				res.json(response.data)
			})
	}
}

module.exports = CreateMemberController