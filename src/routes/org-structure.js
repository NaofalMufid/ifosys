const express = require('express');
const StructureController = require('../controllers/org-structure.controller');
const validates = require('../middlewares/validates');
const commonValidation = require('../validations/common.validation');
const OrgValidation = require('../validations/org.validation');

const router = express.Router();

router.post('/', StructureController.newStructure);
router.get('/', StructureController.allStructure);
router.put('/:id', StructureController.updateStructure);
router.delete('/:id', StructureController.deleteStructure);

module.exports = router;
