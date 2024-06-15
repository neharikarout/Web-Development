const express = require('express')
const {handleGenerateNewShortURL,handleGet,handleGetAnalytics} = require("../controllers/url")

const router = express.Router();

router.post('/',handleGenerateNewShortURL);
router.get('/',handleGet)
router.get('/analytics/:shortId',handleGetAnalytics)

module.exports = router

