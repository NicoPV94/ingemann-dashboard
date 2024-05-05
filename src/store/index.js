import { createStore } from 'vuex';
import getters from './getters.js'

const store = createStore({
    state() {
        return {
            lineChartData: {
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
            },
            userTypeChartData: {
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
                }
            },
            deptChartData: [
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
            ],
            brandChartData: [
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
            ],
            userGenderChartData: {
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
            },
            ageRangeChartData: [
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
        }
    },
    getters: getters
});

export default store;