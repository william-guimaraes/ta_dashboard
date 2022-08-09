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
            .messages-container {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                min-height: calc(100% - 42px);
            }
        `
        docContent.body.prepend(style)
    })
    await window.Smooch.init(smoochConfig)
}

export const MessagesTopUseCase = () => {
    useEffect(() => {
        initSmooch()

        return () => {
            window.Smooch.destroy()
        }
    }, [])

    return <>
        <UsecaseDescription description='This example shows how to render the messages from top to bottom.' />
        <RestartMessengerBtn config={smoochConfig} />
        <CodeContainer>
            {codeExample}
        </CodeContainer>
    </>
}