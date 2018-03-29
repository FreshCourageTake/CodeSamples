<template>
    <img v-bind:src="inspImg" class="img-fill"/>
</template>

<script>
    export default {
        vuex: {
            getters: {
                inspImg: state => state.inspImg
            }
        }
    }
</script>