const express = require('express');
const AuthRoutes = require('./auth');
const RoleRoutes = require('./role');
const BanomRoutes = require('./banom');
const UserRoutes = require('./user');
const OrgRoutes = require('./organization');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("IFOSYS API")
});

router.use('/auth', AuthRoutes);
router.use('/roles', RoleRoutes);
router.use('/banom', BanomRoutes);
router.use('/users', UserRoutes);
router.use('/organizations', OrgRoutes);

module.exports = router;
