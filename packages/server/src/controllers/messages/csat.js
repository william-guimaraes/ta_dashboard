const client = require("../../lib/sunshine")

const messagesInstance = new client.client.MessagesApi()

const { APP_ID: appId } = process.env;

exports.sendCsat = async (req, res) => {
    const conversationId = req.body.conversationId
    const messagePost = new client.client.MessagePost();
    messagePost.setAuthor({type: 'business'});
    messagePost.setContent({ 
        type: 'text',
        text: 'How would you rate our interaction?',
        actions: [
            {
                type: 'reply',
                text: '😍',
                payload: 'Very Satisfied',
                metadata: {
                    userResponseValue: '5',
                    agentNumber: '239',
                    otherSalientInfo: 'Taco'
                }
            },
            {
                type: 'reply',
                text: '🙂',
                payload: 'Satisfied',
                metadata: {
                    userResponseValue: '4',
                    agentNumber: '239',
                    otherSalientInfo: 'burrito'
                }
            },
            {
                type: 'reply',
                text: '😐',
                payload: 'Neutral',
                metadata: {
                    userResponseValue: '3',
                    agentNumber: '239',
                    otherSalientInfo: 'pizza'
                }
            },
            {
                type: 'reply',
                text: '🙁',
                payload: 'Dissatisfied',
                metadata: {
                    userResponseValue: '2',
                    agentNumber: '239',
                    otherSalientInfo: 'pizza'
                }
            },
            {
                type: 'reply',
                text: '😠',
                payload: 'Very Dissatisfied',
                metadata: {
                    userResponseValue: '1',
                    agentNumber: '239',
                    otherSalientInfo: 'hamburger'
                }
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
