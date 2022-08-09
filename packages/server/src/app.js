require("dotenv").config();
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const testRoutes = require('./routes/test')
const appsRoutes = require('./routes/app')
const messageRoutes = require('./routes/messages')
const conversationEventsRoutes = require('./routes/webhook-events/conversation')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use('/test', testRoutes.router)
app.use('/apps', appsRoutes.router)
app.use('/messages', messageRoutes.router)
app.use('/conversation', conversationEventsRoutes.router)

exports.app = app
