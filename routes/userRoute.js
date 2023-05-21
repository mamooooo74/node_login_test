const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/userController');
const authMiddleware = require('../app/midleWare/auth')
router.use('/',authMiddleware)
router.get('/',userController.index);
module.exports = router;