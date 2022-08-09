import { useState, useEffect } from 'react'
import { MD } from '@zendeskgarden/react-typography'
import { Card, Spin } from 'antd'
import { getApps, App } from 'features/conversation'

import * as S from './styles'

export const AppsPage = () => {
    const [apps, setApps] = useState<App[]>([])

    useEffect(() => {
        getApps().then((response) => setApps(response.apps))
    }, [])

    return <S.Container>
        <S.HeaderTitle>Available Apps:</S.HeaderTitle>
        <S.CardsContainer>
            {apps.length === 0 ? <Spin /> : apps.map(app => <Card key={app.id} title={app.displayName} style={{ width: 300 }}><p><b>Id: </b>{app.id}</p></Card>)}
        </S.CardsContainer>
    </S.Container>
}