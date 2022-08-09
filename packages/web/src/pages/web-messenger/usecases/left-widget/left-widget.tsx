import { useEffect } from 'react';
import { RestartMessengerBtn, UsecaseDescription, CodeContainer } from 'components';
import { codeExample } from './code-example';

const smoochConfig = {
    integrationId: process.env.REACT_APP_WEBMESSENGER_INTID,
}

const initSmooch = async () => {
    window.Smooch.on('ready', () => {
        const iFrameEl = document.getElementById('web-messenger-container') as HTMLIFrameElement
        const docContent = iFrameEl.contentDocument as Document
        const style = document.createElement('style')
        style.innerHTML = `
            #messenger-button {
                right: auto;
                left: 6px;
            }

            .button-display {
                transform-origin: bottom left;
            }
        `
        docContent.body.prepend(style)

        iFrameEl.style.right = 'auto'
        iFrameEl.style.left = '12px'
    })
    await window.Smooch.init(smoochConfig)
}

export const LeftWidgetUseCase = () => {
    useEffect(() => {
        initSmooch()

        return () => {
            window.Smooch.destroy()
        }
    }, [])

    return <>
        <UsecaseDescription description='This example shows how to render the web messenger on the left side of the screen.' />
        <RestartMessengerBtn config={smoochConfig} />
        <CodeContainer>
            {codeExample}
        </CodeContainer>
    </>
}