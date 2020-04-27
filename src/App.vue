<template>
  <div id="app">
    <Header />
      <main class="container mt-6">
        <router-view />
      </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
*, *::after, *::before {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-size: 16px !important;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  position: relative;
  min-height: 100vh;
}

.mt-6 {
  margin-top: 3rem !important;
}

.m-auto {
  margin: auto;
}
</style>
