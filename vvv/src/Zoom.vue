<template>
<div class="image-zoom-box" v-on:click="close">
    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-e3e37.appspot.com/o/widget.png?alt=media&token=d9385f7b-bddf-4eaa-aa47-3b54fdaa8d23" />
</div>
</template>
<script>
export default {
    name: 'Zoom',
    methods: {
        close() {

        }
    }
}
</script>
<style>
.image-zoom-box {
    background-color: rgba(0, 0, 0, 0.8);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
}
.image-zoom-box img {
    margin: 100px auto;
    display: block;
}
</style>
