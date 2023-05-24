<template>
  <div id="app">
    <is-loading v-if="IsLoading" />
    <toast-component />
    <nav-bar />
    <error-alert />
    <b-container fluid>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ErrorAlert from '@/components/ErrorAlert';
import NavBar from '@/layouts/NavBar';
import IsLoading from '@/components/IsLoading'
import ToastComponent from '@/components/ToastComponent'

export default {
  name: 'App',
  components: {
    NavBar,
    ErrorAlert,
    IsLoading,
    ToastComponent
  },
  data() {
    return {
      sidebarOpen: false
    }
  },
  computed: {
    ...mapGetters({
      IsLoading: 'getIsLoading'
    })
  },
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
