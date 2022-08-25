import { useEffect } from 'react';
import { RestartMessengerBtn, UsecaseDescription, CodeContainer } from 'components';
import { modifyTypingIndicator, modifyConversationList, triggerMutationObserver } from './utils'
import { codeExample } from './code-example';

const smoochConfig = {
    integrationId: process.env.REACT_APP_WEBMESSENGER_INTID,
    delegate: {
        beforeDisplay(message: any, _data: any) {
            if (message.role === 'business') {
                message.displayName = 'agentName'
                message.avatarUrl = 'https://www.gravatar.com/avatar/00000000000000000000000000000000.png?s=200&d=mm'
            }
            return message;
        }
    }
}

const initSmooch = async () => {
    await window.Smooch.init(smoochConfig).then(function () {
        triggerMutationObserver()
    })

    window.Smooch.on('typing:start', function(_data: any) {
        modifyTypingIndicator()
    })

    window.Smooch.on('message:received', function (_message: any, _data: any) {
        modifyConversationList();
    })
}

export const HideAgentNameUseCase = () => {
    useEffect(() => {
        initSmooch()

        return () => {
            window.Smooch.destroy()
        }
    }, [])

    return <>
        <UsecaseDescription description='This example shows how to hide an agent name in typing indicator and conversation list.' />
        <RestartMessengerBtn config={smoochConfig} />
        <CodeContainer>
            {codeExample}
        </CodeContainer>
    </>
}