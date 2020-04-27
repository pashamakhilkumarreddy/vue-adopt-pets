<template>
  <div class="columns is-centered is-vcentered has-text-centered home">
    <div class="column is-10">
      <h1 class="title has-text-weight-bold">Adopt a new best friend.</h1>
      <h3 class="is-3 has-text-weight-bold">Total Animals: {{ getAllAnimals }} </h3>
      <h3 class="is-3 has-text-weight-bold">Total Dogs: {{ getDogs.length }}</h3>
      <h3 class="is-3 has-text-weight-bold" style="margin-bottom: 1rem; ">
        Total Cats: {{ getCats.length }}
      </h3>
      <button class="button is-primary is-light" @click.prevent="togglePetForm">
        Add a new pet
      </button>
      <form action="" v-if="!showPetForm" class="mt-6 has-text-left" style="margin: 0 2rem;">
        <div class="field">
          <label for="name" class="label">Name</label>
          <div class="control">
            <input id="name" type="text" class="input" v-model="animal.name"
              placeholder="Please enter the name of the animal" />
          </div>
        </div>
        <div class="field is-flex">
          <div class="control is-flex">
            <label for="dog" class="label" style="padding-right: 1rem;">
              <input id="dog" type="radio" value="dogs" name="animalSpecies"
                v-model="animal.species" />
              Dog
            </label>
            <label id="cat" class="label">
              <input id="cat" type="radio" value="cats" name="animalSpecies"
                v-model="animal.species" />
              Cat
            </label>
          </div>
        </div>
        <div class="field">
          <label for="age" class="label">Age</label>
          <div class="control">
            <input id="age" type="text" class="input" v-model="animal.age"
              placeholder="Please enter the animal's age" />
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click.prevent="addNewPet">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light" @click.prevent="resetForm">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
  form {
    padding: 3rem;
    border: 1px solid #ddd;
    border-radius: 0.7rem;
    box-shadow: 0 0 0.4rem 0 rgba(0, 0, 0, 0.3);
  }
</style>
<script>
import {
  mapActions,
  mapGetters,
} from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      showPetForm: false,
      animal: {
        name: '',
        species: 'dogs',
        age: null,
      },
    };
  },
  computed: {
    ...mapGetters([
      'getAllAnimals',
      'getCats',
      'getDogs',
    ]),
  },
  methods: {
    ...mapActions([
      'addPet',
    ]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    addNewPet() {
      const {
        species,
        name,
        age,
      } = this.animal;
      if (species && name && age) {
        const payload = {
          species,
          pet: {
            name,
            age: parseInt(age, 10),
          },
        };
        this.addPet(payload);
      }
      this.resetForm();
    },
    resetForm() {
      this.animal = {
        name: '',
        species: null,
        age: null,
      };
    },
  },
};

</script>
