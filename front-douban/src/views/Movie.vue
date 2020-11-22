<template>
  <div class="movie">
    <img v-for="img in imageList" v-lazy="img" :key="img"/>
    <Header></Header>   
    <MovieSection :section1="section1" :section2="section2"></MovieSection>
    <DbList></DbList>
    <MovieSection :section1="section1" :section2="section2" v-infinite-scroll="load"></MovieSection>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import MovieSection from '@/components/MovieSection.vue'
import DbList from '@/components/DbList.vue'

export default {
  data () {
    return {
      imageList: [],
      section1: [
        {img: 'https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2623955494.jpg', nm: 'hhhhhhhhhhhhhhhhhh', sc: 8.5},
        {img: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2452075545.jpg', nm: 'hh', sc: 8.5},
        {img: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2452075545.jpg', nm: 'hh', sc: 8.5},
        {img: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2452075545.jpg', nm: 'hh', sc: 8.5},
        {img: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2452075545.jpg', nm: 'hh', sc: 8.5},
      ],
      section2: [
        {img: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3855684193,1508653948&fm=26&gp=0.jpg', nm: 'hh', sc: 8.5},
        {img: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3855684193,1508653948&fm=26&gp=0.jpg', nm: 'hh', sc: 8.5},
        {img: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3855684193,1508653948&fm=26&gp=0.jpg', nm: 'hh', sc: 8.5},
        {img: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3855684193,1508653948&fm=26&gp=0.jpg', nm: 'hh', sc: 8.5},
        {img: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3855684193,1508653948&fm=26&gp=0.jpg', nm: 'hh', sc: 8.5},
        {img: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3855684193,1508653948&fm=26&gp=0.jpg', nm: 'hh', sc: 8.5},
      ]
    }
  },
  created() {
    this.imageList.push(this.section1.img)
    this.imageList.push(this.section2.img)
  },
  method: {
    load() {
      
    }
  },
  components: {
    Header,
    MovieSection,
    DbList
  }
}
</script>

<style>

</style>