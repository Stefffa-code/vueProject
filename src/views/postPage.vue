<template>
    <div class="postPage"> 
        <div class="postPage__media">
            <div class="postPage__info">
                <div class="postPage__img" >
                    <img :src="post.pathImg" alt="image">
                </div>
                <div class="post-card__icons">

                    <fa-icon icon="film" class="post-card__icon " 
                        :class="{'active':post.subscribe}"
                        @click="chengeActive('subscribe', post.subscribe)" />

                    <fa-icon icon="boxes" class="post-card__icon" 
                        :class="{'active':post.library}" 
                        @click="chengeActive('library', post.library)"  />

                    <fa-icon icon="clock" class="post-card__icon " 
                        :class="{'active':post.postponed}"  
                        @click="chengeActive('postponed', post.postponed)" />

                    <fa-icon icon="thumbs-up" class="post-card__icon" 
                        :class="{'active':post.likes}" 
                        @click="chengeActive('like',post.likes)" 
                        />
                </div>
                <div class="postPage__description">
                    <p class="postPage__title"> {{ post.title }} </p> 
                    <div class="post-card__info">
                        <p > {{ post.views}} просмотров </p> 
                        <p >{{ post.date}} назад </p>
                    </div>          
                </div>
            </div>  
        </div>

        <div class="postPage__comments" >

                <div v-if="isComments" >
                    <comment 
                        v-for="(item, index) in getComments"
                        :key="'com' + index"
                        :comment="item.comment"
                        :author="item.author"
                        :thumbnail="item.thumbnail"
                        :isComments="isComments">
                    </comment>
                </div>            
                <div v-else>
                    <p>  {{ commentsNo }} </p>
                </div>   

        </div>
                
    </div>
</template>

<script>
import postPanel from './../components/postPanel'
import comment from '../components/comment'
export default {
    
    data(){
        return{
            idr: +this.$router.currentRoute.params['id'],
            idp: Number,
            post: {},
            comments: [],
            isComments: Boolean,
            commentsNo: 'Комментариев еще нет',
        }
    },    
    methods:{
        chengeActive(name, val){   
            let field;
            
            switch(name){
                case 'subscribe' : field='subscribe'; break;                   
                case 'like' :  field='like'; break;                              
                case 'library' :  field='library';  break; 
                case 'postponed' : field='postponed';   break;        
            }
            this.$store.commit('chengeActive', {id:this.idp, field:field})
            
        },  
    },
    computed:{      
        getPost(){
            return this.$store.getters.getPost;
        },
        getComments(){
            return this.$store.getters.getPostComments.comment;
        },
        
    },
    components:{
        comment: comment,
        panel: postPanel,
    },
    created() {
        this.$store.commit('chengeIdPostView', this.idr );
        this.post = this.$store.getters.getPost;        
        this.comments = this.$store.getters.getPostComments;
        this.isComments = (this.comments !== undefined) ? true : false;
        this.idp = this.post.id;
    },
    
}
</script>

<style lang="sass">
.postPage    
    height: 100%
    padding-top: 15px
    &__img            
        height: 500px
        position: relative
        overflow: hidden
        & img
            position: relative
            transform: translate(-50%,-50%)
            top: 50%
            left: 50% 
    &__description
        text-align: left
    &__title
        font-weight: bold
        margin: 10px 0 5px
        font-size: 18px
    &__comments
        margin-top: 40px
    &__panelCard
        width: 40%
        overflow-y: scroll
        .post-card
            width: 100%
            padding: 0px 0 30px 
                
</style>