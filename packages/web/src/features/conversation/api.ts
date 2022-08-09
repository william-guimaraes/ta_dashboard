import { axios } from 'lib/axios'
import { GetAppsDTO } from './types'

export const getApps = async (): Promise<GetAppsDTO> => await axios.get('/apps')
