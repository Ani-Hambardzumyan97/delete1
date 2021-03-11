const express = require('express');
const path=require("path")
const { AdminView, deleteadmin} =require("../controllers/AdminController")
const router = express.Router();

/* admin view */
router.get('/',AdminView);

router.post('/:id',deleteadmin);
module.exports = router;
