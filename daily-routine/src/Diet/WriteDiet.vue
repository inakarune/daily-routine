<template>
<div class="popup-bg">
    <div class="popup-box">
        <h1>몸무게 입력</h1>
        <p class="label">몸무게</p>
        <input type="number" v-model="weight"/> kg
        <p class="label">날짜</p>
        <input type="date" v-model="date"/>
        <div class="btn-box">
            <button v-on:click="save">저장</button>
            <button v-on:click="close">닫기</button>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'WriteDiet',
    data: function () {
        return {
            weight: '',
            date: ''
        };
    },
    methods: {
        save() {
            this.$emit('onclose');
        },
        close() {
            this.$emit('onclose');
        }
    }    
}
</script>
<style>
.popup-bg {
    background-color: rgba(0, 0, 0, 0.8);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
}
.popup-box {
    width: 400px;
    background-color: white;
    height: 400px;
    margin: 100px auto;
    padding: 30px;
    text-align: left;
}
.popup-box .label {
    text-align: left;
    font-weight: bold;
}
.popup-box input {
    padding: 10px;
    border: 1px solid gray;
    border-radius: 3px;
}
.popup-box button {
    border-radius: 3px;
    padding: 10px;
    border: none;
}
.popup-box .btn-box {
    padding-top: 20px;
    border-top: 1px solid gray;
    text-align: right;
    margin-top: 20px;
}
.popup-box .btn-box button:nth-child(1) {
    margin-right: 10px;
    background-color: #f88065;
    color: white;
}
.popup-box .btn-box button:nth-child(2) {
    border: 1px solid gray;
    color: gray;
    background-color: transparent;
}
</style>
