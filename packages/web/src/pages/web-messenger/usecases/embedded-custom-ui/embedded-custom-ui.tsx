import { useEffect } from 'react';
import { Button, Card } from 'antd'
import { RestartMessengerBtn, UsecaseDescription, CodeContainer } from 'components';
import { addAgentMessage, addUserMessage, sendUserMessage, getConversations, refreshConversations } from './utils'
import { codeExample } from './code-example';

import * as S from './styles'

const smoochConfig = {
    integrationId: process.env.REACT_APP_WEBMESSENGER_INTID,
    embedded: true
}

const initSmooch = () => {
    window.Smooch.init(smoochConfig).then(() => {
        getConversations();
    });
    window.Smooch.render(document.getElementById('chat-container'));

    window.Smooch.on('message:sent', function(message:any, data: any) {
        addUserMessage(data.conversation.id, message.text);
    })

    window.Smooch.on('message:received', function (message: any, data: any) {
        addAgentMessage(data.conversation.id, message.text);
    })

    document.addEventListener('click', (event: any) => {
        if (event.target!.innerText === 'New Conversation') {
            window.Smooch.createConversation().then((_conversation: any) => {
                refreshConversations();
            })
        }
        else if (event.target!.tagName!.toLowerCase() === 'button') {
            sendUserMessage(event.target.id);
        }
    })
}

export const EmbeddedCustomUIUseCase = () => {
    useEffect(() => {
        initSmooch()
        
        return () => {
            window.Smooch.destroy()
        }
    }, [])

    return <S.Container>
        <UsecaseDescription description='This example shows how to build a custom UI while using SunCo Web SDK as a communication layer. This example uses multi-convo, single-convo will be much easier to handle. This example only supports text messages and is very bare bones.' />
        <RestartMessengerBtn config={smoochConfig} />
        <Button type="primary">New Conversation</Button>
        <Card hidden={true} id="chat-container"/>
        <S.ActionsContainer id="conversations-container" />
        <CodeContainer>
            {codeExample}
        </CodeContainer>
    </S.Container>
}
