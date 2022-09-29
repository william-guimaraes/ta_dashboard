export const addAgentMessage = ((conversationId: string, text: string) => {
    const messages = document.getElementById(conversationId + '-messages') as HTMLDivElement;
    const endMessage = document.createElement('div');
    endMessage.setAttribute("style", "margin-left: 0; margin-right: auto; width: 75%");
    endMessage.innerHTML = '<span>Agent: ' + text + '</span>'
    messages.appendChild(endMessage)
})

export const addUserMessage = ((conversationId: string, text: string) => {
    const messages = document.getElementById(conversationId + '-messages') as HTMLDivElement;
    const endMessage = document.createElement('div');
    endMessage.setAttribute("style", "margin-left: auto; margin-right: 5%; width: 75%; text-align: right");
    endMessage.innerHTML = '<span>' + text + '</span>'
    messages.appendChild(endMessage)
})

export const sendUserMessage = ((conversationId: string) => {
    const inputElement = document.getElementById(conversationId + '-input') as HTMLInputElement;
    var text = inputElement.value;
    if (text.length > 0) {
        window.Smooch.sendMessage(text, conversationId);
        inputElement.value = '';
    }
})

export const getConversations = () => {
    const conversationsContainer = document.getElementById('conversations-container') as HTMLDivElement;
    var conversations = window.Smooch.getConversations();
    conversations?.forEach((conversation:any) => {
        const conversationElement = document.createElement('div');
        conversationElement.innerHTML = '<div class="ant-card ant-card-bordered" style="width: 45vh;"><div class="ant-card-head"><div class="ant-card-head-wrapper"><div class="ant-card-head-title">Conversation: ' + conversation.id + '</div></div></div><div class="ant-card-body"><div id="' + conversation.id + '-messages" class="sc-llJcti fphRZl" style="height: 200px; overflow: scroll; display: flex; flex-direction: column-reverse"></div><div class="sc-llJcti fphRZl" style="padding-top:10px"><span class="ant-input-group"><textarea rows="2" id="' + conversation.id + '-input" class="ant-input"></textarea><button type="button" class="ant-btn ant-btn-primary" style="width: 100%;" id="'+ conversation.id + '"><span>Send</span></button></span></div></div></div>'
        conversationsContainer.prepend(conversationElement);
    });

    conversations?.forEach(async (conversation:any) => {
        var conversation = await window.Smooch.getConversationById(conversation.id);
        conversation.messages?.forEach((message:any) => {
            if (message.role == 'business') {
                addAgentMessage(conversation.id, message.text)
            } else {
                addUserMessage(conversation.id, message.text)
            }
        })
    });
}