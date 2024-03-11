const express = require('express');
const BanomController = require('../controllers/banom.controller');
const validates = require('../middlewares/validates');
const commonValidation = require('../validations/common.validation');
const BanomValidation = require('../validations/banom.validation');

const router = express.Router();

router.post('/', validates(BanomValidation.newBanom), BanomController.newBanom);
router.get('/', BanomController.allBanoms);
router.put('/:id', validates(commonValidation.paramId), validates(BanomValidation.newBanom), BanomController.updateBanom);
router.delete('/:id', validates(commonValidation.paramId), BanomController.deleteBanom);

module.exports = router;
