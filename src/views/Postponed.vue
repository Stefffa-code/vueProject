<template>
    <div class="postponed">
        <panel :filtr="'postponed'">

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