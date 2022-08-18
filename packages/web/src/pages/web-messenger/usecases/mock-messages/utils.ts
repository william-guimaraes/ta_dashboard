export const appendFirstMessage = ((isAgent: boolean) => {
    if (!window.Smooch.isOpened()) return;
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    const messages = messengerContent.getElementsByClassName('messages')[0] as HTMLDivElement
    if (!messages) return;
    const firstMessage = document.createElement('div');
    firstMessage.innerHTML = getAgentMessageContent('<span>This is a first message.</span><br>This is another row</span>', isAgent)
    messages.prepend(firstMessage)
})

export const appendLastMessage = ((isAgent: boolean) => {
    if (!window.Smooch.isOpened()) return;
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    const messages = messengerContent.getElementsByClassName('messages')[0] as HTMLDivElement
    if (!messages) return;
    const endMessage = document.createElement('div');
    endMessage.innerHTML = getAgentMessageContent('<span>This is a last message.</span><br>This is another row</span>', isAgent)
    messages.appendChild(endMessage)
})

const getAgentMessageContent = ((htmlContent: string, isAgent: boolean) => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    var actionColor = isAgent ? '' : messengerContent.body.style.getPropertyValue('--action-color');
    return '<div class="row ' + (isAgent ? 'left' : 'right') + '-row">' + (isAgent ? '<div class="from">DummyAgent</div>' : '') + '<div class="msg-wrapper">' + (isAgent ? '<div class="msg-avatar"><img alt="Dummy Agent avatar" src="https://www.gravatar.com/avatar/00000000000000000000000000000000.png?s=200&d=mm"></div>' : '') + '<div class="msg" data-iscapture="true" currentitem="false"' + (isAgent ? '': 'style="border-left-color:' + actionColor + '; background-color:'+ actionColor + ';"') + '> <div><div><span class="message-item message-text last-item">' + htmlContent + '</span></div></div></div><div class="__react_component_tooltip place-top type-dark" data-id="tooltip"></div></div><div class="message-status-indicator"></div><div class="clear"></div></div>'
})