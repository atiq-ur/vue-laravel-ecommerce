<template>
    <Line :data="data" :options="options"/>
</template>

<script setup>
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Line} from 'vue-chartjs'
import {defineProps} from 'vue'

ChartJS.register(ArcElement, Tooltip, Legend)

const { data} = defineProps({
    data: Object,
});

const options = {
    responsive: true,
    animation: {
        duration: 1000
    },
}

</script>
