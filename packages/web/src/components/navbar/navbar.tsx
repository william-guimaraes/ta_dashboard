import { useNavigate, useLocation } from "react-router-dom";
import { PALETTE } from '@zendeskgarden/react-theming';
import { ReactComponent as ProductIcon } from '@zendeskgarden/svg-icons/src/26/garden.svg';
import { ReactComponent as HomeIcon } from '@zendeskgarden/svg-icons/src/26/home-fill.svg';
import { ReactComponent as MonitorIcon } from '@zendeskgarden/svg-icons/src/26/monitor.svg';
import { ReactComponent as ZendeskIcon } from '@zendeskgarden/svg-icons/src/26/zendesk.svg';
import { ReactComponent as AppIcon } from '@zendeskgarden/svg-icons/src/26/app.svg';
import {
  Nav,
  NavItem,
  NavItemIcon,
  NavItemText,
} from '@zendeskgarden/react-chrome';
import { routes } from "routes"

export const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Nav>
      <NavItem hasLogo>
        <NavItemIcon>
          <ProductIcon style={{ color: PALETTE.green[400] }} />
        </NavItemIcon>
        <NavItemText>Zendesk Garden</NavItemText>
      </NavItem>
      <NavItem isCurrent={location.pathname === routes.home} onClick={() => {
        navigate(routes.home)
      }}>
        <NavItemIcon>
          <HomeIcon />
        </NavItemIcon>
        <NavItemText>Home</NavItemText>
      </NavItem>
      <NavItem
        isCurrent={location.pathname === routes.apps}
        onClick={() => {
          navigate(routes.apps)
        }}
      >
        <NavItemIcon>
          <AppIcon />
        </NavItemIcon>
        <NavItemText>Apps</NavItemText>
      </NavItem>
      <NavItem
        isCurrent={location.pathname.includes(routes.messenger.index)}
        onClick={() => {
          navigate(routes.messenger.index)
        }}>
        <NavItemIcon>
          <MonitorIcon />
        </NavItemIcon>
        <NavItemText>Web Messenger</NavItemText>
      </NavItem>
      <NavItem hasBrandmark title="Zendesk">
        <NavItemIcon>
          <ZendeskIcon />
        </NavItemIcon>
        <NavItemText>Zendesk</NavItemText>
      </NavItem>
    </Nav>
  )
}