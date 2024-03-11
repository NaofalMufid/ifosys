const express = require('express');
const UserController = require('../controllers/user.controller');
const validates = require('../middlewares/validates');
const commonValidation = require('../validations/common.validation');
const UserValidation = require('../validations/user.validation');

const router = express.Router();

router.post('/', validates(UserValidation.newUser), UserController.newUser);
router.get('/', UserController.allUsers);
router.put('/:id', validates(commonValidation.paramStringId), validates(UserValidation.updateUser), UserController.updateUser);
router.delete('/:id', validates(commonValidation.paramStringId), UserController.deleteUser);

module.exports = router;
