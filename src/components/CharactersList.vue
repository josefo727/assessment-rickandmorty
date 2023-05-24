<template>
  <b-container class="custom-container">
    <b-row>
      <template v-for="character in characters">
        <character-component :key="character.id" :character="character" />
      </template>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CharacterComponent from '@/components/CharacterComponent';

export default {
  name: 'CharactersList',
  components: {
    CharacterComponent
  },
  created() {
    this.fetchCharacters();
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  computed: {
    ...mapGetters('charactersList', {
      characters: 'getCharacters',
      charactersRemain: 'getCharactersRemain'
    }),
    ...mapGetters({
      IsLoading: 'getIsLoading'
    })
  },
  methods: {
    ...mapActions('charactersList', ['fetchCharacters']),
    loadMore() {
      if (!this.isLoading) {
        this.fetchCharacters();
      }
    },
    onScroll() {
      if (
        window.innerHeight + Math.ceil(window.scrollY) >= document.body.offsetHeight
      ) {
        this.loadMore();
      }
    }
  }
}
</script>

<style scoped>
.custom-container {
  max-width: 70%;
}
</style>
