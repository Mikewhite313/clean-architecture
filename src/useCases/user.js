// user-usecase.js
const UserEntity = require("../entities/user");

class UserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async create(req) {
    const { username, email, password } = req.body;
    const userEntity = new UserEntity(username, email, password);
    const newUser = await this.userRepository.create(userEntity);
    return newUser;
  }
}

module.exports = UserUseCase;
