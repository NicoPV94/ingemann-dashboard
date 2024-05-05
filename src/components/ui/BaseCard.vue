<template>
    <div class="base-card">
        <div v-if="!!title" class="d-flex justify-content-start w-100 mb-3">
            <h6 class="card-title">{{ title }}</h6>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
.base-card {
    border: solid 1px #CCCCCC;
    border-radius: 10px;
    padding: 15px;
}
</style>