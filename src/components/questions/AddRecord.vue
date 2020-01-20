<template>
    <Form :model="formItem" :label-width="80" class="contenter">
        <FormItem label="日期">
            <Row>
                <Col span="11">
                <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                </Col>
                <Col span="2" style="text-align: center">电话</Col>
                <Col span="11">
                <Input v-model="formItem.phone" placeholder="Enter something..."></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="科室，病区">
            <Input v-model="formItem.dept" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="工号，密码">
            <Input v-model="formItem.user" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="患者编号">
            <Input v-model="formItem.ptno" placeholder="Enter something..."></Input>
        </FormItem>

        <FormItem label="区分">
            <RadioGroup v-model="formItem.kind">
                <Radio label="1">门诊</Radio>
                <Radio label="2">住院</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="医护">
            <RadioGroup v-model="formItem.role">
                <Radio label="1">医生</Radio>
                <Radio label="2">护士</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="类别">
            <RadioGroup v-model="formItem.type">
                <Radio label="1">咨询</Radio>
                <Radio label="2">解锁</Radio>
                <Radio label="3">权限</Radio>
                <Radio label="4">现场</Radio>
            </RadioGroup>
        </FormItem>

        <FormItem label="问题">
            <Input v-model="formItem.question" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="原因">
            <Input v-model="formItem.reason" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="解决方案">
            <Input v-model="formItem.answer" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formItem')">Submit</Button>
            <Button style="margin-left: 8px">Cancel</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        name: 'AddRecord',
        data() {
            return {
                formItem: {
                    date: '2020-01-17',
                    phone: '',
                    dept: 'male',
                    user: '',
                    ptno: '',
                    kind: 1,
                    role: 1,
                    type: 1,
                    question: '',
                    reason: '',
                    answer: ''
                }
            }
        },
        methods: {

            handleSubmit() {
                // console.log(JSON.stringify(this.formItem))
                this.$axios.post('http://localhost:21021/api/services/app/Question/AddRecord'
                    , JSON.stringify(this.formItem),
                    {
                        headers: {
                            'Content-Type': 'application/json-patch+json; charset=utf-8'
                        }
                    })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })

            }
        }

    }
</script>

<style lang="css" scoped>
    @import '../../assets/content/css/iview.css';
</style>
<style lang="css" scoped>
    .contenter {
        width: 70%;
        margin-top: 40px;
        margin-right: auto;
        margin-bottom: auto;
        margin-left: auto;
    }
</style>