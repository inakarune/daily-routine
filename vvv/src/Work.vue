<template>
<div>
    <h1 class="page-title">MY WORK</h1>
    <p class="sub-title">Awesome projects</p>
    <ul class="tab-menu">
        <li v-on:click="clickTab(0)" :class="on === 0 ? 'on' : ''">ALL</li>
        <li v-on:click="clickTab(1)" :class="on === 1 ? 'on' : ''">WORK</li>
        <li v-on:click="clickTab(2)" :class="on === 2 ? 'on' : ''">PART-TIME</li>
        <li v-on:click="clickTab(3)" :class="on === 3 ? 'on' : ''">TOY PROJECT</li>
    </ul>
    <ul class="box-list">
        <li class="box" v-for="(item, idx) in list" :key="idx" :style="{ 'background-image': `url(${ item.image })`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }" v-on:click="go(item.keyword)">
            <div class=""></div>
        </li>
    </ul>
</div>
</template>
<script>
import work from './json/work.json';
import part from './json/part.json';
import toy from './json/toy.json';

export default {
    name: 'Work',
    data: function() {
        return {
            list: [...work.list, ...part.list, ...toy.list],
            on: 0
        };
    },
    methods: {
        clickTab(num) {
            if (num === 0) {
                this.list = [...work.list, ...part.list, ...toy.list];
            } else if (num === 1) {
                this.list = [...work.list];
            } else if (num === 2) {
                this.list = [...part.list];
            } else if (num === 3) {
                this.list = [...toy.list];
            }
            this.on = num;
            console.log(this.list)
        },
        go(keyword) {
            this.$router.push(`/work/${ keyword }`);
        }
    }
}
</script>
<style>
.page-title {
    margin-top: 100px;
    margin-bottom: 5px;
}
.sub-title {
    margin: 0;
}
.tab-menu {
    display: flex;
    cursor: pointer;
    width: 500px;
    justify-content: space-between;
    font-weight: bold;
    margin: 30px auto;
    font-size: 13px;
}
.tab-menu li {
    padding: 10px;
}
.tab-menu li:hover, .tab-menu .on {
    background-color: black;
    border-radius: 100px;
    color: white;
}
.box-list {
    display: flex;
    width: 1055px;
    margin: 0 auto;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.box {
    width: 250px;
    height: 250px;
    background-color:transparent;
    margin-right: 15px;
    margin-bottom: 15px;
    overflow: hidden;
    border: 1px solid #eee;
    cursor: pointer;
}
.box:hover {
    border-color: orange;
}
.box img {
    max-width: 100%;
    max-height: 100%;
}
.box:nth-child(4n) {
    margin-right: 0px;
}
</style>