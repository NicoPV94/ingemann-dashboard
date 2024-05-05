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
            return {
                type: 'line',
                height: '200',
                width: '100%',
                series: [
                    {
                        name: "Total",
                        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
                    },
                    {
                        name: "Nuevos",
                        data: [20, 61, 55, 81, 79, 52, 99, 101, 148]
                    },
                    {
                        name: "Inactivos",
                        data: [0, 10, 20, 15, 30, 13, 18, 17, 7]
                    }
                ],
                chartOptions: {
                    chart: {
                        zoom: {
                            enabled: false
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    grid: {
                        row: {
                            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                            opacity: 0.5
                        },
                    },
                    xaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                    },
                    colors: ['#f1872d', '#21545e', '#dbdde3']
                },
            };
        },
        userTypeChartData() {
            return {
                series: [62, 13],
                width: '100%',
                height: '100%',
                chartOptions: {
                    chart: {
                        type: 'donut',
                        dataLabels: {
                            enabled: true,
                        }
                    },
                    legend: {
                        position: 'bottom'
                    },
                    labels: ['Productor', 'Asesor'],
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }],
                    plotOptions: {
                        pie: {
                            donut: {
                                labels: {
                                    show: true,
                                    name: {
                                        offsetY: 0,
                                    },
                                    total: {
                                        show: true,
                                        showAlways: true,
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        label: `Total de Usuarios`,
                                        color: '#b9b8b9',
                                        formatter: function (w) {
                                            return w.globals.seriesTotals.reduce((a, b) => {
                                                return a + b
                                            }, 0)
                                        }
                                    }
                                }
                            }
                        }
                    },
                    colors: ['#21545e', '#52a237'],
                },
            }
        },
        deptChartData() {
            return [
                {
                    label: 'El Progreso',
                    value: 800
                },
                {
                    label: 'Zacapa',
                    value: 575
                },
                {
                    label: 'Raja Verapaz',
                    value: 450
                },
                {
                    label: 'Retalhuleu',
                    value: 300
                },
                {
                    label: 'Sacatepéquez',
                    value: 200
                },
                {
                    label: 'Jalapa',
                    value: 175
                }
            ]
        },
        brandChartData() {
            return [
                {
                    label: 'Smasung',
                    value: 100
                },
                {
                    label: 'Huawei',
                    value: 30
                },
                {
                    label: 'Motorola',
                    value: 20
                },
                {
                    label: 'Oppo',
                    value: 5
                },
                {
                    label: 'Honor',
                    value: 3
                },
                {
                    label: 'Alcatel',
                    value: 2
                }
            ]
        },
        userGenderChartData() {
            return {
                series: [60, 40],
                width: '100%',
                height: '100%',
                chartOptions: {
                    chart: {
                        type: 'donut',
                        dataLabels: {
                            enabled: true,
                        }
                    },
                    legend: {
                        position: 'bottom'
                    },
                    labels: ['Mujer', 'Hombre'],
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }],
                    plotOptions: {
                        pie: {
                            donut: {
                                labels: {
                                    show: true,
                                    name: {
                                        offsetY: 0,
                                    },
                                    total: {
                                        show: true,
                                        showAlways: true,
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        label: `Total de Usuarios`,
                                        color: '#b9b8b9',
                                        formatter: function (w) {
                                            return w.globals.seriesTotals.reduce((a, b) => {
                                                return a + b
                                            }, 0)
                                        }
                                    }
                                }
                            }
                        }
                    },
                    colors: ['#21545e', '#52a237'],
                },
            }
        },
        ageRangeChartData() {
            return [
                {
                    label: '65',
                    value: 3
                },
                {
                    label: '55 - 64',
                    value: 9
                },
                {
                    label: '45 -  54',
                    value: 16
                },
                {
                    label: '35 - 44',
                    value: 18
                },
                {
                    label: '25 - 34',
                    value: 28
                },
                {
                    label: '18 - 24',
                    value: 26
                }
            ]
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