import { App, Plugin } from 'vue'
import Layout from './layout'

Layout.install = function (app : App){
    app.component(Layout.Header.name ,Layout.Header)
}
export default Layout as typeof Layout & Plugin
