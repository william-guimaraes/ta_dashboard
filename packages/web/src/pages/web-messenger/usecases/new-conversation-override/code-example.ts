export const codeExample = `
await window.Smooch.init(smoochConfig).then(function () {
    addOnclickListener()
})

// This function modifies the conversation button behaviour
const addOnclickListener = () => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    messengerContent.addEventListener('click', (event: any) => {
        setTimeout(async () => {
            if (event.target!.tagName!.toLowerCase() === 'button') {
                window.Smooch.createConversation().then((conversation: { id: any }) => window.Smooch.loadConversation(conversation.id))
            }
        }, 300)
    })
}
`