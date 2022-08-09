const express = require("express")

const testRouter = express.Router();

testRouter.post("/", async (req, res) => {
  console.log('----------- TESTING ROUTE -------------\n');
  console.log('PAYLOAD:\n', JSON.stringify(req.body, null, 4));

  res.end()
})

exports.router = testRouter