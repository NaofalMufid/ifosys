const express = require('express');
const UserController = require('../controllers/user.controller');
const validates = require('../middlewares/validates');
const commonValidation = require('../validations/common.validation');
const UserValidation = require('../validations/user.validation');
const Auth = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/', Auth.authSuperAdmin, validates(UserValidation.newUser), UserController.newUser);
router.get('/', Auth.authSuperAdmin, UserController.allUsers);
router.put('/:id', Auth.authSuperAdmin, validates(commonValidation.paramStringId), validates(UserValidation.updateUser), UserController.updateUser);
router.delete('/:id', Auth.authSuperAdmin, validates(commonValidation.paramStringId), UserController.deleteUser);

module.exports = router;
