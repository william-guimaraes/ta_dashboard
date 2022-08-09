import { useEffect } from 'react';
import { Button, Space } from 'antd'
import { RestartMessengerBtn, UsecaseDescription, CodeContainer } from 'components';
import { sendMessage } from 'features/messages';
import { codeExample } from './code-example'
import { addImagesListeners } from './utils'

import './modal.css'

const smoochConfig = {
    integrationId: process.env.REACT_APP_WEBMESSENGER_INTID,
}

const initSmooch = () => {
    window.Smooch.on('widget:opened', () => {
        addImagesListeners(true)
    });

    window.Smooch.on('message:received', (message: any) => {
        if (message.type === 'image') {
            setTimeout(() => {
                addImagesListeners(true)
            }, 400)
        }
    });

    window.Smooch.init(smoochConfig)
}

export const ModalUseCase = () => {
    useEffect(() => {
        initSmooch()

        return () => {
            window.Smooch.destroy()
        }
    }, [])

    return <>
        <UsecaseDescription description='This example shows how to open images on modals rather than on a new tab.' />
        <Space direction="vertical" size="middle">
            <Button onClick={() => sendMessage('image')}>Receive image</Button>
            <RestartMessengerBtn config={smoochConfig} />
        </Space>
        <CodeContainer>
            {codeExample}
        </CodeContainer>
    </>
}