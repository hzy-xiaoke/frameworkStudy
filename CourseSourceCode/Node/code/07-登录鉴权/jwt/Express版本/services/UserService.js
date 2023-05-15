const UserModel = require('../models/UserModel');

const UserService = {
  addUser: (username, password, age, avatar) => {
    return UserModel.create({
      username,
      password,
      age,
      avatar
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
    return UserModel.find({}, ['username', 'age', 'avatar'])
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