<template>
  <div class="columns is-centered is-vcentered">
    <div class="column is-10">
      <div class="card">
        <div class="card-content">
          <p class="title">
            Name: {{ animal.name | capitalize }}
          </p>
          <p class="subtitle">
            Breed: {{ animal.breed | capitalize }}
          </p>
          <p class="subtitle">
            Gender: {{ animal.gender | capitalize }}
          </p>
          <p class="subtitle">
            Age: {{ animal.age }}
          </p>
          <p class="subtitle">
            Color: {{ animal.color }}
          </p>
          <p class="subtitle">
            Weight: {{ animal.weight }}
          </p>
          <p class="subtitle">
            Location: {{ animal.location }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  mapState,
} from 'vuex';

export default {
  name: 'Pet',
  data() {
    return {
      animal: {},
    };
  },
  mounted() {
    this.animal = this[this.$route.params.species][this.$route.params.id];
  },
  computed: {
    ...mapState([
      'cats',
      'dogs',
    ]),
  },
  filters: {
    capitalize(value) {
      if (!value) return '';
      return value.toString().slice(0, 1).toUpperCase() + value.slice(1);
    },
  },
  methods: {},
};

</script>
