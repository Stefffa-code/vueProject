<template>
    <div id="top-bar" >
        <div class="top-bar__group">
             <fa-icon icon="bars" class="top-bar-icon menu-icon" @click="chengeShowMenu" />
            <div class="logo">
                <span>youTube</span>
            </div>
        </div>
        <div>
            Search
        </div>

        <div class="top-bar__group">
            <div class="top-bar__group mob-none">
                <fa-icon icon="video" class="top-bar-icon"/>
                <fa-icon icon="th" class="top-bar-icon"/>
                <fa-icon icon="bell" class="top-bar-icon"/>
            </div>            
            <div class="user"></div>
        </div>
        
    </div>    
</template>

<script>
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
    }
}
</script>

<style lang="sass">
#top-bar
    border-bottom: 1px solid #d3d3d3
    padding: 20px 3px
    display: flex
    justify-content: space-between
    
    @media (max-width: 580px)
        .mob-none
            display: none

.top-bar__group
    display: inline-flex
    align-items: center


.top-bar-icon
    margin: 0 10px
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