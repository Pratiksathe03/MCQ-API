const express = require('express');
const router = express.Router();

const user=require('../controller/user.controller.js');
const test=require('../controller/test.controller.js');

router.post('/updateUser',user.updateUser);
router.get('/exam/:id',test.getTestDetails);
router.post('/updateUserScore',user.updateUserTestScore);


module.exports = router