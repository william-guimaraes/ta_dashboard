const express = require("express")
const controller = require("../controllers/app")

const router = express.Router()

router.get('/', controller.getAllApps);

exports.router = router