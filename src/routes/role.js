const express = require('express');
const RoleController = require('../controllers/role.controller');
const validates = require('../middlewares/validates');
const commonValidation = require('../validations/common.validation');
const roleValidation = require('../validations/role.validation');
const Auth = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/', Auth.authSuperAdmin, validates(roleValidation.newRole), RoleController.newRole);
router.get('/', Auth.authSuperAdmin, RoleController.allRoles);
router.put('/:id', Auth.authSuperAdmin, validates(commonValidation.paramId), validates(roleValidation.newRole), RoleController.updateRole);
router.delete('/:id', Auth.authSuperAdmin, validates(commonValidation.paramId), RoleController.deleteRole);

module.exports = router;
