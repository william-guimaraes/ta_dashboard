export const codeExample = `
export const showInputField = () => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    const footerElement = messengerContent.getElementById('footer') as HTMLDivElement
    if (!footerElement) return;
    footerElement.style.display = '';
}

export const hideInputField = () => {
    
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    const footerElement = messengerContent.getElementById('footer') as HTMLDivElement
    if (!footerElement) return;
    footerElement.style.display = 'none';
}

export const showModal = () => {
    addModalElement()
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    var modal = messengerContent.getElementById("myModal") as HTMLDivElement;
    var span = messengerContent.getElementsByClassName("close")[0] as HTMLDivElement;
    modal.style.display = "block";
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

export const showBanner = (isSuccess: boolean) => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    const headerElement = messengerContent.querySelectorAll('#header')
    const bannerElement = document.createElement("div")
    bannerElement.setAttribute("style", "background: #fff")
    var innerHTML = '';
    if (isSuccess){
        innerHTML = '<div class="banner-container success" id="customBanner" style="position:sticky"><div class="banner-text-container">This is a custom banner.</div></div>'
    }
    else {
        innerHTML = '<div class="banner-container error" id="customBanner" style="position:sticky"><div class="banner-text-container">This is a custom banner.</div></div>';
    }
    bannerElement.innerHTML = innerHTML
    headerElement[0].insertAdjacentElement("afterend", bannerElement);
}

export const hideBanner = () => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    const bannerElements = messengerContent.querySelectorAll('#customBanner')
    if (bannerElements) {
        const bannerElement = bannerElements[0]?.firstChild as HTMLDivElement
        bannerElement.classList?.add("banner-container--hide");
        bannerElement.classList?.add("banner-container--hide--delay");
    }
    bannerElements[0].remove();
}

export const showCustomButton = () => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    const buttonElement = messengerContent.getElementById('customButton') as HTMLDivElement
    if (buttonElement) {
        buttonElement.style.display = "block";
    }
    else {
        var existingCloseButton = messengerContent.getElementsByClassName('close-handle');
        const newButtonElement = document.createElement("button")
        newButtonElement.setAttribute("id", "customButton");
        newButtonElement.innerText = "Button";
        newButtonElement.style.backgroundColor = "#fff";
        newButtonElement.style.border = "1px solid #346AFF";
        newButtonElement.style.color = "#346AFF";
        newButtonElement.style.minWidth = "fit-content";
        newButtonElement.style.borderRadius = "4px";
        newButtonElement.style.height= "32px";
        newButtonElement.style.fontWeight= "bold";

        if(existingCloseButton.length > 0){
            existingCloseButton[0].insertAdjacentElement("afterend", newButtonElement);
            newButtonElement.addEventListener("click", function (event) {
                // Custom action here
                console.log("Custom button clicked")
                event?.preventDefault()
            });
        }
    }
}

export const hideCustomButton = () => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    const buttonElement = messengerContent.getElementById('customButton') as HTMLDivElement
    if (buttonElement){
        buttonElement.style.display= "none";
    }
}

export const disablePreviousButtonsInConversation = () => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    const systemMessages = messengerContent.getElementsByClassName('row left-row')
    // Loop through all elements in systemMessages except the last one.
    // All elements will be colored and disabled.
    for (var i = 0; i < systemMessages.length - 1; i++) {
        var buttons = systemMessages[i].getElementsByClassName("btn btn-primary");
        for (var j = 0; j < buttons.length; j++) {
            const button = buttons[j] as HTMLDivElement
            button.style.pointerEvents = "none";
            button.style.backgroundColor = "#d3d3d3";
            button.style.borderColor = "#d3d3d3";
        }
    }
}

// This example requires at least 1 message in the conversation.
export const showTypingIndicator = () => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    var conversationContainer = messengerContent.getElementById("conversation");
    var conversationElements = messengerContent.getElementsByClassName("row");
    var lastConversationElement = conversationElements[conversationElements.length - 1]
    // Create typing indicator element
    var typingIndicatorElement = document.createElement("div")
    typingIndicatorElement.setAttribute('id','typing-indicator-element');
    var agentProfileImageUrl = 'https://www.gravatar.com/avatar/00000000000000000000000000000000.png?s=200&d=mm'
    typingIndicatorElement.innerHTML = '<div class="msg-wrapper" style="display: flex;align-items: center;"><div class="msg-avatar"><img src="' + agentProfileImageUrl + '" class="typing-indicator-avatar"></div><span class="typing-indicator-container fade-in"><div class="typing-indicator typing-indicator-first"><span></span><span></span><span></span></div></span></div>'
    // Add typing indicator element after last conversation element
    lastConversationElement?.insertAdjacentElement("afterend", typingIndicatorElement);
    // Move dropdown below
    conversationContainer?.scrollBy(0, 100);
}

export const hideTypingIndicator = () => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    // Check if typing indicator is existing
    var typingIndicatorElement = messengerContent.getElementById("typing-indicator-element");
    // Remove element if it exists
    if(typingIndicatorElement){
        typingIndicatorElement.remove();
    }
}

export const showCustomLoader = () => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    var conversationContainer = messengerContent.getElementById("conversation");
    var conversationElements = messengerContent.getElementsByClassName("row");
    var lastConversationElement = conversationElements[conversationElements.length - 1]

    var customLoaderElement = messengerContent.getElementById("custom-loader-spinner");
    if (!customLoaderElement) {
        customLoaderElement = document.createElement("div")
        customLoaderElement.setAttribute('id','custom-loader-spinner');
        customLoaderElement.style.border = "3px solid #dddddd";
        customLoaderElement.style.borderTop = "3px solid #346aff";
        customLoaderElement.style.borderBottom = "3px solid #346aff";
        customLoaderElement.style.borderLeft = "3px solid#346aff";
        customLoaderElement.style.borderRadius = "50%";
        customLoaderElement.style.width = "32px";
        customLoaderElement.style.margin = "0 auto";
        customLoaderElement.style.height = "32px";
        const circleSpinning = [
            { transform: 'rotate(0)' },
            { transform: 'rotate(360deg)' }
        ];
        const circleTiming = {
            duration: 800,
            iterations: Infinity,
        }
        customLoaderElement.animate(circleSpinning, circleTiming);

        // Add typing indicator element after last conversation element
        lastConversationElement.insertAdjacentElement("afterend", customLoaderElement);
    }
    
    var loaderTextElement = messengerContent.getElementById("custom-loader-text");
    if (!loaderTextElement) {
        loaderTextElement = document.createElement("div");
        loaderTextElement.innerHTML = 'Loading...'
        loaderTextElement.setAttribute('id','custom-loader-text');
        loaderTextElement.style.textAlign = "center";
        loaderTextElement.style.padding = "10px 12px 0";
        loaderTextElement.style.borderRadius = "20px";
        loaderTextElement.style.color = "#373434";
        loaderTextElement.style.backgroundColor = "#f4f6f8";
        loaderTextElement.style.width = "fit-content";
        loaderTextElement.style.display = "block";
        loaderTextElement.style.justifyContent = "center";
        loaderTextElement.style.paddingBottom = "10px";
        loaderTextElement.style.marginLeft = "auto";
        loaderTextElement.style.marginRight = "auto";
        loaderTextElement.style.marginTop = "30px";
        customLoaderElement.insertAdjacentElement("afterend", loaderTextElement);
    }

    // Move dropdown below
    conversationContainer?.scrollBy(0, 200);
    setTimeout(function () {
        conversationContainer?.scrollBy(0, 200);
    }, 500);
}

export const hideCustomLoader = () => {
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
  
    var waitingForAgentIndicatorElement = messengerContent.getElementById("custom-loader-spinner");
    if (waitingForAgentIndicatorElement) {
        waitingForAgentIndicatorElement.remove();
    }
    var waitingForAgentIndicatorLabelElement = messengerContent.getElementById("custom-loader-text");
    if (waitingForAgentIndicatorLabelElement) {
        waitingForAgentIndicatorLabelElement.remove();
    }
}
`