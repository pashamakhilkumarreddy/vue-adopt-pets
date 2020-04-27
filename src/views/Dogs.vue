<template>
  <div class="columns is-centered is-vcentered has-text-centered">
    <div class="column is-11">
      <div class="table-container">
        <h1 class="title has-font-weight-bold">Dogs for Adoption</h1>
        <table class="table is-striped is-hovered is-fullwidth" style="padding: 0 2rem;">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Breed</th>
              <th>Species</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Color</th>
              <th>Weight</th>
              <th>Location</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(dog, index) in dogs" :key="index.toString()">
              <th>
                <router-link :to='`pet/dogs/${index}`'>
                  {{ index + 1 }}
                </router-link>
              </th>
              <td>
                {{ dog.name }}
              </td>
              <td>
                {{ dog.breed }}
              </td>
              <td>
                {{ dog.species }}
              </td>
              <td>
                {{ dog.gender }}
              </td>
              <td>
                {{ dog.age }}
              </td>
              <td>
                {{ dog.color }}
              </td>
              <td>
                {{ dog.weight }}
              </td>
              <td>
                {{ dog.location }}
              </td>
              <td>
                {{ dog.notes }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import {
  mapState,
} from 'vuex';

export default {
  name: 'Dogs',
  data() {
    return {
    };
  },
  computed: {
    ...mapState([
      'dogs',
    ]),
  },
};

</script>
