// this index.js file will serve as a central hub for routing functions in the app

const router = require('express').Router();
const noteRoutes = require('../apiRoutes/noteRoutes');

router.use(noteRoutes);

module.exports = router;