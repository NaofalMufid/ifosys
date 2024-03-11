const express = require('express');
const AuthController = require('../controllers/auth.controller');
const validates = require('../middlewares/validates');
const UserValidation = require('../validations/user.validation');

const router = express.Router();

router.post('/login', validates(UserValidation.requestLogin), AuthController.login);

module.exports = router;
