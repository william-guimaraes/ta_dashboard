import { useEffect } from 'react';
import { Button, Card } from 'antd'
import { RestartMessengerBtn, UsecaseDescription, CodeContainer } from 'components';
import { showInputField, hideInputField } from './utils'
import { codeExample } from './code-example';

import * as S from './styles'

const smoochConfig = {
    integrationId: process.env.REACT_APP_WEBMESSENGER_INTID,
}

const initSmooch = async () => {
    await window.Smooch.init(smoochConfig)
}

export const ToggleInputFieldUseCase = () => {
    useEffect(() => {
        initSmooch()

        return () => {
            window.Smooch.destroy()
        }
    }, [])

    return <S.Container>
        <UsecaseDescription description='This is an example of showing and hiding the input field.' />
        <RestartMessengerBtn config={smoochConfig} />
        <S.ActionsContainer>
            <Card title="Toggle Input Field">
                <S.ActionCard>
                    <Button type="primary" onClick={() => showInputField()}>Show Input Field</Button>
                    <Button type="primary" onClick={() => hideInputField()}>Hide Input Field</Button>
                </S.ActionCard>
            </Card>
        </S.ActionsContainer>
        <CodeContainer>
            {codeExample}
        </CodeContainer>
    </S.Container>
}
