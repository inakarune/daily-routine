<template>
<div>
    <WriteDiet v-if="toggle" @onclose="toggleWrite" />
    <div class="chart-container">
        <div class="chart-box">
            <p>주간</p>
            <chart-line :chart-data="chartData" :options="chartOptions"></chart-line>
        </div>
        <div class="chart-box">
            <p>월간</p>
            <chart-line :chart-data="chartData" :options="chartOptions"></chart-line>        
        </div>
    </div>
    <div class="plus-btn"><i class="fas fa-plus fa-lg"></i></div>
</div>
</template>
<script>
import ChartLine from './LineChart';
import WriteDiet from './WriteDiet.vue';

export default {
    name: 'Diet',
    components: {
        ChartLine,
        WriteDiet  
    },
    data: function () {
        return {
            chartData: null,
            chartOptions: { responsive: true, maintainAspectRatio: false, legend: { display: false } },
            weekData: null,
            toggle: true
        }
    },
    mounted () {
      this.fillData();
    },
    methods: {
        toggleWrite() {
            this.toggle = !this.toggle;
        },
      fillData () {
        const labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ];
        this.chartData = {
        labels: labels,
        datasets: [{
            backgroundColor: '#fec6b9',
            borderColor: '#f88065',
            data: [0, 10, 5, 2, 20, 30, 45],
            pointBackgroundColor: '#ffffff',
            pointBorderColor: '#f88065'
        }]
        };
      }
    }
}
</script>
<style>
.chart-container {
    display: flex;
    width: 100vw;
}
.chart-box {
    width: 40vw;
}
.chart-box p {
    font-weight: bold;
    font-size: 30px;
    text-align: left;
}
.plus-btn {
    background-color: tomato;
    border-radius: 100px;
    width: 50px;
    height: 50px;
    color: white;
    line-height: 3.2;
    position: fixed;
    right: 30px;
    bottom: 30px;
}
</style>
