<template>
    <div class="history">
        <!-- <div>
            <input type="text" v-model="search" >
            <button  @click="sendDate()">search</button>
        </div> -->
        <div>
            <card v-for="(item, index) in postCagd"
                :title="item.title"
                :chanel="item.chanel"
                :views="item.views"
                :thumbnail="item.thumbnail"
                :pathImg="item.pathImg"
                :date="item.date"
                :key="'i'+index">   
            </card>

        </div>
        

    </div>
</template>

<script>
import postCard from './../components/postCard'
export default {
    methods:{
        sendDate(){
            console.log('method /  ' + this.search );
        }
    },
    computed:{
        postCagd(){
            return this.$store.getters.filteredList;
        }
    },
    components:{
      card: postCard,
    }
}

</script>

<style lang="sass">
</style>