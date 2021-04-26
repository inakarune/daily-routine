<template>
<div>
    <div class="top">
        <p>{{ this.month }}월, {{ this.year }} <button class="calendar-btn"><i class="far fa-arrow-alt-circle-left fa-lg"></i></button><button class="calendar-btn"><i class="far fa-arrow-alt-circle-right fa-lg"></i></button></p>
        <div>
            <div class="calendar-form-btn-box">
                <button>오늘</button>
                <button>일</button>
                <button>주</button>
                <button>월</button>
            </div>
        </div>
    </div>
    <Week v-if="type === 'week'" />
    <div class="calendar" v-else>
        <ul class="day">
            <li class="holiday">일</li>
            <li>월</li>
            <li>화</li>
            <li>수</li>
            <li>목</li>
            <li>금</li>
            <li>토</li>
        </ul>
        <div class="date">
            <div v-for="(item, idx) in date" :key="idx" :class="!(idx % 7) ? 'holiday' : !((idx + 1) % 7) ? 'saturday' : ''">{{ item }}</div>
        </div>
    </div>
</div>
</template>
<script>
import Week from './Week';

export default {
    name: 'Calender',
    components: {
        Week
    },
    data: function () {
        return {
            date: [],
            month: 0,
            year: 0,
            type: 'week'
        }
    },
    created() {
        this.showCalendar();
    },
    methods: {
        next() {

        },
        prev() {

        },
        showCalendar() {
            let today = new Date();
            let date = new Date();
            this.month = today.getMonth() + 1;
            this.year = today.getFullYear();

            let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
            let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

            let arr = [];
            let count = 0;
            while (count !== firstDay) {
                arr.push('');
                count++;
            }
            for (let i = 1; i < lastDay + 1; i++) {
                arr.push(i);
            }
            
            this.date = [...arr];
        }
    }
}
</script>
<style>
.calendar {
    width: 98.8vw;
}
.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
}
.top p {
    font-size: 30px;
    font-weight: bold;
}
.date {
    display: flex;
    flex-wrap: wrap;
    width: inherit;
}
.day {
    display: flex;
}
.day li {
    padding: 10px;
    border-bottom: 1px solid #dfe4e9;
    border-right: 1px solid #dfe4e9;
    border-top: 1px solid #dfe4e9;
    width: calc(98.8vw / 7);
}
.date > div {
    padding: 10px;
    width: calc(98.8vw / 7);
    height: calc(90vh / 5);
    border-right: 1px solid #dfe4e9;
    border-bottom: 1px solid #dfe4e9;
    text-align: left;
}
.holiday {
    color: red;
}
.saturday {
    color: blue;
}
.calendar-btn {
    background-color: transparent;
    border: none;
}
.calendar-btn:hover {
    color: #ffc7ba;
}
.calendar-form-btn-box {
    border: 1px solid #dfe4e9;
    color: #dfe4e9;
    padding: 10px;
    border-radius: 3px;
    width: fit-content;
}
.calendar-form-btn-box button {
    background: transparent;
    border: none;
}
.calendar-form-btn-box button:hover {
    color: #f88065;
}
</style>