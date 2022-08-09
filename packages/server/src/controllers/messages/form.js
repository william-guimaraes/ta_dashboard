const client = require("../../lib/sunshine")

const messagesInstance = new client.client.MessagesApi()

const { APP_ID: appId } = process.env;

exports.sendForm = async (req, res) => {
    const conversationId = req.body.conversationId
    const messagePost = new client.client.MessagePost();
    messagePost.setAuthor({type: 'business'});
    messagePost.setContent({
        type: 'form',
        fields: [
            {
                type: 'text',
                name: 'name',
                label: 'Name',
                placeholder: 'Enter your name...'
            },
            {
                type: 'email',
                name: 'email',
                label: 'Email',
                placeholder: 'Enter your email...'
            },
            {
                type: 'select',
                name: 'meal',
                label: 'Meal',
                placeholder: 'Choose your meal...',
                options: [
                    {
                        name: 'taco',
                        label: 'Taco'
                    },
                    {
                        name: 'burrito',
                        label: 'Burrito'
                    },
                    {
                        name: 'enchiladas',
                        label: 'Enchiladas'
                    }
                ]
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
