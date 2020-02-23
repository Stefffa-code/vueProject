<template>
    <div class="history">
        <p>This history page</p>
        <div>
            <input type="text" v-model="search" >
            <button class="search" @click="sendDate()">search</button>
        </div>
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

export default {
    data(){
        return{
            search: 'а',
        }
    },
    methods:{
        sendDate(){
            console.log('method /  ' + this.search );
        }
    },
    computed:{
        postCagd(){
            return this.$store.getters.filteredList;
        }
    }
}

</script>

<style lang="sass">
.search
    border: 1px solid #000
    padding: 3px
    display: inline-block
</style>