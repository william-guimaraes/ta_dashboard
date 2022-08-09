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

const loopThroughImages = (actionFn: Function) => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const conversationImages = webMessenger.contentDocument!.getElementsByTagName("img")

    Array.from(conversationImages).forEach((imageElement) => {
        if (imageElement.alt === 'Uploaded image') {
            console.log(imageElement)
            actionFn(imageElement)
        }
    })
}

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
