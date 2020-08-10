  
const express = require('express');
const db = require("../../db/models");
const Op = require('sequelize').Op;

const {check, validationResult} = require('express-validator');
// const asyncHandler = require('express-async-handler');
// const { requireAuth } = require("../../auth");

const asyncHandler = require('express-async-handler');

const router = express.Router();

//router.use(requireAuth);



router.get("/lists", asyncHandler(async (req, res) => {
    const lists = await db.List.findAll({
        include: [db.User, db.Beer]
    });
    res.json({
        lists
    });
}));

module.exports = router;
