<template>
    <div class="post-panel">
        
        <card v-for="(item, index) in postCagd"
            :title="item.title"
            :chanel="item.chanel"
            :views="item.views"
            :thumbnail="item.thumbnail"
            :pathImg="item.pathImg"
            :date="item.date"
            :likes="item.likes"
            :postponed="item.postponed"
            :subscribe="item.subscribe"
            :library="item.library"
            :id="item.id"
            :key="'i'+index">   
        </card>
    </div>
</template>

<script>

import postCard from './../components/postCard'

export default {
    props:['filtr'],
    data(){
        return{
        }
    },
    methods:{       
    },
    computed:{

        postCagd(){
            switch(this.filtr){
                case 'home' : return this.$store.getters.postsInHome;
                case 'subscribe' : return this.$store.getters.postsInSubscribe;
                case 'library' : return this.$store.getters.postsInLibrary;
                case 'trend' : return this.$store.getters.postsInTrend;
                case 'history' : return this.$store.getters.postsInHistory;
                case 'likes' : return this.$store.getters.postsInLikes;
                case 'postponed' : return this.$store.getters.postsInPostponed;
            } 
        },
        
        
    },
    components:{
        card: postCard,
    }
}

</script>
<style>
.post-panel{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items:stretch;
}
</style>