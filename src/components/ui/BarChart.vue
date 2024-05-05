<template>
    <div class="bar-chart">
        <div v-for="(value, index) in chartData" :key="index" class="bar" :style="{ width: value + '%' }">
            {{ value }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        chartData: {
            type: Array,
            required: true
        },
        barColor: {
            type: String,
            default: '#3498db'
        }
    }
};
</script>

<style scoped>
.bar-chart {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 200px;
    /* Adjust height as needed */
    background-color: #eee;
}

.bar {
    flex: 0 0 auto;
    height: 100%;
    background-color: var(--bar-color, #3498db);
    /* Fallback for missing barColor prop */
    text-align: center;
    line-height: 200px;
    /* Adjust line-height for vertical centering */
    color: #fff;
    font-weight: bold;
    margin: 2px;
    /* Adjust margin for spacing */
}
</style>