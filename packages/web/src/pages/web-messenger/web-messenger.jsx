import { useEffect, useState } from 'react'
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { Select } from 'antd';
import { XXL } from '@zendeskgarden/react-typography';
import { routes } from 'routes'

import * as S from './styles'

const { Option } = Select;

export const WebMessengerPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [useCase, setUseCase] = useState("")

  const handleSelectChange = (value) => {
    if(value === '') {
      navigate('/messenger')
      setUseCase("")
    } else {
      navigate(value)
      setUseCase(value)
    }
  }

  useEffect(() => {
    const initialUseCase = location.pathname.split("/")[2]
    if(initialUseCase) {
      handleSelectChange(initialUseCase)
    }
  }, [])

  return (
        <S.Container>
          <XXL>Web Messenger</XXL>
          <S.Selector>
            <S.SubHeader>Select your use case example:</S.SubHeader>
            <Select defaultValue="" value={useCase} style={{ minWidth: 280 }} onChange={handleSelectChange}>
              <Option value="">Select an use case</Option>
              <Option value={routes.messenger.welcome_multi}>Welcome for Multi Convo message</Option>
              <Option value={routes.messenger.business}>Business messages</Option>
              <Option value={routes.messenger.modal}>Images on modal</Option>
              <Option value={routes.messenger.left_widget}>Custom CSS - Left Widget</Option>
              <Option value={routes.messenger.top_messages}>Custom CSS - Top to Bottom Messages</Option>
            </Select>
          </S.Selector>
          <S.ActionsContainer>
            <Outlet />
          </S.ActionsContainer>
        </S.Container>
    )
}