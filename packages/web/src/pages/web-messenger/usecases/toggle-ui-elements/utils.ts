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

const addModalElement = () => {
    // This is something to be customized
    const webMessenger = document.getElementById('web-messenger-container') as HTMLIFrameElement
    const messengerContent = webMessenger.contentDocument as Document
    const container = messengerContent.getElementById('wrapper') as HTMLDivElement

    // Define style
    const modalStyle = document.createElement("style")
    modalStyle.innerHTML = `.modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 9999; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    .modal-content {
        background-color: #fefefe;
        padding: 16px 20px 20px 20px;
        border: 1px solid #888;
        width: 25%; /* Could be more or less, depending on screen size */
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    @media (max-width : 480px) {
        .modal-content {
            background-color: #fefefe;
            padding: 16px 20px 20px 20px;
            border: 1px solid #888;
            width: 80%; /* Could be more or less, depending on screen size */
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .close {
        color: #aaa;
        float: right;
        font-size: 20px;
    }

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }

    .modalTop{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }

    .modalHeader{
        font-size: 20px;
        font-weight: bold;
    }

    .modalContentContainer{
        margin-bottom: 20px;
    }
    `
    messengerContent.head.appendChild(modalStyle);
    
    // Create Modal
    const modalElement = document.createElement("div")
    modalElement.setAttribute("id", "myModal")
    modalElement.setAttribute("class", "modal")
    const modalInnerHTML = `<div class="modal-content">
        <div class="modalTop">
            <span class="modalHeader">Modal Header</span>
            <span class="close">x</span>
        </div>
        <BR>
        <div class="modalContentContainer">
            <span>Modal Text Here</span>
        </div>
    </div>`
    modalElement.innerHTML = modalInnerHTML
    container.prepend(modalElement)
}