import { StorageFactory } from '@gm-common/tool'

const LocalStorage = new StorageFactory('_gm-mobile_', window.localStorage)
const SessionStorage = new StorageFactory('_gm-mobile_', window.sessionStorage)

export { LocalStorage, SessionStorage }
export default LocalStorage