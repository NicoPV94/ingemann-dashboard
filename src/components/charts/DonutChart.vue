<template>
    <div class="donut-chart">
      <svg :width="size" :height="size" viewBox="0 0 100 100">
        <circle
          class="donut-background"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#ddd"
          stroke-width="10"
        />
        <g ref="sliceGroup">
          </g>
        <g ref="legendGroup" class="legend">
          </g>
        <text class="chart-center" :x="size / 2" :y="size / 2">{{ centerText }}</text>
      </svg>
    </div>
  </template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
      validator(val) {
        return val.length === this.data.length;
      },
    },
    colors: {
      type: Array,
      default: () => ['#f00', '#0f0', '#00f'],
    },
    centerText: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 200,
    },
  },
  computed: {
    totalValue() {
      return this.data.reduce((acc, cur) => acc + cur, 0);
    },
    slicePaths() {
      const totalAngle = 2 * Math.PI;
      return this.data.map((value, index) => {
        const angle = (value / this.totalValue) * totalAngle;
        const startAngle = index === 0 ? 0 : this.slicePaths[index - 1].endAngle;
        const endAngle = startAngle + angle;
        const largeArcFlag = angle > Math.PI ? 1 : 0;

        const d = `
          M 50,50
          L ${this.getPoint(50, 45, startAngle)}
          A 45,45 0 ${largeArcFlag},1 ${this.getPoint(50, 45, endAngle)}
          Z
        `;

        return { d, startAngle, endAngle };
      });
    },
    legendItems() {
      return this.data.map((value, index) => ({
        label: this.labels[index],
        color: this.colors[index % this.colors.length],
        value,
      }));
    },
  },
  methods: {
    getPoint(x, y, angle) {
      return `${x + Math.cos(angle) * 45}, ${y + Math.sin(angle) * 45}`;
    },
    createLegendItem(item) {
      const legendItem = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'g'
      );
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

      rect.setAttribute('x', 0);
      rect.setAttribute('y', 0);
      rect.setAttribute('width', 10);
      rect.setAttribute('height', 10);
      rect.setAttribute('fill', item.color);

      text.textContent = `${item.label}: ${item.value}`;
      text.setAttribute('x', 15);
      text.setAttribute('y', 10);
      text.setAttribute('dominant-baseline', 'middle');

      legendItem.appendChild(rect);
      legendItem.appendChild(text);

      return legendItem;
    },
  },
  mounted() {
    const sliceGroup = this.$refs.sliceGroup;
    // const legendGroup = this.$refs.legendGroup;

    this.slicePaths.forEach((slice, index) => {
      const sliceElement = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
      );
      sliceElement.setAttribute('d', slice.d);
      sliceElement.setAttribute('fill', this.colors[index % this.colors.length]);
      sliceGroup.appendChild(sliceElement);
    });

    // Legend rendering logic goes here (refer to next segment)
  },
};
</script>

<style scoped>
.donut-chart {
  position: relative; /* Allows absolute positioning for legend */
  width: 100%; /* Fills container width */
}

.donut-background {
  fill: none; /* Transparent background for donut */
}

.chart-center {
  font-size: 16px;
  text-anchor: middle; /* Center text horizontally */
}

.legend {
  position: absolute; /* Absolute positioning within chart */
  bottom: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px; /* Spacing between legend items */
}

.legend g {
  display: flex;
  align-items: center; /* Align text and color rect */
}

.legend rect {
  width: 10px;
  height: 10px;
  margin-right: 5px; /* Spacing between color rect and text */
}
</style>
