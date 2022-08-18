import { Routes, Route } from "react-router-dom"
import { HomePage, AppsPage, WebMessengerPage } from 'pages'
import {
    DefaultUseCase,
    BusinessUseCase,
    WelcomeMulticonvoUseCase,
    ModalUseCase,
    LeftWidgetUseCase,
    MessagesTopUseCase,
    ToggleInputFieldUseCase
} from "pages/web-messenger/usecases"

export const routes = {
    home: '/',
    apps: '/apps',
    messenger: {
        index: '/messenger',
        welcome_multi: 'welcome-multi',
        business: 'business',
        modal: 'modal',
        left_widget: 'left-widget',
        top_messages: 'top_messages',
        toggle_input_field: 'toggle-input-field'
    }
}

export const AppRoutes = () => <Routes>
    <Route path={routes.home} element={<HomePage />} />
    <Route path={routes.apps} element={<AppsPage />} />
    <Route path={routes.messenger.index} element={<WebMessengerPage />}>
        <Route path="" element={<DefaultUseCase />} />
        <Route path={routes.messenger.welcome_multi} element={<WelcomeMulticonvoUseCase />} />
        <Route path={routes.messenger.business} element={<BusinessUseCase />} />
        <Route path={routes.messenger.modal} element={<ModalUseCase />} />
        <Route path={routes.messenger.left_widget} element={<LeftWidgetUseCase />} />
        <Route path={routes.messenger.top_messages} element={<MessagesTopUseCase />} />
        <Route path={routes.messenger.toggle_input_field} element={<ToggleInputFieldUseCase />} />
    </Route>
</Routes>