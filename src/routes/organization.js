const express = require('express');
const OrgController = require('../controllers/organization.controller');
const validates = require('../middlewares/validates');
const commonValidation = require('../validations/common.validation');
const OrgValidation = require('../validations/org.validation');
const Auth = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/', Auth.authSuperAdmin, validates(OrgValidation.newOrg), OrgController.newOrg);
router.get('/', Auth.authCommon, OrgController.allOrg);
router.put('/:id', Auth.authCommon, validates(commonValidation.paramStringId), validates(OrgValidation.updateOrg), OrgController.updateOrg);
router.delete('/:id', Auth.authSuperAdmin, validates(commonValidation.paramStringId), OrgController.deleteOrg);

module.exports = router;
