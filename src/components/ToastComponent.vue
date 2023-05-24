<template>
  <div d-none>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['toast'])
  },
  methods: {
    ...mapMutations(['CLEAR_TOAST']),
    clearToast() {
      this.CLEAR_TOAST();
    }
  },
  watch: {
    toast: {
      handler() {
        if (this.toast.message) {
          this.$bvToast.toast(this.toast.message, {
            title: this.toast.variant,
            variant: this.toast.variant,
            autoHideDelay: 500000,
            toaster: 'b-toaster-top-right',
            solid: true,
            appendToast: false
          });
        }
      },
      deep: true
    }
  }
}
</script>


<style>
.toast {
   display: block;
}
.toast:not(.show) {
   display: block;
}
</style>
