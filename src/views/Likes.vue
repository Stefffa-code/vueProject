<template>
    <div class="likes">
        <panel :filtr="'likes'">

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