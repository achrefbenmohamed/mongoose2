const express = require('express')
const { AddUser, ListUsers, DeleteUser, UpdateUser, UserDet } = require('../Controllers/User')

const UserRoutes = express.Router()

UserRoutes.post('/AddUser', AddUser)

UserRoutes.get('/UsersList', ListUsers)

UserRoutes.delete('/deleteUser/:id', DeleteUser)

UserRoutes.put('/UserUpdate/:id', UpdateUser)

UserRoutes.get('/UserProfile/:id', UserDet)

module.exports = UserRoutes