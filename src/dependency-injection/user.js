const UserController = require("../frameworks/controllers/user");
const setUpUserRoutes = require("../frameworks/routes/user");
const UserRepository = require("../repositories/user-repository");
const UserUseCase = require("../useCases/user");

const userRepository = new UserRepository();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase);

const userRoutes = setUpUserRoutes(userController);

module.exports = userRoutes;
