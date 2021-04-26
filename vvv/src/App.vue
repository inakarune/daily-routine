<template>
<div id="app">
  <Nav />
	<router-view></router-view>
</div>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
@font-face {
  font-family: 'Quicksand-Regular';
  src: url(./assets/Quicksand-Regular.ttf);
}
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
  font-family: 'Quicksand-Regular';
  width: 1260px;
  margin: 0 auto;
}
ul {
	list-style-type: none;
  padding: 0;
}
</style>
