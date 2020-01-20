<template>
    <div class="contenter"><Input v-model="value13" @keyup.enter.native="handleSubmit">
        <Select v-model="select3" slot="prepend" style="width: 80px">
            <Option value="Question">问题</Option>
            <Option value="Phone">电话</Option>
            <Option value="Dept">科室</Option>
        </Select>
        <Button slot="append" icon="ios-search" @click="handleSubmit()"></Button>
        </Input>
    </div>
</template>
<script>
    export default {
        name: 'MultiFilter',
        data() {
            return {
                value13: '',
                select3: 'Question'
            }
        },
        methods: {

            handleSubmit() {
                this.$axios.post('http://localhost:21021/api/services/app/Question/SearchQuestion'
                    , JSON.stringify({ 'value': this.value13, 'select': this.select3 }),
                    {
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8'
                        }
                    })
                    .then(res => {
                        this.$emit('func', res.data.result)
                    })
                    .catch(err => {
                        console.log(err)
                    })

            }
        }
    }
</script>
<style lang="css" scoped>
    .contenter {
        width: 100%;
        margin-right: auto;
        margin-bottom: 10px;
        margin-left: auto;
    }
</style>