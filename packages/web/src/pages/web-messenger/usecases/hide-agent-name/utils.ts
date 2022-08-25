export const modifyConversationList = () => {
    const conversationListPreviewUserText = 'You' // To be modified with custom text is used
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    const descriptions = messengerContent.querySelectorAll('.item-content .description');
    descriptions.forEach(function(description, index) {
        var userName = /.*?(?=:)/.exec(description.innerHTML);
        if (userName) {
            if (userName[0] !== conversationListPreviewUserText) {
                description.childNodes[0].nodeValue = description!.childNodes[0]!.nodeValue!.replace(userName[0], 'agentName');
            }
        }
    });
}

export const modifyTypingIndicator = () => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    const typingIndicator = messengerContent.getElementsByClassName('typing-indicator-container')[0]
    if (!typingIndicator) return
    const nameChild = typingIndicator.querySelector('.from') as HTMLDivElement
    if (nameChild) nameChild.innerText = 'agentName'
    const avatarChild = typingIndicator.querySelector('.typing-indicator-avatar') as HTMLImageElement
    if (avatarChild) {
        avatarChild.src = 'https://www.gravatar.com/avatar/00000000000000000000000000000000.png?s=200&d=mm'
        avatarChild.alt = 'agentName Avatar'
    }

}

export const triggerMutationObserver = () => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    const observer = new MutationObserver(modifyConversationList);
  
    const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
    }

    const paginatorElem = messengerContent.querySelector('.conversation-list-paginator-container');
    if (paginatorElem) {
        observer.observe(paginatorElem, observerOptions);
    }

    const conversationListElem = messengerContent.querySelector('.conversation-list-transition');
    if (conversationListElem) {
        observer.observe(conversationListElem, observerOptions);
    }

    const buttonElem = messengerContent.querySelector('.messenger-button-shown');
    if (buttonElem) {
        observer.observe(buttonElem, observerOptions);
    }
}