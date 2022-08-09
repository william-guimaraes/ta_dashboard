const client = require("../../lib/sunshine")

const messagesInstance = new client.client.MessagesApi()

const { APP_ID: appId } = process.env;

exports.sendCarousel = async (req, res) => {
    const conversationId = req.body.conversationId
    const messagePost = new client.client.MessagePost();
    messagePost.setAuthor({type: 'business'});
    messagePost.setContent({ 
        type: 'carousel', 
        items: [
            {
                title: 'Tacos',
                description: 'Description',
                mediaUrl: 'https://img.itdg.com.br/tdg/images/recipes/000/009/303/350394/350394_original.jpg?w=1200',
                actions: [
                    {
                        text: 'Select',
                        type: 'postback',
                        payload: 'TACOS'
                    },
                    {
                        text: 'More info',
                        type: 'link',
                        uri: 'http://example.org'
                    }
                ]
            },
            {
                title: 'Ramen',
                description: 'Description',
                mediaUrl: 'https://conteudo.imguol.com.br/c/entretenimento/41/2021/08/20/shoyu-ramen---jojo-1629484609976_v2_1x1.jpg',
                actions: [
                    {
                        text: 'Select',
                        type: 'postback',
                        payload: 'RAMEN'
                    },
                    {
                        text: 'More info',
                        type: 'link',
                        uri: 'http://example.org'
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