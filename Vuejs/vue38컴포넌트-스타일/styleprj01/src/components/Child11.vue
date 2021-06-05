            <style scoped>
.test {
    font-style: italic;
}
</style>
            <template>
    <div class="test">
        <h3>{{ msg }}</h3>
    </div>
</template>
<script cript>
export default {
    data: function () {
        return {
            msg: "Child - Child"
        };
    }
};
</script>