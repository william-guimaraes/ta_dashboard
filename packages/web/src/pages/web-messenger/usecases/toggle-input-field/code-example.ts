export const codeExample = `
const showInputField = () => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    const footerElement = messengerContent.getElementById('footer') as HTMLDivElement
    if (!footerElement) return;
    footerElement.style.display = '';
}

const hideInputField = () => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    const footerElement = messengerContent.getElementById('footer') as HTMLDivElement
    if (!footerElement) return;
    footerElement.style.display = 'none';
}
`