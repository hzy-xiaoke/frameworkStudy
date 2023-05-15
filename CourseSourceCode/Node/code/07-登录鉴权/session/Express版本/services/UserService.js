const UserModel = require('../models/UserModel');

const UserService = {
  addUser: (username, password, age) => {
    return UserModel.create({
      username,
      password,
      age
    })
  },
  updateUser: (id, username, age) => {
    return UserModel.updateOne({ _id: id }, {
      username,
      age
    })
  },
  deleteUser: (id) => {
    return UserModel.deleteOne({
      _id: id
    })
  },
  getUsers: (page, limit) => {
    return UserModel.find({}, ['username', 'age'])
      .sort({ age: 1 })
      .skip((page - 1) * limit)
      .limit(limit)
  },
  getUserById: (id) => {
    return UserModel.find({ _id: id }, ['username', 'age'])
  },
  login: (username, password) => {
    return UserModel.find({
      username,
      password
    })
  }
}

module.exports = UserService;