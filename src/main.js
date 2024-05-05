import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'

//ApexCharts
import VueApexCharts from "vue3-apexcharts";

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Fontawesome
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

//Vue Datepicker
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

//Global Components
import BaseCard from './components/ui/BaseCard.vue';
import BaseSelect from './components/ui/BaseSelect.vue';


const app = createApp(App);

/* add icons to the library */
library.add(fas);

app.use(VueApexCharts);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-select', BaseSelect);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('vue-datepicker', VueDatePicker);

app.mount('#app');
