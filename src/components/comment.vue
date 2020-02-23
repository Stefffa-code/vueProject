<template>
    <div class="comment">
        <div class="comment__thumbnail">
            <img :src="thumbnail" alt="thumbnail">
        </div>
        <div>
            <p class="comment__author"> {{ author }} </p> 
            <p class="comment__text"> {{ comment }} </p> 
        </div>        
    </div>
</template>

<script>
export default {
    props:['author', 'comment', 'thumbnail']
}
</script>

<style lang="sass">
.comment
    padding: 10px 0
    text-align: left
    display: flex
    align-items: flex-start
    p
        margin: 0
    &__author
        font-weight: bold
        font-size: 14px
    &__thumbnail
        width: 40px
        height: 40px
        flex-basis: 40px
        border-radius: 40px
        overflow: hidden
        margin-right: 15px
</style>