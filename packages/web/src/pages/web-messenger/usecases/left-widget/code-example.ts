export const codeExample = `
//On the ready event, create a style element to pass your custom CSS:
window.Smooch.on('ready', () => {
    const iFrameEl = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const docContent = iFrameEl.contentDocument as Document
    const style = document.createElement('style')

    iFrameEl.style.right = 'auto'
    iFrameEl.style.left = '12px'
    
    style.innerHTML = \`
        #messenger-button {
            right: auto;
            left: 6px;
        }

        .button-display {
            transform-origin: bottom left;
        }
    \`
    docContent.body.prepend(style)
})
`