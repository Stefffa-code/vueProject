<template>
    <div id="top-bar" >
        <div class="top-bar__group">
             <fa-icon icon="bars" class="top-bar-icon menu-icon" @click="chengeShowMenu" />
            <div class="logo">
                <span>youIm</span>
            </div>
        </div>

        <search>
        </search>

        <div class="top-bar__group mob-none">
            <div class="top-bar__group ">
                <fa-icon icon="video" class="top-bar-icon"/>
                <fa-icon icon="th" class="top-bar-icon"/>
                <fa-icon icon="bell" class="top-bar-icon"/>
            </div>            
            <div class="user "></div>
        </div>
        
    </div>    
</template>

<script>
import search from './../components/search'
export default {
    data(){
        return{
        }
    },
    methods:{
        chengeShowMenu(){
            if(this.$store.state.showMenu){
                this.$store.state.showMenu=false
            } 
            else {
                this.$store.state.showMenu=true
            }
        }
    },
    competed:{
    },
    components:{
        search: search,
    }
}
</script>

<style lang="sass">
#top-bar
    border-bottom: 1px solid #d3d3d3
    padding: 20px 0px
    display: flex
    justify-content: space-between
    
    @media (max-width: 580px)
        .mob-none
            display: none

.top-bar__group
    display: inline-flex
    align-items: center


.top-bar-icon
    margin-right: 10px 
    width: 20px !important
    height: 20px

.user
    width: 20px
    height: 20px
    background-color: #2c3e50
    display: inline-block
    border-radius: 10px
    margin-left: 10px
.menu-icon
    display: none
@media (max-width: 1000px)
    .menu-icon
        display: block



   
</style>