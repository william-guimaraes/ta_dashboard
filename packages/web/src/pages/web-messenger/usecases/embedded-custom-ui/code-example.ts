export const codeExample = `
    // This example is purely for the receiving/sending portion. The input/UI needs to be built by themselves.
    Smooch.init(smoochConfig);
    Smooch.render(document.getElementById('chat-container')); // Any hidden element will do

    Smooch.on('message:sent', function(message:any, data: any) {
        addUserMessage(data.conversation.id, message.text);
    })

    Smooch.on('message:received', function (message: any, data: any) {
        addAgentMessage(data.conversation.id, message.text);
    })
`