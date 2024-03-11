const express = require('express');
const OrgController = require('../controllers/organization.controller');
const validates = require('../middlewares/validates');
const commonValidation = require('../validations/common.validation');
const OrgValidation = require('../validations/org.validation');

const router = express.Router();

router.post('/', validates(OrgValidation.newOrg), OrgController.newOrg);
router.get('/', OrgController.allOrg);
router.put('/:id', validates(commonValidation.paramStringId), validates(OrgValidation.updateOrg), OrgController.updateOrg);
router.delete('/:id', validates(commonValidation.paramStringId), OrgController.deleteOrg);

module.exports = router;
