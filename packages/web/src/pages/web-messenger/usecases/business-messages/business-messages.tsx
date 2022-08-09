import { useEffect } from 'react';
import { Button, Card } from 'antd'
import { RestartMessengerBtn, UsecaseDescription } from 'components';
import { sendMessage } from 'features/messages';

import * as S from './styles'

const smoochConfig = {
    integrationId: process.env.REACT_APP_WEBMESSENGER_INTID,
}

const initSmooch = async () => {
    await window.Smooch.init(smoochConfig)
}

export const BusinessUseCase = () => {
    useEffect(() => {
        initSmooch()

        return () => {
            window.Smooch.destroy()
        }
    }, [])

    return <S.Container>
        <UsecaseDescription description='This is an example of the different types of message.' />
        <RestartMessengerBtn config={smoochConfig} />
        <S.ActionsContainer>
            <Card title="Images, Stickers and GIFs">
                <S.ActionCard>
                    <Button type="primary" onClick={() => sendMessage('image')}>Receive image</Button>
                    <Button type="primary" onClick={() => sendMessage('sticker')}>Receive sticker</Button>
                    <Button type="primary" onClick={() => sendMessage('gif')}>Receive GIF</Button>
                </S.ActionCard>
            </Card>
            <Card title="Compound message">
                <S.ActionCard>
                    <Button type="primary">Receive message</Button>
                </S.ActionCard>
            </Card>
            <Card title="Action buttons">
                <S.ActionCard>
                    <Button type="primary" onClick={() => sendMessage('link')}>Link button</Button>
                    <Button type="primary">Webview button</Button>
                    <Button type="primary">Reply button</Button>
                    <Button type="primary">Postback button</Button>
                    <Button type="primary">Buy button</Button>
                    <Button type="primary">Request location button</Button>
                </S.ActionCard>
            </Card>
            <Card title="Carousels and Lists">
                <S.ActionCard>
                    <Button type="primary" onClick={() => sendMessage('carousel')}>Receive carousel</Button>
                    <Button type="primary">Receive list</Button>
                </S.ActionCard>
            </Card>
            <Card title="Form">
                <S.ActionCard>
                    <Button type="primary" onClick={() => sendMessage('form')}>Receive form</Button>
                </S.ActionCard>
            </Card>
            <Card title="CSAT">
                <S.ActionCard>
                    <Button type="primary" onClick={() => sendMessage('csat')}>Receive Custom CSAT</Button>
                </S.ActionCard>
            </Card>
            <Card title="Location">
                <S.ActionCard>
                    <Button type="primary">Receive location</Button>
                </S.ActionCard>
            </Card>
        </S.ActionsContainer>
    </S.Container>
}
