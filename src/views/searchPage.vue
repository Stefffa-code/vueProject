<template>
    <div class="search-page">
        <panel :filtr="'search'">

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