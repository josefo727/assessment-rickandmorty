import Vue from 'vue'
import Router from 'vue-router'
import CharactersList from './../components/CharactersList'
import CharactersDetails from './../components/CharactersDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CharactersList',
      component: CharactersList
    },
    {
      path: '/detalles-de-los-personajes',
      name: 'CharactersDetails',
      component: CharactersDetails
    }
  ]
})
