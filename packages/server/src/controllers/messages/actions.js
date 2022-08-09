const client = require("../../lib/sunshine")

const messagesInstance = new client.client.MessagesApi()

const { APP_ID: appId } = process.env;

exports.sendLinkButton = async (req, res) => {
    const conversationId = req.body.conversationId
    const messagePost = new client.client.MessagePost();
    messagePost.setAuthor({type: 'business'});
    messagePost.setContent({ 
        type: 'text', 
        text: 'A link button',
        actions: [
            {
                type: 'link',
                text: 'My button',
                uri: 'http://localhost:3000/'
            }
        ]
    });

    try {
        await messagesInstance.postMessage(appId, conversationId, messagePost);
        res.status(200).end()
    } catch (e) {
        console.log(e)
        res.status(500).end()
    }
}
