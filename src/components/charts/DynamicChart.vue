<template>
    <apexchart :width="chartData.width ?? '100%'" :height="chartData.height" :type="chartData.type" :options="chartData.chartOptions" :series="chartData.series">
    </apexchart>
</template>

<script>
export default {
    props: ['chartData']
}
</script>