// user-repository.js
const User = require("../models/user");
const BaseRepository = require("./crud-repository");

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }
}

module.exports = UserRepository;
