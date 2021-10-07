import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Page404 from '../views/Page404'
import AboutTheProfessionalStep1 from '../views/AboutTheProfessionalStep1'
import AboutTheServiceSlep2 from '../views/AboutTheServiceSlep2'
import RegistrationReview from '../views/RegistrationReview'
import RegistrationCompletion from '../views/RegistrationCompletion'

export default new VueRouter({
    linkExactActiveClass: 'active',
    routes: [{
        path: '/',
        component: AboutTheProfessionalStep1,
    }, {
        path: '/sobre-o-atendimento',
        component: AboutTheServiceSlep2
    }, {
        path: '/revisao-do-cadastro',
        component: RegistrationReview,
    }, {
        path: '/conclusao-do-cadastro',
        component: RegistrationCompletion,
    }, {
        path: '*',
        component: Page404,
    }]
})