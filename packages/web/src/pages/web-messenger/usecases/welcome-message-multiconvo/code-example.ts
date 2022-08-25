export const codeExample = `
//Add the welcome event listener when the web messenger is ready
const initSmooch = async () => {
    await window.Smooch.init(smoochConfig)

    window.Smooch.on('ready', () => {
        addMessengerWelcomeEvent()
    })
}

//This function finds the Web Messenger element and attaches the event listener to add the welcome message
const addMessengerWelcomeEvent = () => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document

    messengerContent.addEventListener('click', () => {
        setTimeout(async () => {
            addWelcomeMessage()
        }, 300)
    })
}

//This function finds the intro-pane element and calls the creation of the message
const addWelcomeMessage = () => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const paneElement = webMessenger.contentDocument!.querySelector('.intro-pane') as HTMLDivElement
    createWelcomeMessage(paneElement)
}

//This function is responsible to create the message element and attachs it to the parent element
const createWelcomeMessage = (targetParent: HTMLDivElement | null) => {
    if (!targetParent || targetParent.hasChildNodes()) return

    const welcomeMessage = document.createElement('p')
    welcomeMessage.innerText = 'Olá, como podemos ajudá-lo?'
    targetParent.appendChild(welcomeMessage)
}
`