<template>
<div>
  <b-navbar class="px-2" toggleable="lg" type="dark" variant="info">
    <router-link class="link-logo" :to="{name: 'CharactersList'}">
      <img class="logo" alt="Rick and Morty" src="/logo.png" />
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link :to="{name: 'CharactersList'}" tag="b-nav-item" active-class="active" exact>Lista de Personajes</router-link>
        <router-link :to="{name: 'CharactersDetails'}" tag="b-nav-item" active-class="active">Detalles de Personajes</router-link>
      </b-navbar-nav>
    </b-collapse>

    <b-navbar-nav v-if="$route.path === '/'" class="ml-auto">
      <b-nav-item href="#" @click.prevent="CLEAR_CHARACTERS_IDS">
        <strong>Limpiar selección</strong>
      </b-nav-item>
    </b-navbar-nav>

  </b-navbar>
</div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: 'NavBar',
  data() {
    return {
      sidebarOpen: false
    }
  },
  methods: {
    ...mapMutations(['CLEAR_CHARACTERS_IDS'])
  },
}
</script>

<style>
.logo {
  height: 30px;
  margin-right: 10px;
}
.active {
  font-weight: bold;
}
@media screen and (max-width: 991px) {
  .link-logo {
    display: none;
  }
}
</style>
