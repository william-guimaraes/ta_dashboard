import { useEffect } from 'react';
import { Button, Card } from 'antd'
import { RestartMessengerBtn, UsecaseDescription, CodeContainer } from 'components';
import { appendFirstMessage, appendLastMessage } from './utils'
import { codeExample } from './code-example';

import * as S from './styles'

const smoochConfig = {
    integrationId: process.env.REACT_APP_WEBMESSENGER_INTID,
}

const initSmooch = async () => {
    await window.Smooch.init(smoochConfig)
}

export const MockMessagesUseCase = () => {
    useEffect(() => {
        initSmooch()

        return () => {
            window.Smooch.destroy()
        }
    }, [])

    return <S.Container>
        <UsecaseDescription description='This is an example of adding dummy messages in the conversation. Messages are only added as display and are not real messages. Each message will have its own avatar and displayName regardless of the number of consecutive messages, no timestamps are included.' />
        <RestartMessengerBtn config={smoochConfig} />
        <S.ActionsContainer>
            <Card title="Add Dummy Agent Messages">
                <S.ActionCard>
                    <Button type="primary" onClick={() => appendFirstMessage(true)}>Add Agent message to Start of conversation</Button>
                    <Button type="primary" onClick={() => appendLastMessage(true)}>Add Agent message to End of conversation</Button>
                </S.ActionCard>
            </Card>
            <Card title="Add Dummy User Messages">
                <S.ActionCard>
                    <Button type="primary" onClick={() => appendFirstMessage(false)}>Add User message to Start of conversation</Button>
                    <Button type="primary" onClick={() => appendLastMessage(false)}>Add User message to End of conversation</Button>
                </S.ActionCard>
            </Card>
        </S.ActionsContainer>
        <CodeContainer>
            {codeExample}
        </CodeContainer>
    </S.Container>
}
