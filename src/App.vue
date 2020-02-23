<template>
  <div id="app">

          
    <top-bar></top-bar>      
    

   <div class="content">
      
      <side-bar></side-bar>

      <main >

          <!-- <div>
              <router-link to="/">Home</router-link> |
              <router-link to="/about">About</router-link>
          </div> -->
         <router-view></router-view>
      
      </main>    

      
   </div>
    
  </div>
</template>


<script>
  import topBar from './components/topBar'
  import sideBar from './components/leftSidebar'

export default {

  computed:{
    
  },

  components:{
    topBar: topBar,
    sideBar: sideBar,
  }
}
</script>



<style lang="sass">

html,
body
  height: 100%
#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  margin: 0 auto
  color: #2c3e50
  font-size: 15px
  max-width: 1400px
  width: 99%
  height: 100%

.content
  display: flex

img
  width: 100%
  display: block

main
  width: 100%

</style>
