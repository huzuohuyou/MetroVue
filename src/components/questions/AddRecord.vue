<template>
    <Form :model="formItem" :label-width="80" class="contenter">
        <FormItem label="日期">
            <Row>
                <Col span="11">
                    <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                </Col>
                <Col span="2" style="text-align: center">电话</Col>
                <Col span="11">
                <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="科室，病区">
            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Select">
            <Select v-model="formItem.select">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="DatePicker">
            <Row>
                <Col span="11">
                <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="区分">
            <RadioGroup v-model="formItem.radio">
                <Radio label="male">门诊</Radio>
                <Radio label="female">住院</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="类别">
            <CheckboxGroup v-model="formItem.checkbox">
                <Checkbox label="咨询"></Checkbox>
                <Checkbox label="解锁"></Checkbox>
                <Checkbox label="权限"></Checkbox>
                <Checkbox label="现场"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="Switch">
            <i-switch v-model="formItem.switch" size="large">
                <span slot="open">On</span>
                <span slot="close">Off</span>
            </i-switch>
        </FormItem>
        <FormItem label="Slider">
            <Slider v-model="formItem.slider" range></Slider>
        </FormItem>
        <FormItem label="Text">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem>
            <Button type="primary">Submit</Button>
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
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
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