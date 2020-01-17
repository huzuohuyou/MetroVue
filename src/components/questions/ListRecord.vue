<template>
    <div class="contenter">
        <Table border :columns="columns7" :data="data6"></Table>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                columns7: [
                    
                    {
                        title: '问题',
                        key: 'question'
                    },
                    {
                        title: '原因',
                        key: 'reason'
                    },
                    {
                        title: '解决方案',
                        key: 'answer'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data6: [

                ]
            }
        },
        methods: {
            // show(index) {
            //     this.$Modal.info({
            //         title: 'User Info',
            //         content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
            //     })
            // },
            // remove(index) {
            //     this.data6.splice(index, 1);
            // }
        },
        created() {
            this.$axios.get('http://localhost:21021/api/services/app/Question/GetAllQuestion')
                .then(res => {
                    console.log(res.data.result)
                    this.data6 = res.data.result;
                })
                .catch(err => {
                    console.log(err)
                })
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