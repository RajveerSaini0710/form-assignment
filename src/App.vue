<template>
  <TheHeader></TheHeader>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
export default {
  components: {
    TheHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
}

body {
  margin: 0;
}
</style>