import { observable, computed, action, reaction } from 'mobx'
import _ from 'lodash'
// import { MainStoreModel } from './mainStoreModel'

class MainApp {
    static setGlobalState: Function

    @observable preStore: any = {}
    @observable store: any = {}

    constructor() {}

    @computed 
    get iptValue() {
        return this.store.iptValue
    }

    @action
    initStore(data: any) {
        this.store = data
    }

    @action
    setStore(data: any) {
        const prev = _.cloneDeep(this.store)
        this.store = {
            ...prev,
            ...data
        }
    }
    // 微应用同步状态到主应用
    appReaction = reaction(
        () => this.store,
        store => {
            const nextState = _.cloneDeep(store)
            const prevState = _.cloneDeep(this.preStore)

            if(JSON.stringify(nextState) !== JSON.stringify(prevState)) {
                MainApp.setGlobalState&&MainApp.setGlobalState(nextState)
                this.preStore = nextState
            }
        }
    )
}

const mainApp = new MainApp()
 
export { 
    mainApp, 
    MainApp 
}