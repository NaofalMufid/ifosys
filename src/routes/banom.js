const express = require('express');
const BanomController = require('../controllers/banom.controller');
const validates = require('../middlewares/validates');
const commonValidation = require('../validations/common.validation');
const BanomValidation = require('../validations/banom.validation');
const Auth = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/', Auth.authSuperAdmin, validates(BanomValidation.newBanom), BanomController.newBanom);
router.get('/', Auth.authSuperAdmin, BanomController.allBanoms);
router.put('/:id', Auth.authSuperAdmin, validates(commonValidation.paramId), validates(BanomValidation.newBanom), BanomController.updateBanom);
router.delete('/:id', Auth.authSuperAdmin, validates(commonValidation.paramId), BanomController.deleteBanom);

module.exports = router;
