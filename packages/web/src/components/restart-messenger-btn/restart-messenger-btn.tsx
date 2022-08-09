import { Button } from 'antd'

import * as S from './styles'

interface Props {
    config: any
}

export const restartWebMessenger = (smoochConfig: any) => {
    localStorage.clear()
    window.Smooch.destroy()
    window.Smooch.init(smoochConfig);
}

export const RestartMessengerBtn = ({ config }: Props) => <S.RestartButton>
    <Button onClick={() => restartWebMessenger(config)} type="primary" ghost>Restart Web Messenger</Button>
</S.RestartButton>