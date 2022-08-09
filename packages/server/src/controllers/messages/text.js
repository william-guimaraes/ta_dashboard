const client = require("../../lib/sunshine")

const messagesInstance = new client.client.MessagesApi()

const { APP_ID: appId } = process.env;

exports.sendTextMessage = async (text, conversationId) => {
    const messagePost = new client.client.MessagePost();
    messagePost.setAuthor({type: 'business'});
    messagePost.setContent({type: 'text', text });

    try {
        await messagesInstance.postMessage(appId, conversationId, messagePost);
    } catch (e) {
        console.log(e)
    }
}