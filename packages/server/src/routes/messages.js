const express = require("express");
const controller = require("../controllers/messages")

const router = express.Router();

const messageMap = {
    image: controller.images.sendImageMessage,
    sticker: controller.images.sendStickerMessage,
    gif: controller.images.sendGifMessage,
    link: controller.actions.sendLinkButton,
    carousel: controller.carousel.sendCarousel,
    csat: controller.csat.sendCsat,
    form: controller.form.sendForm
}

router.post('/', async (req, res) => {
    const messageType = req.body.messageType
    const controller = messageMap[messageType]

    try {
        await controller(req, res);
        res.status(200).end()
    } catch (e) {
        console.log(e)
        res.status(500).end()
    }
})

exports.router = router