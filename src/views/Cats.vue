<template>
  <div class="columns is-centered is-vcentered has-text-centered">
    <div class="column is-11">
      <div class="table-container">
        <h1 class="title has-font-weight-bold">Cats for Adoption</h1>
        <table class="table is-striped is-hoverable is-fullwidth" style="padding: 0 2rem;">
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
            <tr v-for="(cat, index) in cats" :key="index.toString()" >
              <th>
                <router-link :to='`pet/cats/${index}`'>
                  {{ index + 1 }}
                </router-link>
              </th>
              <td>
                {{ cat.name }}
              </td>
              <td>
                {{ cat.breed }}
              </td>
              <td>
                {{ cat.species }}
              </td>
              <td>
                {{ cat.gender }}
              </td>
              <td>
                {{ cat.age }}
              </td>
              <td>
                {{ cat.color }}
              </td>
              <td>
                {{ cat.weight }}
              </td>
              <td>
                {{ cat.location }}
              </td>
              <td>
                {{ cat.notes }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'Cats',
  data() {
    return {
    };
  },
  computed: {
    ...mapState([
      'cats',
    ]),
  },
};

</script>
