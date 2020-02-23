<template>
    <div class="home">
        <panel :filtr="'home'">

        </panel>
    </div>
</template>

<script>
import postPanel from './../components/postPanel'

export default {
    computed:{
    },
    components:{
        panel: postPanel,
    }
}

</script>
<style>
.home{
    height: 100%;
}
</style>