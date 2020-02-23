<template>
    <div class="library">

        <panel :filtr="'library'">
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