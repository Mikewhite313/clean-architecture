// user-controller.js
class UserController {
  constructor(userUseCase) {
    this.userUseCase = userUseCase;
  }

  async create(req, res) {
    const newUser = await this.userUseCase.create(req);
    return res.status(200).json({ message: "ok", data: newUser });
  }
}

module.exports = UserController;
