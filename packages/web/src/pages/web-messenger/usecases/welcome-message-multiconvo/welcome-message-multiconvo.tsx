import { useEffect } from 'react';
import { RestartMessengerBtn, UsecaseDescription, CodeContainer } from 'components';
import { addMessengerWelcomeEvent } from './utils'
import { codeExample } from './code-example';

const smoochConfig = {
    integrationId: process.env.REACT_APP_WEBMESSENGER_INTID,
}

const initSmooch = async () => {
    window.Smooch.on('ready', () => {
        addMessengerWelcomeEvent()
    })
    await window.Smooch.init(smoochConfig)
}

export const WelcomeMulticonvoUseCase = () => {
    useEffect(() => {
        initSmooch()

        return () => {
            window.Smooch.destroy()
        }
    }, [])

    return <>
        <UsecaseDescription description='This example shows how to add a introductory message on top of the conversation when multi convo is enabled.' />
        <RestartMessengerBtn config={smoochConfig} />
        <CodeContainer>
            {codeExample}
        </CodeContainer>
    </>
}