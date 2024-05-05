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

*,
*::before,
*::after {
  box-sizing: border-box;
}

*,
p {
  margin: 0 !important;
}


body {
  margin: 30px !important;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}


img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

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

.dp__main {
    width: auto!important;
}

.dp-custom-input {
    border: solid 1px #21545e!important;
    border-radius: 10px!important;
    color: #21545e!important;
}
</style>
