export const codeExample = `
//Update init to include delegate
delegate: {
    beforeDisplay(message: any, _data: any) {
        if (message.role === 'business') {
            message.displayName = 'agentName'
            message.avatarUrl = 'https://www.gravatar.com/avatar/00000000000000000000000000000000.png?s=200&d=mm'
        }
        return message;
    }
}

// This function modifies the conversation list by replacing the agent name 
const modifyConversationList = () => {
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

// This function modifies the typing indicator details
const modifyTypingIndicator = () => {
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

// This function listens for any changes in the web widget to modify the conversation list
const triggerMutationObserver = () => {
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

// Requires delay before calling this on init
const triggerTypingMutationObserver = () => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    const observer = new MutationObserver(modifyTypingIndicator);
  
    const observerOptions = {
        childList: true,
        attributes: false,
        subtree: false
    }

    const messagesListElem = messengerContent.querySelector('.messages');
    if (messagesListElem) {
        observer.observe(messagesListElem, observerOptions);
    }
}
`