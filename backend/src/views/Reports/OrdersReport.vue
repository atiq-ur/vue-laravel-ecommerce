<template>
    <div v-if="!loading">
        <BarChart :data="chartData" />
    </div>
    <Spinner v-else />
</template>

<script setup>

import axiosClient from "../../axios.js";
import {onMounted, ref, watch} from "vue";
import BarChart from "../../components/core/Charts/Bar.vue";
import {useRoute} from "vue-router";
import Spinner from "../../components/core/Spinner.vue";

const loading = ref(true);

const route = useRoute();
const chartData = ref([]);

onMounted(() => {
    getData();
})

watch(route, (rt) => {
    getData();
}, {immediate: true})

function getData() {
    axiosClient.get('report/orders', {params: {d: route.params.date}})
        .then(({data}) => {
            loading.value = false;
            chartData.value = data;
        })
}
</script>

<style scoped>

</style>
