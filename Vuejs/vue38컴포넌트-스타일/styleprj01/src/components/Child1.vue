<style scoped>
/**스콥트를 사용하면 동일 클레스를 사용해도 v-가 생겨서 충돌을 피하게해준다 */
.main {
    border: 1px solid black;
    background-color: yellow;
}
</style>

<template>
    <div class="main">
        {{ msg }}
        <child11 />
        {{ msg }}
    </div>
</template>
<script>
import Child11 from "./Child11.vue";
export default {
    components: {
        Child11: Child11
    },
    data: function () {
        return {
            msg: "Child1"
        };
    }
};
</script>

