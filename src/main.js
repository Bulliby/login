import App from './Vue/App.vue'
import { createApp } from 'vue'
import { registerPlugins } from './plugins'

const app = createApp(App)

import apiRequester from 'L/ApiRequester'
import getConsts from 'L/consts'

app.config.globalProperties.$apiRequester = new apiRequester('http://backend.belote.test')
app.config.globalProperties.$getConst =  getConsts

registerPlugins(app)

app.mount('#app')
