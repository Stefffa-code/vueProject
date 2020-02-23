import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import  { faUserSecret, faHouseDamage, faFire, faFilm, faBoxes, faHistory, faClock, faThumbsUp, faBell, faVideo, faTh, faBars} from '@fortawesome/free-solid-svg-icons'

library.add( faUserSecret, faHouseDamage, faFire, faFilm, faBoxes, faHistory, faClock, faThumbsUp, faBell, faVideo, faTh, faBars )
Vue.component('fa-icon', FontAwesomeIcon)




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
