<template>
<div class="popup-bg">
    <div class="popup-box">
        <textarea name="" id=""></textarea>
        <div class="btn-box">
            <button>저장</button>
            <button>닫기</button>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'WriteDay',
    data: function () {
        return {
            textarea: ''
        };
    },
    methods: {

    }
}
</script>
<style>
@import url(../css/popup.css);
</style>
