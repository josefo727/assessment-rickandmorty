<template>
  <div class="col-sm-12 col-md-6 col-lg-4">
    <div class="mb-3 mx-2 character">
      <b-card
        :img-src="character.image"
        img-alt="Character image"
        img-top
      >
        <b-card-title>{{ character.name }}</b-card-title>
        <b-card-text>
          <p>Estado: {{ character.status }}</p>
          <p>Especie: {{ character.species }}</p>
          <p>Género: {{ character.gender }}</p>
          <p>Origen: {{ character.origin.name }}</p>
          <p>Ubicación: {{ character.location.name }}</p>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
