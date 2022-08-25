export const codeExample = `
// Code example only shows agent message for readability; see utils.ts for actual implementation
const appendAgentFirstMessage = () => {
    if (!window.Smooch.isOpened()) return;
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    const messages = messengerContent.getElementsByClassName('messages')[0] as HTMLDivElement
    if (!messages) return;
    const firstMessage = document.createElement('div');
    firstMessage.innerHTML = getAgentMessageContent('<span>This is a first message.</span><br>This is another row</span>')
    messages.prepend(firstMessage)
}

const appendAgentLastMessage = () => {
    if (!window.Smooch.isOpened()) return;
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    const messages = messengerContent.getElementsByClassName('messages')[0] as HTMLDivElement
    if (!messages) return;
    const endMessage = document.createElement('div');
    endMessage.innerHTML = getAgentMessageContent('<span>This is a last message.</span><br>This is another row</span>')
    messages.appendChild(endMessage)
}

// Add \\ after each line in actual HTML that supports multi-line
// Change from left-row to right-row for User message
// Remove the from and msg-avatar class for User message
// Set background color and border color for User message to document.body.style's --action-color
const getAgentMessageContent = ((htmlContent: string) => {
    return
        '<div class="row left-row">
            <div class="from">DummyAgent</div>
            <div class="msg-wrapper">
                <div class="msg-avatar">
                    <img alt="Dummy Agent avatar" src="https://www.gravatar.com/avatar/00000000000000000000000000000000.png?s=200&d=mm">
                </div>
                <div class="msg" data-iscapture="true" currentitem="false">
                <div>
                    <div>
                        <span class="message-item message-text last-item">
                        ' + htmlContent + '
                        </span>
                    </div>
                </div>
                </div>
                <div class="__react_component_tooltip place-top type-dark" data-id="tooltip"></div>
            </div><div class="message-status-indicator"></div>
            <div class="clear"></div>
        </div>'
})
`