export const codeExample = `
//On the ready event, create a style element to pass your custom CSS:
window.Smooch.on('ready', () => {
    const iFrameEl = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const docContent = iFrameEl.contentDocument as Document
    const style = document.createElement('style')
    
    style.innerHTML = \`
        .messages-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: calc(100% - 42px);
        }
    \`
    docContent.body.prepend(style)
})
`