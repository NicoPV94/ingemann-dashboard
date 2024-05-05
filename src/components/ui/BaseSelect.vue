<template>
    <div class="custom-select im-input">
        <div class="d-flex justify-content-start align-items-center gap-1 px-2 overflow-hidden" placeholder="">
            <template v-if="selectedOption">
                <font-awesome-icon :icon="selectedOption.icon"/> <span>{{ selectedOption.text }}</span>
            </template>
            <p v-else class="text-nowrap">Seleccione una opción...</p>
        </div>
        <ul class="custom-select__options">
            <li v-for="option in options" :key="option.value" @click="selectOption(option)">
                <font-awesome-icon :icon="option.icon" /> <span>{{ option.text }}</span>
            </li>
        </ul>
        <font-awesome-icon icon="fa-solid fa-caret-down" class="caret-icon" />
    </div>
</template>

<script>
export default {
    props: {
        options: Array,
    },
    data() {
        return {
            selectedOption: '',
            selectOpen: false
        };
    },
    methods: {
        selectOption(value) {
            this.selectedOption = value;
            this.selectOpen = false;
            console.log(this.selectOpen);
            // Handle option selection logic here
        },
        handleMenu(action) {
            console.log('here');
            if (action === 'open') {
                this.selectOpen = true;
            } else {
                this.selectOpen = false;
            }
        }
    },
};
</script>

<style scoped>
/* Basic styles for the custom select component */
.custom-select {
    position: relative;
    display: flex;
    align-items: center;
    min-width: 100px;
    max-width: 200px;
    min-height: 30px;
    overflow: visible;
    cursor: pointer;
}

.caret-icon {
    position: absolute;
    right: 10px;
}

.custom-select__label {
    display: block;
    padding: 10px;
    cursor: pointer;
}

.custom-select__options {
    top: 29px;
    border: 1px solid #ccc;
    border-radius: 4px;
    /* Position list below the label */
    position: absolute;
    left: 0;
    min-width: 100%;
    background-color: #fff;
    list-style: none;
    padding: 0;
    margin: 0;
    z-index: 1;
    /* Ensure list appears above other elements */
    display: none;
    /* Hide by default */
}

.custom-select__options li {
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    transition: background-color 0.2s ease-in-out;
    white-space: nowrap;
}

.custom-select__options li:hover {
    background-color: #eee;
}

/* Show options list on hover or focus */
.custom-select:hover .custom-select__options,
.custom-select:focus .custom-select__options {
    display: block;
}
</style>
  