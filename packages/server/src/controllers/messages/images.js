const client = require("../../lib/sunshine")

const messagesInstance = new client.client.MessagesApi()

const { APP_ID: appId } = process.env;

exports.sendImageMessage = async (req, res) => {
    const conversationId = req.body.conversationId
    const messagePost = new client.client.MessagePost();
    messagePost.setAuthor({type: 'business'});
    messagePost.setContent({type: 'image', mediaUrl: 'http://ltecnologia.com.br/blog/wp-content/uploads/2015/02/helloworld.png' });

    await messagesInstance.postMessage(appId, conversationId, messagePost);
}

exports.sendStickerMessage = async (req, res) => {
    const conversationId = req.body.conversationId
    const messagePost = new client.client.MessagePost();
    messagePost.setAuthor({type: 'business'});
    messagePost.setContent({type: 'image', mediaUrl: 'https://logospng.org/wp-content/uploads/nike.jpg' });

    try {
        await messagesInstance.postMessage(appId, conversationId, messagePost);
        res.status(200).end()
    } catch (e) {
        console.log(e)
        res.status(500).end()
    }
}

exports.sendGifMessage = async (req, res) => {
    const conversationId = req.body.conversationId
    const messagePost = new client.client.MessagePost();
    messagePost.setAuthor({type: 'business'});
    messagePost.setContent({type: 'image', mediaUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif' });

    try {
        await messagesInstance.postMessage(appId, conversationId, messagePost);
        res.status(200).end()
    } catch (e) {
        console.log(e)
        res.status(500).end()
    }
}