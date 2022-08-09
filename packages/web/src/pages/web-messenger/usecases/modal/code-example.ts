export const codeExample = `
//Add a listener for every image received by the web messenger:
export const addImagesListeners = (cleanListeners: boolean) => {
    if (cleanListeners) {
        loopThroughImages((imageElement: HTMLImageElement) => {
            imageElement.removeEventListener('click', createImageModal)
        })
    }
    loopThroughImages((imageElement: HTMLImageElement) => {
        imageElement.addEventListener('click', createImageModal)
    })
}

//The loopThroughImages is a helper function:
const loopThroughImages = (actionFn: Function) => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const conversationImages = webMessenger.contentDocument!.getElementsByTagName("img")

    Array.from(conversationImages).forEach((imageElement) => {
        if (imageElement.alt === 'Uploaded image') {
            actionFn(imageElement)
        }
    })
}

//The createImageModal is the function responsible to create the modals and to attach the image:
const createImageModal = (evt: MouseEvent) => {
    evt.stopPropagation()
    const imgTarget = evt.target as HTMLImageElement

    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.addEventListener('click', () => {
        modal.remove()
    })

    const image = document.createElement('img')
    image.classList.add('modal-image')
    image.src = imgTarget.src

    modal.appendChild(image)
    document.body.prepend(modal)
}

//We have to add the listeners on two main events: widget:open and message:receive:
window.Smooch.on('widget:opened', () => {
    addImagesListeners(true)
});

window.Smooch.on('message:received', (message: any) => {
    if (message.type === 'image') {
        setTimeout(() => {
            addImagesListeners(true)
        }, 400)
    }
});
`