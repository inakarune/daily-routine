<template>
<div>
    <ul class="datelist">
        <li v-for="(item, idx) in date" :key="idx">{{ item }}</li>
    </ul>
    <ul class="todolist">
        <li v-for="(item, idx) in todoList" :key="idx">
            <div v-for="(ttt, idx) in item.texts" :key="idx" class="todo">{{ ttt }}</div>
        </li>
    </ul>
</div>
</template>
<script>
import todo from './todo.json';

export default {
    name: 'Week',
    data: function () {
        return {
            date: [],
            todoList: [...todo.list],

        };
    },
    created() {
        this.showWeek();
    },
    methods: {
        showWeek() {
            let today = new Date();
            let date = new Date();
            let arr = [];
            let count = 1;
            let current = today.getDay();
            let day = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

            while (count < current) {
                let ddd = new Date();
                ddd.setDate(date.getDate() - count);
                let text = `${ ddd.getMonth() + 1 }월 ${ ddd.getDate() }일 ${ day[ddd.getDay()] }`;
                arr.push(text);
                count++;
            }
            count = 0;
            while (count < 6) {
                let ddd = new Date();
                ddd.setDate(date.getDate() + count);
                let text = `${ ddd.getMonth() + 1 }월 ${ ddd.getDate() }일 ${ day[ddd.getDay()] }`;
                arr.push(text);
                count++;
            }
            console.log()
            this.date = [...arr];
        }
    }
}
</script>
<style>
.todolist, .datelist {
    width: 100vw;
    display: flex;
}
.datelist li {
    border-bottom: 1px solid gray;
    width: calc(100vw / 7);
}
.todolist li {
    border-right: 1px solid gray;
    width: calc(100vw / 7);
    height: 50vw;
    padding: 10px;
}
.todolist .todo {
    text-align: left;
}
</style>
