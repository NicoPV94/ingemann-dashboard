<template>
    <div class="d-flex justify-content-between align-items-center w-100 mb-1">
        <h2 class="page-title">Usuarios</h2>
        <input type="date" class="im-input p-1">
    </div>
    <hr class="mb-5">

    <div class="row mb-4">
        <base-card class="col-8 me-4 d-flex flex-column">
            <base-select :options="selectOptions" v-model="selectedOption" class="mb-3"></base-select>
            <div class="kpi-container mb-4">
                <kpi-card v-for="kpi in kpis" :key="kpi.name" :kpi-data="kpi"></kpi-card>
            </div>
            <dynamic-chart :chart-data="lineChartData"></dynamic-chart>
        </base-card>

        <base-card class="col d-flex flex-column align-items-center" :title="'Tipos de Usuario'">
            <dynamic-chart class="mt-5" :chart-data="userTypeChartData"></dynamic-chart>
        </base-card>
    </div>

    <div class="row mb-4">
        <base-card class="col-8 me-4 d-flex flex-column" :title="'Departamentos con más usuarios activos'">
            <base-select :options="selectOptions" v-model="selectedOption" class="mb-3"></base-select>
            <bar-chart :chart-data="deptChartData" :striped="true" label-color="#ffffff"
                value-label-color="#1b5661"></bar-chart>
                <p></p>
        </base-card>
        <base-card class="col d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h6 class="card-title">Dispositivos más utilizados</h6>
                <base-select :options="selectOptions" v-model="selectedOption" class="col-4"></base-select>
            </div>
            <bar-chart :chart-data="brandChartData" :percentage-value="true" theme="modern"></bar-chart>
        </base-card>
    </div>

    <div class="row">
        <base-card class="col me-4 d-flex flex-column align-items-center" :title="'Género'">
            <dynamic-chart class="mt-5" :chart-data="userGenderChartData"></dynamic-chart>
        </base-card>
        <base-card class="col-8" :title="'Rango de Edades'">
            <bar-chart :chart-data="ageRangeChartData" :striped="true" :percentage-value="true" label-color="#ffffff"
                value-label-color="#1b5661"></bar-chart>
        </base-card>
    </div>
</template>

<script>
import DynamicChart from '../charts/DynamicChart.vue';
import KpiCard from '../charts/KpiCard.vue';
import BarChart from '../charts/BarChart.vue';

export default {
    components: {
        DynamicChart,
        KpiCard,
        BarChart
    },
    data() {
        return {
            kpis: [
                {
                    name: 'Total',
                    value: 2500,
                    deltaPercent: 3,
                    isPositive: true,
                    icon: {
                        name: 'user',
                        color: '#f18931'
                    }
                },
                {
                    name: 'Nuevos',
                    value: 12,
                    deltaPercent: -3,
                    isPositive: false,
                    icon: {
                        name: 'user-plus',
                        color: '#5aa645'
                    }
                },
                {
                    name: 'Inactivos',
                    value: 5,
                    deltaPercent: -3,
                    isPositive: false,
                    icon: {
                        name: 'user-slash',
                        color: '#a4a6b7'
                    }
                }
            ],
            selectedOption: null,
            selectOptions: [
                { value: 'option1', icon: 'user', text: 'Usuarios' },
                { value: 'option2', icon: 'map', text: 'Departamentos' },
                { value: 'option3', icon: 'copyright', text: 'Marca' },
            ],
        }
    },
    computed: {
        lineChartData() {
            return this.$store.getters.lineChartData;
        },
        userTypeChartData() {
            return this.$store.getters.userTypeChartData;
        },
        deptChartData() {
            return this.$store.getters.deptChartData;
        },
        brandChartData() {
            return this.$store.getters.brandChartData;
        },
        userGenderChartData() {
            return this.$store.getters.userGenderChartData;
        },
        ageRangeChartData() {
            return this.$store.getters.ageRangeChartData;
        },
    }
}
</script>

<style scoped>
.page-title {
    margin: 0;
}

.page-row {
    display: flex;
}

.kpi-container {
    display: flex;
    gap: 25px;
}
</style>