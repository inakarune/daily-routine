<template>
<nav>
    <ul>
        <li :class="menu === 'calendar' ? 'on' : ''" v-on:click="clickNav('calendar')">달력</li>
        <li :class="menu === 'diet' ? 'on' : ''" v-on:click="clickNav('diet')">다이어트</li>
    </ul>
</nav>    
</template>
<script>
export default {
    name: 'Nav',
    data: function () {
        return {
            menu: 0
        }
    },
    methods: {
        clickNav(keyword) {
            this.menu = keyword;
            this.$router.push(`/${ keyword }`);
        }
    }
}
</script>
<style>
nav {
    display: flex;
    justify-content: center;
    height: 7vh;
    border-bottom: 1px solid #dfe5ea;
    align-items: center;
    box-shadow: 1px 3px 12px #eee;
}
nav ul {
    display: flex;
    color: #c3cad3;
}
nav ul li {
    margin: 0 20px;
    height: 7vh;
    line-height: 4;
    cursor: pointer;
}
nav ul .on {
    color: #f88065;
    border-bottom: 3px solid #f88065;
    font-weight: bold;
}
</style>