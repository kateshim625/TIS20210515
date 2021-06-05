<style scoped>
body {
    text-align: center;
    background-color: #f6f6f8;
}
input {
    border-style: groove;
    width: 200px;
}
button {
    border-style: groove;
}
.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

<template>
    <div id="app">
        <!-- TodoHeader -->
        <!-- 투두해드만만듬 -->
        <todo-header></todo-header>

        <!-- TodoInput-->
        <todo-input v-on:addTodo="addTodo"></todo-input>

        <!-- TodoList -->
        <todo-list
            v-bind:todoItems="todoItems"
            v-on:doneToggle="doneToggle"
            v-on:removeTodo="removeTodo"
        >
        </todo-list>

        <!-- TodoFooter -->
        <todo-footer v-on:clearAll="clearAll"></todo-footer>
    </div>
</template>

<script>
import TodoHeader from "../components/todo/TodoHeader.vue";
import TodoInput from "../components/todo/TodoInput.vue";
import TodoList from "../components/todo/TodoList.vue";
import TodoFooter from "../components/todo/TodoFooter.vue";

export default {
    /* pdtmc^2w */
    props: [],
    data: function () {
        return {
            todoItems: [
                { id: 1, todo: "영화보기", done: false },
                { id: 2, todo: "주말 산책", done: true },
                { id: 3, todo: "ES6 학습", done: false },
                { id: 4, todo: "잠실 야구장", done: false }
            ]
        };
    },
    //template: ``,
    methods: {
        addTodo: function (newTodoItem) {
            var maxObj = null;
            if (this.$data.todoItems.length > 0) {
                maxObj = this.$data.todoItems.reduce(
                    (previousValue, currentValue) => {
                        if (previousValue.id >= currentValue.id) {
                            return previousValue;
                        } else {
                            //최대아이디를 갖고 있는 객체의 item을 찾는다
                            return currentValue;
                        }
                    }
                );
            } else {
                maxObj = {
                    id: 0,
                    todo: newTodoItem,
                    done: false
                };
            }
            newTodoItem; // 인풋에 입력되어있는 값이 그걸 투두리스트형식으로 만들어서 넣어주기
            var obj = {
                id: maxObj.id + 1,
                todo: newTodoItem, //인풋에들어가있는값을 넣어주면됨
                done: false
            };
            this.$set(this.$data.todoItems, this.$data.todoItems.length, obj);
            newTodoItem = "";
            console.log(this.$data.todoItems);
        },
        doneToggle: function (id, index) {
            this.$set(
                this.$data.todoItems[index],
                "done",
                !this.$data.todoItems[index].done
            );
        },
        removeTodo: function (id, index) {
            this.$data.todoItems.splice(index, 1);
            event.stopPropagation();
            event.preventDefault();
        },
        clearAll: function (event) {
            console.log(event.target);
            this.$data.todoItems = [];
        }
    },
    components: {
        /* 컴포넌트 등록. 예시) "태그명" : 컴포넌트명 */
        "todo-header": TodoHeader,
        "todo-input": TodoInput,
        "todo-list": TodoList,
        "todo-footer": TodoFooter
    },
    computed: {
        /* 자동처리 + 동기식. 메서드로 작성. return 필수. */
    },
    watch: {
        /* 자동처리 + 비동기식. data 에 등록된 프로퍼티 모니터링. 메서드로 작성. 매개변수 입력 필수  */
    },
    mounted: function () {
        console.log("mounted");
    },
    updated: function () {
        console.log("updated");
    }
};
</script>