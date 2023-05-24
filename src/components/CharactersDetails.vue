<template>
  <b-container class="custom-container">
    <b-row class="row-details">
      <template v-for="character in characters">
        <character-details :key="character.id" :character="character" />
      </template>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import CharacterDetails from '@/components/CharacterDetails';

export default {
  name: 'CharactersDetails',
  components: {
    CharacterDetails
  },
  created() {
    this.SET_ERROR(null);
    this.fetchCharacters();
  },
  computed: {
    ...mapGetters('charactersDetails', {
      characters: 'getCharacters',
    }),
  },
  methods: {
    ...mapActions('charactersDetails', ['fetchCharacters']),
    ...mapMutations(['SET_ERROR']),
  }
}
</script>

<style scoped>
.row-details {
  display: flex;
  justify-content: space-evenly;
}
.custom-container {
  max-width: 70%;
}
</style>
