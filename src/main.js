import { createApp } from 'vue'
import App from './App.vue'
import VueApexCharts from "vue3-apexcharts";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

//Global Components
import BaseCard from './components/ui/BaseCard.vue';
import BaseSelect from './components/ui/BaseSelect.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const app = createApp(App);

/* add icons to the library */
library.add(fas);

app.use(VueApexCharts);

app.component('base-card', BaseCard);
app.component('base-select', BaseSelect);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
