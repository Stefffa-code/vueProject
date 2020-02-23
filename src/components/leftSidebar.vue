<template>
<aside > 
    <div id="nav" :class="{'show-menu':classObject}">
        <div class="nav-group">
                <router-link to="/" class="nav-link">
                <fa-icon icon="house-damage" class="sidebar-icon"/>
                <span>Главная</span>
            </router-link> 
            <router-link to="/trend" class="nav-link">
                <fa-icon icon="fire" class="sidebar-icon"/>
                <span>В тренде</span> 
            </router-link>
            <router-link class="nav-link" to="/subscribe">
                <fa-icon icon="film" class="sidebar-icon"/>
                <span>Подписки</span> 
            </router-link>
        </div>

        <div class="nav-group">
            <router-link  class="nav-link" to="/library">
                <fa-icon icon="boxes" class="sidebar-icon"/>
                <span>Библиотека</span> 
            </router-link> 
            <router-link  class="nav-link" to="/history">
                <fa-icon icon="history" class="sidebar-icon"/>
                <span>История</span> 
            </router-link>
            <router-link  class="nav-link" to="/postponed">
                <fa-icon icon="clock" class="sidebar-icon"/>
                <span>Смотреть позже</span>    
            </router-link>
            <router-link  class="nav-link" to="/likes">
                <fa-icon icon="thumbs-up" class="sidebar-icon"/>
                <span>Понравившиеся</span> 
            </router-link>
        </div>

        <div class="nav-group">
            <p class="nav-group__title">Подписки</p>
        </div>

        <div class="nav-group">
            <p class="nav-group__title">Другие возможности</p>
        </div>            
        
    </div>
</aside>  
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{

    },
    computed:{
        classObject(){
            if(this.$store.state.showMenu){
                document.body.style.overflow = 'hidden';
                return true
            }
            else {
                document.body.style.overflow = '';
                return false
            }
        },
    },
    watch:{

    },

    
}
</script>



<style lang="sass" >
aside
    height: 100vh  
$accColor: #44c58b
#nav 
    width: 190px
    margin-right: 20px

    & .nav-group
        text-align: left   
        border-bottom: 1px solid #d3d3d3
        padding: 10px 0 10px 

    & .nav-group__title
        text-transform: uppercase
        text-align: center
        font-size: 13px
        font-weight: bold

    & .sidebar-icon
        width: 22px
        height: 22px
        margin-right: 9px

    & .nav-link 
        font-weight: bold
        color: #2c3e50
        padding: 10px 0
        text-decoration: none
        display: block
        padding-left: 6px

    & .nav-link:hover,
    & a.router-link-exact-active 
        color: $accColor
        background-color: rgb(248, 248, 248)


@media (max-width: 1000px)
    aside
        position: relative

    #nav
        position: absolute
        transform: translateX(-100%)
        background-color: #fff
        z-index: 2
        transition: transform 0.4s
    #nav.show-menu
        transform: translateX(0%)
     


</style>