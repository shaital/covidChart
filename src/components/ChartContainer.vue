<template>
  <div class="container">
    <line-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"/>
  </div>
</template>

<script>
import LineChart from './Chart.vue'

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => ({
    loaded: false,
    chartdata: null,
    options:{
      responsive: true,
      maintainAspectRatio: false,
    },
    country:null
  }),
  methods:{
    createChrat(){
        this.loaded = false;

    try {
      let api = 'https://api.covid19api.com/total/country/'+this.country+'/status/confirmed?from=2020-05-01T00:00:00Z&to=2020-06-01T00:00:00Z';
      this.axios.get(api).then((response) => {
      const  covid19 = response.data;
              //build data for linechart
        let labels =[];
        let data =[];
        let label;
        for(let i in covid19){
            let formatedate = this.$moment(covid19[i].Date).format("DD-MM-YYYY");
            labels.push(formatedate);
            data.push(covid19[i].Cases);
            label = covid19[i].Country;
        }
     this.chartdata = 
           {
        labels: labels,
        datasets: [
          {
            label: label,
            data: data,
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          }
        ]
      }
      this.loaded = true
})



    } catch (e) {
      console.error(e)
    }
    }
  },
  async mounted () {
    this.$root.$on('updatechart', (country) => { 
         this.country = country;
         this.createChrat();
    })
  }
}
</script>