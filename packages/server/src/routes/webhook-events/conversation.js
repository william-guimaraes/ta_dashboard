const express = require("express");
const controller = require("../../controllers/messages")

const router = express.Router();

router.post('/created', async (req, res) => {
    console.log('webhook PAYLOAD:\n', JSON.stringify(req.body, null, 4));

    const conversationId = req.body.events[0].payload.conversation.id
    await controller.text.sendTextMessage("Hey answer bot!", conversationId)
    
    res.end()
});

router.post('/deleted', (req, res) => {
    console.log('webhook PAYLOAD:\n', JSON.stringify(req.body, null, 4));
    res.end()
});

router.post('/message', (req, res) => {
    console.log('webhook PAYLOAD:\n', JSON.stringify(req.body, null, 4));
    res.end()
});

router.post('/read', (req, res) => {
    console.log('webhook PAYLOAD:\n', JSON.stringify(req.body, null, 4));
    res.end()
});

exports.router = router