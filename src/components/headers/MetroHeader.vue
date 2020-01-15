<template>
    <div id="MetroHeader" class="container-fluid">
        <div class="row-fluid">
            <div class="span8">
                <div id="header-container">
                    <a id="backbutton" class="win-backbutton" href="./index.html"></a>
                    <h5>BootMetro</h5>
                    <div class="dropdown">
                        <a class="header-dropdown dropdown-toggle accent-color" data-toggle="dropdown" href="#">
                            Start
                            <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="./hub.html">Hub</a></li>
                            <li><a href="./tiles-templates.html">Tile Templates</a></li>
                            <li><a href="./listviews.html">ListViews</a></li>
                            <li><a href="./appbar-demo.html">Demo App-Bar</a></li>
                            <li><a href="./table.html">Demo Table</a></li>
                            <li><a href="./icons.html">Icons</a></li>
                            <li><a href="./scaffolding.html">Bootstrap Scaffolding</a></li>
                            <li><a href="./base-css.html">Bootstrap Base CSS</a></li>
                            <li><a href="./components.html">Bootstrap Components</a></li>
                            <li><a href="./javascript.html">Bootstrap Javascript</a></li>
                            <li class="divider"></li>
                            <li><a href="./index.html">Home</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="top-info" class="pull-right">
                <a href="#" class="pull-left">
                    <div class="top-info-block">
                        <h3>FirstName</h3>
                        <h4>LastName</h4>
                    </div>
                    <div class="top-info-block">
                        <b class="icon-user"></b>
                    </div>
                </a>
                <hr class="separator pull-left" />
                <a id="settings" class="pull-left" href="#">
                    <b class="icon-settings"></b>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'MetroHeader',
        data() {
            return {

            }
        },
        created() {


        },
    }
</script>


<style lang="css">
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



<script type="text/javascript" src="../../assets/scripts/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="../../assets/scripts/google-code-prettify/prettify.js"></script>
<script type="text/javascript" src="../../assets/scripts/jquery.mousewheel.js"></script>
<script type="text/javascript" src="../../assets/scripts/jquery.scrollTo.js"></script>
<script type="text/javascript" src="../../assets/scripts/bootstrap.min.js"></script>
<script type="text/javascript" src="../../assets/scripts/bootmetro.js"></script>
<script type="text/javascript" src="../../assets/scripts/bootmetro-charms.js"></script>
<script type="text/javascript" src="../../assets/scripts/demo.js"></script>
<script type="text/javascript" src="../../assets/scripts/holder.js"></script>