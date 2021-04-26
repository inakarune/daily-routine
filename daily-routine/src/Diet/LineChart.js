import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins;

export default {
    extends: Line,
    name: "LineChart",
    mixins: [reactiveProp],
    props:['options', 'chartData'],
    mounted () {
        this.renderChart(this.chartData);
    }
}
