import { useEffect } from 'react';
import { RestartMessengerBtn, UsecaseDescription, CodeContainer } from 'components';
import { addOnclickListener } from './utils'
import { codeExample } from './code-example';

const smoochConfig = {
    integrationId: process.env.REACT_APP_WEBMESSENGER_INTID
}

const initSmooch = async () => {
    await window.Smooch.init(smoochConfig).then(function () {
        addOnclickListener()
    })
}

export const NewConversationOverrideUseCase = () => {
    useEffect(() => {
        initSmooch()

        return () => {
            window.Smooch.destroy()
        }
    }, [])

    return <>
        <UsecaseDescription description='This example shows how to override the New Conversation button for custom behaviour. In this example, a new empty conversation is forcefully created.' />
        <RestartMessengerBtn config={smoochConfig} />
        <CodeContainer>
            {codeExample}
        </CodeContainer>
    </>
}