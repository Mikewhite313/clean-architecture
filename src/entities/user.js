class UserEntity {
  constructor(username, email, password) {
    this.username = String(username);
    this.email = String(email);
    this.password = String(password);
  }
}

module.exports = UserEntity;
