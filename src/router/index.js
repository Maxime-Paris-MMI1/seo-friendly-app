import Vue from 'vue'
import Router from 'vue-router'
import France from '@/components/France.vue'
import Culture from '@/components/Culture.vue'
import Geographie from '@/components/Geographie.vue'
import Histoire from '@/components/Histoire.vue'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'France', component: France },
    { path: '/culture', name: 'Culture', component: Culture },
    { path: '/geographie', name: 'Geographie', component: Geographie },
    { path: '/histoire', name: 'Histoire', component: Histoire },
  ]
})
