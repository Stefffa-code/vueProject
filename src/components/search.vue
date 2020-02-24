<template>
    <router-link to="/search" tag="div" class="search">
        <input type="text" v-model="search" placeholder="Введите запрос">
        <button  @click="sendDate" class="button">
             <fa-icon icon="search" class="search-icon"/>
        </button>        
    </router-link>
</template>

<script>
export default {
    data(){
        return{
            search: '',
        }
    },
    methods:{
        sendDate(){
            console.log('send ' + this.search);
            this.$store.commit('setSearchDate', this.search );
        }
    },
}
</script>

<style lang="sass">
    .search
        height: 30px
        max-width: 400px
        width: 60%
        display: flex
        margin: 0 7px
        
        input
            box-sizing: border-box
            border: 1px solid #c3c3c3
            height: 100%
            flex-grow: 100
            padding-left: 10px

        button
            border: none
            background-color: #44c58b
            box-sizing: border-box
            height: 100%
            padding: 0 16px
            outline: none
            flex-grow: 1
        .search-icon
            color: #fff
            width: 17px
            height: 17px
        button:hover
            background-color:#2aed9e
        

</style>