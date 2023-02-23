import { useEffect } from 'react';
import { Button, Card } from 'antd'
import { RestartMessengerBtn, UsecaseDescription, CodeContainer } from 'components';
import { showInputField, hideInputField, showModal, showCustomButton, hideCustomButton, showBanner, hideBanner, disablePreviousButtonsInConversation, showTypingIndicator, hideTypingIndicator } from './utils'
import { codeExample } from './code-example';

import * as S from './styles'

const smoochConfig = {
    integrationId: process.env.REACT_APP_WEBMESSENGER_INTID,
}

const initSmooch = async () => {
    await window.Smooch.init(smoochConfig)
}

export const ToggleUIElementsUseCase = () => {
    useEffect(() => {
        initSmooch()

        return () => {
            window.Smooch.destroy()
        }
    }, [])

    return <S.Container>
        <UsecaseDescription description='This is an example of showing and hiding different UI components on the web widget.' />
        <RestartMessengerBtn config={smoochConfig} />
        <S.ActionsContainer>
            <Card title="Toggle Input Field">
                <S.ActionCard>
                    <Button type="primary" onClick={() => showInputField()}>Show Input Field</Button>
                    <Button type="primary" onClick={() => hideInputField()}>Hide Input Field</Button>
                </S.ActionCard>
            </Card>
            <Card title="Toggle Custom Modal">
                <S.ActionCard>
                    <Button type="primary" onClick={() => showModal()}>Show Custom Modal</Button>
                </S.ActionCard>
            </Card>
            <Card title="Toggle Custom Button">
                <S.ActionCard>
                    <Button type="primary" onClick={() => showCustomButton()}>Show Button</Button>
                    <Button type="primary" onClick={() => hideCustomButton()}>Hide Button</Button>
                </S.ActionCard>
            </Card>
            <Card title="Toggle Banner [In Conversation]">
                <S.ActionCard>
                    <Button type="primary" onClick={() => showBanner(false)}>Show Error Banner</Button>
                    <Button type="primary" onClick={() => showBanner(true)}>Show Success Banner</Button>
                    <Button type="primary" onClick={() => hideBanner()}>Hide Banner</Button>
                </S.ActionCard>
            </Card>
            <Card title="Toggle Past Buttons [In Conversation]">
                <S.ActionCard>
                    <Button type="primary" onClick={() => disablePreviousButtonsInConversation()}>Disable Postback Buttons</Button>
                    <Button type="primary" onClick={() => window.location.reload()}>Enable Postback Buttons [Restart/Refresh]</Button>
                </S.ActionCard>
            </Card>
            <Card title="Toggle Loading Indicator [In Conversation]">
                <S.ActionCard>
                    <Button type="primary" onClick={() => showTypingIndicator()}>Show Typing Indicator</Button>
                    <Button type="primary" onClick={() => hideTypingIndicator()}>Hide Typing Indicator</Button>
                </S.ActionCard>
            </Card>
        </S.ActionsContainer>
        <CodeContainer>
            {codeExample}
        </CodeContainer>
    </S.Container>
}
