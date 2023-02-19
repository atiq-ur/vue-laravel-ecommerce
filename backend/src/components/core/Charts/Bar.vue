<template>
    <Bar :data="data" :options="options"/>
</template>

<script setup>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import {defineProps} from 'vue'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

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
