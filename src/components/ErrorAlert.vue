<template>
  <b-container>
    <div class="m-3">
      <b-alert :show="show" variant="danger">
        {{ error }}
      </b-alert>
    </div>
  </b-container>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'ErrorAlert',
    computed: {
      ...mapGetters({
        error:'getError'
      }),
      show() {
        return !!this.error;
      }
    },
  }
</script>
