const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const { authCheck, adminCheck } = require('../middlewares/auth');
const { currentUser } = require('../controllers/auth');

router
  .route('/create-or-update-user')
  .post(authCheck, authController.createOrUpdateUser);

router.route('/current-user').post(authCheck, currentUser);
router.route('/current-admin').post(authCheck, adminCheck, currentUser);

module.exports = router;
