<template>
  <div class="container">

     <h1>בחר מדינה </h1>
        <v-select :options="options" v-if="loaded" :searchable="true" dir="rtl" v-on:input="changeCountry"></v-select>
  </div>
</template>

<script>
import vSelect from "vue-select";

export default {
  name: 'LeadersSelect',
  components: { vSelect },
  data: () => ({
    loaded: false,
    options: null
  }),
  methods: {
      changeCountry(selectObj) {
        if(selectObj.code){
            this.$root.$emit('updatechart', selectObj.code)
        }
     }
  },
  async mounted () {
    this.loaded = false;

    try {
      let api = 'https://api.covid19api.com/countries';
      this.axios.get(api).then((response) => {
      const  covid19 = response.data;
              //build data for select

        let data =[{label: "בחר מדינה", code: null}];
        for(let i in covid19){
            data.push({label: covid19[i].Country, code: covid19[i].Slug});
        }
      this.options = data;
      this.loaded = true
})



    } catch (e) {
      console.error(e)
    }
  }
}
</script>