<template>
<div>
    <Zoom v-show="src !== ''"/>
    <div class="top">
        <div class="main-img" :style="{ backgroundImage: `url(${ data.image })`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }" v-on:click="clickImg(data.image)"></div>
        <div class="company-data">
            <h1>{{ data.project }}</h1>
            <p title="COMPANY"><i class="fas fa-building fa-2x"></i>{{ data.company }}</p>
            <p title="POSITION"><i class="fas fa-user-alt fa-2x"></i>{{ data.position }}</p>
            <p title="DEVELOP STACKS"><i class="fas fa-code fa-2x"></i>{{ data.stack }}</p>
            <p title="SITE"><i class="fas fa-home fa-2x"></i><a :href="data.url">{{ data.url }}</a></p>
        </div>
    </div>
    <div class="bottom">
        <ul class="img-list">
            <li v-for="(item, idx) in data.images" :key="idx" :style="{ backgroundImage: `url(${ item.src })`, backgroundRepeat: 'no-repeat', backgroundSize: 'conver', backgroundPosition: 'center' }" v-on:click="clickImg(item.src)"></li>
        </ul>
        <p class="subtitle">PROJECT DESCRIPTION</p>
        <p class="text">{{ data.explain }}</p>
        <p class="subtitle">FUNCTIONS</p>
        <ul class="func-list">
            <li></li>
        </ul>
    </div>
</div>
</template>
<script>
import ijb from './json/ijb.json';
import rj from './json/rj.json';
import gix from './json/gix.json';
import techbee from './json/techbee.json';
import autobot from './json/autobot.json';

import Zoom from './Zoom.vue';

export default {
    name: 'Detail',
    components: {
        Zoom
    },
    created() {
        const company = this.$route.params.company;
        if (company === 'ijb') {
            this.data = ijb;
        } else if (company === 'rj') {
            this.data = rj;
        } else if (company === 'gix') {
            this.data = gix;
        } else if (company === 'techbee') {
            this.data = techbee;
        } else if (company === 'autobot') {
            this.data = autobot;
        }
    },
    data: function () {
        return {
            data: {},
            src: ''
        };
    },
    methods: {
        clickImg(src) {
            this.src = src;
        }
    }
}
</script>
<style>
.main-img {
    width: 600px;
    height: 300px;
    border: 1px solid #eee;
    cursor: pointer;
}
.company-data {
    text-transform: uppercase;
    width: 608px;
    margin-left: 50px;
}
.company-data h1 {
    margin-top: 0px;
    margin-bottom: 50px;
}
.company-data > p {
    text-align: left;
}
.company-data > p > i {
    margin-right: 20px;
    width: 35px;
}
.top {
    display: flex;
    margin-top: 100px;
    justify-content: space-around;
}
.bottom {

}
.bottom .img-list {
    margin-top: 20px;
    margin-bottom: 100px;
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
}
.bottom .img-list li {
    width: 200px;
    height: 200px;
    border: 1px solid #eee;
    margin-right: 20px;
}
.bottom .img-list li:hover {
    border: 1px solid orange;
}
.bottom .func-list {
    
}
.bottom .subtitle {
    font-size: 16px;
    border-bottom: 4px solid orange;
    padding: 15px;
    font-weight: bold;
    text-align: left;
    padding-left: 0px;
    letter-spacing: 2px;
    margin-top: 100px;
}
.text {
    white-space: pre-line;
    line-height: 25px;
}
</style>
