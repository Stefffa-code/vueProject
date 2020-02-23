<template>
    <div class="post-card">
        
        <div class="post-card__media" >
            <img :src="pathImg" alt="image">
        </div>
        <div class="post-card__icons">

            <fa-icon icon="film" class="post-card__icon " 
                :class="{'active':subscribe}"
                 @click="chengeActive('subscribe')" />

            <fa-icon icon="boxes" class="post-card__icon" 
                :class="{'active':library}" 
                @click="chengeActive('library')"  />

            <fa-icon icon="clock" class="post-card__icon " 
                :class="{'active':postponed}"  
                @click="chengeActive('postponed')" />

            <fa-icon icon="thumbs-up" class="post-card__icon" 
                :class="{'active':likes}" 
                @click="chengeActive('like')" />

        </div>
        <div class="post-card__description">
            <router-link tag="p"  class="post-card__title" 
                :to="'/post/'+id"
                >
                {{ title }}
            </router-link>
            <div class="post-card__info">
                <p > {{ views}} просмотров </p> 
                <p >{{ date}} назад </p>
            </div>          
        </div>  

    </div>
</template>

<script>
export default {
    props:['pathImg','thumbnail','date','views','chanel','title','likes', 'postponed',  'subscribe', 'library','id'],
    data(){
        return{

        }
    },
    methods:{            
        chengeActive(val){   
            let field;
            switch(val){
                case 'subscribe' : field='subscribe'; break;
                case 'like' : field='like'; break;          
                case 'library' : field='library'; break;
                case 'postponed' : field='postponed'; break;         
            }
            this.$store.commit('chengeActive', {id:this.id, field:field})
        },               
    },
}
</script>



<style  lang="sass">
.post-card
    text-align: left
    padding:17px 0
    display: inline-block
    min-width: 180px
    max-width: 500px
    width: 24%
    margin-left: 5px
    &__icons
        display: flex
        justify-content: flex-start
    &__icon
        height: 20px
        flex-basis: 18px
        margin: 9px 16px 4px 0px
        color: #c6c6c6
          
    &__icon.active
        color: #44c58b
    &__media
        overflow: hidden
        height: 180px  
        position: relative
        
        & img
            position: absolute
            transform: translate(-50%,-50%)
            top: 50%
            left: 50%            
    &__description
        display: flex
        flex-direction: column
    &__info
        margin-top: auto 
        font-size: 13px
        color: rgb(156, 156, 156)
        & p
            margin: 0
    
    &__title
        font-weight: bold
        margin: 10px 0 5px
        font-size: 16px
    &__title:hover
        color:#44c58b

    @media (max-width: 820px)
        width: 32%
    @media (max-width: 820px)
        width: 48%
    @media (max-width: 430px)
        width: 100%
        margin-left: 0px

</style>