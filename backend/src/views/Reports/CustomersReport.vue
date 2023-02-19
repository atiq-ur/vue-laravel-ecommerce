<template>
    <div v-if="!loading">
        <LineChart :data="chartData" />
    </div>
    <Spinner v-else />

</template>

<script setup>

import axiosClient from "../../axios.js";
import {ref, watch} from "vue";
import LineChart from "../../components/core/Charts/Bar.vue";
import {useRoute} from "vue-router";
import Spinner from "../../components/core/Spinner.vue";

const route = useRoute();
const chartData = ref([]);

const loading = ref(true);

watch(route, (rt) => {
    getData();
}, {immediate: true})

function getData() {
    axiosClient.get('report/customers', {params: {d: route.params.date}})
        .then(({data}) => {
            loading.value = false;
            chartData.value = data;
        })
}
</script>

<style scoped>

</style>
