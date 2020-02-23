<template>
  <div class="trend">
    <p>trend page</p>

    <input type="text" v-model="searchH">
    
    <ul>
      <li v-for="(item, index) in filtredCard" :key="index">
          title: {{ item.title }} / n: {{ item.n }}
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'trend',
  data(){
    return{
      searchH: '',
      mas: [
        {
          title:'tarakan',
          n: 25,
        },
        {
          title:'flower',
           n: 26,
        },
        {
          title:'shrek',
           n: 28,
        },
      ]
    }
  },
  computed:{
    filtredCard(){
      return this.mas.filter(post => {
          return post.title.toLowerCase().includes(this.searchH.toLowerCase())
        })

    }
  },
  components: {
  }
}
</script>
