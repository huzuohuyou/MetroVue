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
      <Input
        v-model="formItem.question"
        type="textarea"
        :autosize="{minRows: 2,maxRows: 5}"
        placeholder="Enter something..."
      ></Input>
    </FormItem>
    <FormItem label="原因">
      <Input
        v-model="formItem.reason"
        type="textarea"
        :autosize="{minRows: 2,maxRows: 5}"
        placeholder="Enter something..."
      ></Input>
    </FormItem>
    <FormItem label="解决方案">
      <Input
        v-model="formItem.answer"
        type="textarea"
        :autosize="{minRows: 2,maxRows: 5}"
        placeholder="Enter something..."
      ></Input>
    </FormItem>
    <FormItem label="截图">
      <!-- <viewer style="height: 80px;">
        <img v-for="(item,index) in formItem.imageArray" :src="item" :key="index" height="100" />
      </viewer> -->
      <viewer :images="images" style="height: 800px;">
        <img v-for="item in images" :src="item.src" :key="item.index" height="100" />
      </viewer>
      <!-- <div v-for="(image,index) in formItem.imageArray" :key="index">
        <img :src="image" />
      </div>-->

      <!-- <MyUpload images="formItem.images" @func="getImagesFormSon"></MyUpload> -->
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formItem')">Submit</Button>
      <Button style="margin-left: 8px">Cancel</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  name: "EditRecord",
  data() {
    return {
      formItem: {
        date: "2020-01-17",
        phone: "",
        dept: "male",
        user: "",
        ptno: "",
        kind: "",
        role: "",
        type: "",
        question: "",
        reason: "",
        answer: "",
        imageArray: []
      },
      images: [
        
      ]
    };
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    },
    layerid: {
      type: String,
      default: ""
    },
    lydata: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  created() {
    this.$axios
      .get(
        "http://localhost:21021/api/services/app/Question/GetQuestion?id=" +
          this.info.id,
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        }
      )
      .then(res => {
        this.formItem = res.data.result;
        for (var i = 0; i < this.formItem.imageArray.length; i++) {
          this.images.push({ src: this.formItem.imageArray[i], index: i });
        }
        console.log( this.images)
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    handleSubmit() {
      // console.log(JSON.stringify(this.formItem))
      this.$axios
        .post(
          "http://localhost:21021/api/services/app/Question/UpdateRecord",
          JSON.stringify(this.formItem),
          {
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          }
        )
        .then(res => {
          console.log(res);
          this.$layer.close(this.layerid);
        })
        .catch(err => {
          console.log(err);
        });
    },
    onSubmit() {
      this.$layer.msg("提交成功", () => {
        this.lydata.info.name = this.form.name;
        this.$layer.close(this.layerid);
      });
    },
    cancel() {
      this.$layer.close(this.layerid);
    }
  },
  mounted() {
    this.form = this.info;
  }
  // methods: {

  //     handleSubmit() {
  //         // console.log(JSON.stringify(this.formItem))
  //         this.$axios.post('http://localhost:21021/api/services/app/Question/EditRecord'
  //             , JSON.stringify(this.formItem),
  //             {
  //                 headers: {
  //                     'Content-Type': 'application/json; charset=utf-8'
  //                 }
  //             })
  //             .then(res => {
  //                 console.log(res)
  //             })
  //             .catch(err => {
  //                 console.log(err)
  //             })

  //     }
  // }
};
</script>

<style lang="css" scoped>
@import "../../assets/content/css/iview.css";
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