<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a href="#" class="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>

        <a role="button" :class="['navbar-burger', 'burger', { 'is-active': isNavbarBurgerOpen }]"
          aria-label="menu" aria-expanded="false" data-target="main-navbar"
          @click="toggleNavbarBurger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div :class="{ 'navbar-menu': true, 'is-active': isNavbarBurgerOpen }"
      id="main-navbar" style="margin-right: 1rem">
        <div class="navbar-end">
          <router-link to="/" class="navbar-item">
            Home
          </router-link>
          <router-link to="/cats" class="navbar-item">
            Cats
          </router-link>
          <router-link to="/dogs" class="navbar-item">
            Dogs
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped>
header {
  border-bottom: 1px solid #f7f7f7;
  box-shadow: 0 0 0.6rem 0 rgba(0, 0, 0, 0.3);
}
</style>
<script>
export default {
  name: 'Header',
  data() {
    return {
      isNavbarBurgerOpen: false,
    };
  },
  methods: {
    toggleNavbarBurger() {
      this.isNavbarBurgerOpen = !this.isNavbarBurgerOpen;
    },
  },
};

</script>
