const express = require('express');
const RoleController = require('../controllers/role.controller');
const validates = require('../middlewares/validates');
const commonValidation = require('../validations/common.validation');
const roleValidation = require('../validations/role.validation');

const router = express.Router();

router.post('/', validates(roleValidation.newRole), RoleController.newRole);
router.get('/', RoleController.allRoles);
router.put('/:id', validates(commonValidation.paramId), validates(roleValidation.newRole), RoleController.updateRole);
router.delete('/:id', validates(commonValidation.paramId), RoleController.deleteRole);

module.exports = router;
