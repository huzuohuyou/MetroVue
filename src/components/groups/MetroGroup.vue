<template>
    <div id="MetroGroup" class="container-fluid">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="metro span12">
                    <div class="metro-sections">
                        <MetroItems v-for="todo in todos" :key="todo.id" :todo="todo"></MetroItems>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    let nextTodoId = 0;
    import MetroItems from '@/components/groups/MetroItems';
    export default {
        name: 'MetroGroup',
        components: {
            MetroItems,
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                todos: [
                    {
                        id: nextTodoId++,
                        title: "运维记录",
                        items: [
                        //     {
                        //     id: 'home',
                        //     href: './tiles-templates.html',
                        //     src: "/static/metro-tiles.jpg",
                        //     label: 'Nothing',
                        //     text: 'Nobody ',
                        //     wide: false
                        // },
                        {
                            id: 'addRecord',
                            href: './tiles-templates.html',
                            src: '/static/appbar.png',
                            label: '添加记录',
                            text: '',
                            wide: true
                        },
                        {
                            id: 'listRecord',
                            href: './tiles-templates.html',
                            src: '/static/My Apps.png',
                            label: '搜索记录',
                            text: '',
                            wide: true
                        }]
                    },
                    {
                        // id: nextTodoId++,
                        // title: "hello world2",
                        // items: [{
                        //     id: 'home4',
                        //     href: './tiles-templates.html',
                        //     src: "/static/metro-tiles.jpg",
                        //     label: 'Tiles Templates111',
                        //     text: 'List of all tile templates: ',
                        //     wide: false
                        // },
                        // {
                        //     id: 'home5',
                        //     href: './tiles-templates.html',
                        //     src: '/static/appbar.png',
                        //     label: 'Tiles Templates222',
                        //     text: 'List of all tile templates: square, wide, widepeek, with images or text only.',
                        //     wide: true
                        // },
                        // {
                        //     id: 'home6',
                        //     href: './tiles-templates.html',
                        //     src: '/static/My Apps.png',
                        //     label: 'Tiles Templates333',
                        //     text: '9999.',
                        //     wide: true
                        // }]
                    }

                ]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<style lang="css" scoped>
    @import 'http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700';

    @import '../../assets/content/css/bootstrap.css';
    @import '../../assets/content/css/bootstrap-responsive.css';
    @import '../../assets/content/css/bootmetro.css';
    @import '../../assets/content/css/bootmetro-tiles.css';
    @import '../../assets/content/css/bootmetro-charms.css';
    @import '../../assets/content/css/metro-ui-light.css';
    @import '../../assets/content/css/icomoon.css';

    @import '../../assets/content/css/demo.css';
    @import '../../assets/scripts/google-code-prettify/prettify.css';
</style>