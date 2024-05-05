<template>
    <div v-if="theme === 'classic'" class="bar-chart">
        <div v-for="(item, index) in chartData" :key="index" class="d-flex align-items-center w-100">
            <div class="bar"
                :style="{ width: (percentageValue ? item.value : getBarWidth(item.value)) + '%', backgroundColor: getBarColor(index) }">
                <span :style="{ color: labelColor }">{{ item.label }}</span>
            </div>
            <span class="value text-nowrap" :style="{ color: valueLabelColor }">{{ item.value }} <span
                    v-if="percentageValue">%</span></span>
        </div>
    </div>
    <div v-if="theme === 'modern'" class="bar-chart">
        <div v-for="(item, index) in chartData" :key="index" class="d-flex flex-column w-100">
            <div class="d-flex justify-content-between align-items-center w-100 mb-1">
                <span :style="{ color: labelColor }">{{ item.label }}</span>
                <span class="value text-nowrap" :style="{ color: valueLabelColor }">{{ item.value }} <span
                        v-if="percentageValue">%</span></span>
            </div>
            <div class="bar-container">
                <div class="bar"
                    :style="{ width: (percentageValue ? item.value : getBarWidth(item.value)) + '%', backgroundColor: getBarColor(index) }">
                </div>
            </div>
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
        striped: {
            type: Boolean,
            default: false
        },
        primaryColor: {
            type: String,
            default: '#1b5661'
        },
        secondaryColor: {
            type: String,
            default: '#5da73e'
        },
        valueLabelColor: {
            type: String,
            default: '#000000'
        },
        labelColor: {
            type: String,
            default: '#000000'
        },
        percentageValue: {
            type: Boolean,
            default: false
        },
        theme: {
            type: String,
            default: 'classic'
        }
    },
    methods: {
        getBarWidth(value) {
            const maxValue = Math.max(...this.chartData.map(item => item.value));
            return (value / maxValue) * 100;
        },
        getBarColor(index) {
            if (!this.striped) {
                return this.primaryColor;
            }
            return index % 2 === 0 ? this.primaryColor : this.secondaryColor;
        }
    }
};
</script>

<style scoped>
.bar-chart {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 20px
}

.bar-container {
    flex: 0 0 auto auto;
    background-color: #e4eaf1;
    border-radius: 8px;
}

.bar {
    flex: 0 0 auto auto;
    height: auto;
    text-align: left;
    line-height: 30px;
    color: #fff;
    font-weight: bold;
    border-radius: 8px;
    padding: 5px 10px;
}

.value {
    font-weight: 700;
    margin-left: 10px !important;
}
</style>