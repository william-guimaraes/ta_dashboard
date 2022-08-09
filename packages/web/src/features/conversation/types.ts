export interface AppSettings {
    maskCreditCardNumbers: boolean
    useAnimalNames: boolean
    echoPostback: boolean
    multiConvoEnable: boolean
}

export type AppMetadata = Record<string, string>

export interface App {
    id: string
    displayName: string
    settings: AppSettings
    metadata?: AppMetadata
}

interface GetAppMeta {
    hasMore: boolean
}

export interface GetAppsDTO {
    apps: App[]
    meta: GetAppMeta
} 

declare global {
    interface Window { 
        Smooch: any
    }
}

window.Smooch = window.Smooch || {};