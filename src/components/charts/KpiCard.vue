<template>
    <base-card class="ps-2">
        <div class="kpi-label mb-2">
            <div class="icon-container me-2" :style="{ color: kpiData.icon.color }">
                <font-awesome-icon v-if="kpiData.icon" :icon="kpiData.icon.name" :style="{ color: kpiData.icon.color }" />
            </div>
            <span class="kpi-name">{{ kpiData.name }}</span>
        </div>
        <div class="kpi-value ps-2">
            <span class="me-4">{{ kpiData.value }}</span>
            <div class="percent-container" v-if="kpiData.deltaPercent !== 0" :style="{ color: kpiPercentageColor }">
                <font-awesome-icon :icon="kpiPercentageIcon" />
                <span class="delta-percent ms-2">{{ absoluteValue }}%</span>
            </div>
        </div>
    </base-card>
</template>

<script>
export default {
    props: ['kpiData'],
    computed: {
        kpiPercentageIcon() {
            return this.kpiData.deltaPercent > 0 ? 'arrow-up' : 'arrow-down';
        },
        kpiPercentageColor() {
            return this.kpiData.isPositive ? '#4d9f34' : '#e73556';
        },
        absoluteValue() {
            return Math.abs(this.kpiData.deltaPercent);
        },
    }
}
</script>

<style scoped>
.kpi-label {
    display: flex;
    align-items: center;
}

.kpi-label .kpi-name {
    font-weight: 700;
}

.kpi-value {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    font-weight: 800;
    font-size: 1.4rem;
}

.delta-percent {
    font-size: 1rem;
}

.percent-container {
    display: flex;
    align-items: center;
    font-size: 14px;
}

.icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px;
    border-radius: 50%;
    padding: 10px;
    width: 38px;
    height: 38px;
}
</style>