<template>
  <div class="city-page">
    <city-header></city-header>
    <city-search :Cities="cities"></city-search>
    <city-list :hotCities="hotCities" 
    :Cities="cities" :letter="letter"></city-list>
    <city-alphabet :alphabet-list="cities"
    @change="letterChange"></city-alphabet>
  </div>
</template>

<script>
import Axios from 'axios';
import cityHeader from './childCpn/city-header';
import CitySearch from './childCpn/city-search';
import CityList from './childCpn/city-select';
import CityAlphabet from './childCpn/city-Alphabet';
export default {
  name: 'city-page',
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: null,
    }
  },
  components: {
    cityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  methods: {
    getCitydata () {
      Axios.get('/api/city.json')
        .then((res) => {
          // console.log(res)
        if(res.data.ret && res.data.data){
          const data = res.data.data
          this.cities = data.cities
          this.hotCities = data.hotCities
        }
        })
    },
    letterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCitydata ()
  },
}
</script>

<style scoped>
.city-page {
  position: relative;
}
</style>