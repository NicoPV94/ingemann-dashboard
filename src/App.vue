<template>
  <UsersDashboard />
</template>

<script>
import UsersDashboard from './components/pages/UsersDashboard.vue';

export default {
  name: 'App',
  components: {
    UsersDashboard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

/*
  1. Use a more-intuitive box-sizing model.
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}

/*
  2. Remove default margin
*/
*,
p {
  margin: 0 !important;
}

/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/
body {
  margin: 30px !important;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/*
  5. Improve media defaults
*/
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

/*
  6. Remove built-in form typography styles
*/
input,
button,
textarea,
select {
  font: inherit;
}

.apexcharts-legend {
  margin-top: 50px;
  gap: 20px;
}

.im-input {
  border: 1px solid #ccc;
  border-radius: 4px;
}

.card-title {
    font-weight: 800;
}
</style>
