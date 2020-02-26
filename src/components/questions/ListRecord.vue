<template>
  <div class="contenter">
    <download-excel
      class="export-excel-wrapper"
      :data="json_data"
      :fields="json_fields"
      name="周报_吴海龙.xls"
    >
      <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
      <Button type="primary"  size="small">导出本周周报</Button>
       <Button  size="small">导出全部周报</Button>
    </download-excel>

    <div>
      <MultiFilter @func="getMsgFormSon"></MultiFilter>
    </div>
    <Table border :columns="columns7" :data="data6"></Table>
  </div>
</template>
<script>
import EditRecord from "@/components/questions/EditRecord";
import MultiFilter from "@/components/filters/MultiFilter";
export default {
  components: {
    MultiFilter
  },
  data() {
    return {
      columns7: [
        {
          title: "问题",
          key: "question"
        },
        {
          title: "原因",
          key: "reason"
        },
        {
          title: "解决方案",
          key: "answer"
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "View"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "Delete"
              )
            ]);
          }
        }
      ],
      data6: [],
      json_fields: {
        "类别": "typeName", //常规字段
        "工作内容": "content"
      },
      json_data: [],
      json_meta: [
        [
          {
            " key ": " charset ",
            " value ": " utf- 8 "
          }
        ]
      ]
    };
  },
  methods: {
    show(index) {
      // alert(this.data6[index].date)
      // this.$layer.alert("找不到对象！");
      this.$layer.iframe({
        content: {
          title: "信息",
          content: EditRecord, //传递的组件对象
          parent: this, //当前的vue对象
          data: {
            info: { id: this.data6[index].id }
          } //props
        },
        area: ["800px", "600px"],
        title: "title"
      });
    },

    getMsgFormSon(data) {
      this.data6 = data;
      console.log(this.data6);
    }
  },
  created() {
    this.$axios
      .get("http://localhost:21021/api/services/app/Question/GetAllQuestion")
      .then(res => {
        this.data6 = res.data.result;
      })
      .catch(err => {
        console.log(err);
      });

    this.$axios
      .get(
        "http://localhost:21021/api/services/app/Question/GetThisWeekQuestion"
      )
      .then(res => {
        this.json_data = res.data.result;
        console.log(this.json_data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="css" scoped>
@import "../../assets/content/css/iview.css";
</style>
<style lang="css" scoped>
.contenter {
  width: 70%;
  margin-top: 10px;
  margin-right: auto;
  margin-bottom: auto;
  margin-left: auto;
}
</style>