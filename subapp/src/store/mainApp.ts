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
        MainApp.setGlobalState && 
        MainApp.setGlobalState(this.store)
    }
}

const mainApp = new MainApp()

export { 
    mainApp, 
    MainApp 
}