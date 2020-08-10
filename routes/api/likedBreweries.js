const express = require('express');
const db = require("../../db/models");

const {check, validationResult} = require('express-validator');
// const asyncHandler = require('express-async-handler');
// const { requireAuth } = require("../../auth");

// router.use(requireAuth);

const asyncHandler = require('express-async-handler');

const router = express.Router();




router.get("/", asyncHandler(async (req, res) => {
    const likedBreweries = await db.LikedBrewery.findAll({
        include: [db.User, db.Brewery]
    });
    res.json({
        likedBreweries
    });
}));

module.exports = router;
