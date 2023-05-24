<template>
  <div class="col-sm-12 col-md-4 col-lg-3 col-xl-2 mx-0 px-1">
    <div class="mb-3 mx-0 character" @click="selectCharacter">
      <b-card
        :img-src="character.image"
        img-alt="Character image"
        img-top
        :class="{ 'is-selected': isSelected }"
      >
        <b-card-title class="card-title">{{ character.name }}</b-card-title>
        <b-card-text class="card-text">
          Especie: {{ character.species }}
        </b-card-text>
    </b-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'CharacterComponent',
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      charactersIds: 'getCharantersIds',
    }),
    isSelected() {
      return this.charactersIds.includes(this.character.id);
    }
  },
  methods: {
    ...mapActions(['updateCharactersIds']),
    ...mapMutations(['UNSELECT_CHARACTER']),
    selectCharacter() {
      this.isSelected 
        ? this.UNSELECT_CHARACTER(this.character.id)
        : this.updateCharactersIds(this.character.id);
    }
  },
}
</script>

<style scoped>
.character {
  cursor: pointer;
}
.is-selected {
  background: #00ffff38;
}
.card-title {
  font-size: 1.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card-text {
  font-size: .95rem;
}
</style>
