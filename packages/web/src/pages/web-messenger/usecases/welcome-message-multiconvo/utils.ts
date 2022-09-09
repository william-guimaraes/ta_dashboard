const createWelcomeMessage = (targetParent: HTMLDivElement | null) => {
    
    if (!targetParent || targetParent.hasChildNodes()) return
    const parentChildren = Array.from(targetParent.children)
    parentChildren.forEach((child) => {
        if(child.tagName === 'P') return
    })
    const welcomeMessage = document.createElement('p')
    welcomeMessage.innerText = 'Hello, how can I help you?'
    targetParent.appendChild(welcomeMessage)
}

const addWelcomeMessage = () => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const paneElement = webMessenger.contentDocument!.querySelector('.intro-pane') as HTMLDivElement
    createWelcomeMessage(paneElement)
}

export const addMessengerWelcomeEvent = () => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document

    messengerContent.addEventListener('click', () => {
        setTimeout(async () => {
            addWelcomeMessage()
        }, 300)
    })
}