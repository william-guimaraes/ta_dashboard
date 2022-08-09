import { BrowserRouter } from "react-router-dom";
import { ReactComponent as MenuTrayIcon } from '@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg';
import { ReactComponent as PersonIcon } from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';
import {
  Chrome,
  Body,
  Content,
  Header,
  HeaderItem,
  HeaderItemIcon,
  HeaderItemText,
  Main,
  SkipNav
} from '@zendeskgarden/react-chrome';
import { AppRoutes } from 'routes';
import { Navbar } from './components/navbar'
import 'antd/dist/antd.css'

const App = () => (<Chrome isFluid style={{ minHeight: '100vh', minWidth: 600 }}>
  <BrowserRouter>
    <SkipNav targetId="example-main-content">Skip to main content</SkipNav>
    <Navbar />
    <Body hasFooter>
      <Header>
        <HeaderItem>
          <HeaderItemIcon>
            <MenuTrayIcon />
          </HeaderItemIcon>
          <HeaderItemText isClipped>Products</HeaderItemText>
        </HeaderItem>
        <HeaderItem isRound>
          <HeaderItemIcon>
            <PersonIcon />
          </HeaderItemIcon>
          <HeaderItemText isClipped>User</HeaderItemText>
        </HeaderItem>
      </Header>
      <Content id="example-main-content" style={{ height: '100%' }}>
        <Main style={{ padding: 28 }}>
          <AppRoutes />
        </Main>
      </Content>
    </Body>
  </BrowserRouter>
</Chrome>)

export default App;
