<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style type="text/css">
            #wrapper{
              /*              width:720px;*/
              margin:40px auto 0;
            }

      h2{ 
        margin-bottom:10px;
      }
      #wrapper h1{
        color:#FFF;
        text-align:center;
        margin-bottom:20px;
      }

      #wrapper a{
        display:block;
        font-size:1.2em;
        padding-top:20px;
        color:#FFF;
        text-decoration:none;
        text-align:center;
      }

      /*      #tabContainer {
              width:700px;
              padding:15px;
              background-color:#2e2e2e;
              -moz-border-radius: 4px;
              border-radius: 4px; 
            }*/

      #tabs{
        height:30px;
        overflow:hidden;
      }

      #tabs > ul{
        font: 1em;
        list-style:none;
      }

      #tabs > ul > li{
        margin:0 2px 0 0;
        padding:7px 10px;
        display:block;
        float:left;
        color:#FFF;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        -moz-border-radius-topleft: 4px;
        -moz-border-radius-topright: 4px;
        -moz-border-radius-bottomright: 0px;
        -moz-border-radius-bottomleft: 0px;
        border-top-left-radius:4px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px; 
        background: #C9C9C9; /* old browsers */
        background: -moz-linear-gradient(top, #0C91EC 0%, #257AB6 100%); /* firefox */
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#0C91EC), color-stop(100%,#257AB6)); /* webkit */
      }

      #tabs > ul > li:hover{
        background: #FFFFFF; /* old browsers */
        background: -moz-linear-gradient(top, #FFFFFF 0%, #F3F3F3 10%, #F3F3F3 50%, #FFFFFF 100%); /* firefox */
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#FFFFFF), color-stop(10%,#F3F3F3), color-stop(50%,#F3F3F3), color-stop(100%,#FFFFFF)); /* webkit */
        cursor:pointer;
        color: #333;
      }

      #tabs > ul > li.tabActiveHeader{
        background: #FFFFFF; /* old browsers */
        background: -moz-linear-gradient(top, #FFFFFF 0%, #F3F3F3 10%, #F3F3F3 50%, #FFFFFF 100%); /* firefox */
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#FFFFFF), color-stop(10%,#F3F3F3), color-stop(50%,#F3F3F3), color-stop(100%,#FFFFFF)); /* webkit */
        cursor:pointer;
        color: #333;
      }

      #tabscontent {
        -moz-border-radius-topleft: 0px;
        -moz-border-radius-topright: 4px;
        -moz-border-radius-bottomright: 4px;
        -moz-border-radius-bottomleft: 4px;
        border-top-left-radius: 0px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px; 
        padding:10px 10px 25px;
        background: #FFFFFF; /* old browsers */
        background: -moz-linear-gradient(top, #FFFFFF 0%, #FFFFFF 90%, #e4e9ed 100%); /* firefox */
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#FFFFFF), color-stop(90%,#FFFFFF), color-stop(100%,#e4e9ed)); /* webkit */
        margin:0;
        color:#333;
      }

    </style>

    <script>
      window.onload=function() {

        // get tab container
        var container = document.getElementById("tabContainer");
        // set current tab
        var navitem = container.querySelector(".tabs ul li");
        //store which tab we are on
        var ident = navitem.id.split("_")[1];
        navitem.parentNode.setAttribute("data-current",ident);
        //set current tab with class of activetabheader
        navitem.setAttribute("class","tabActiveHeader");

        //hide two tab contents we don't need
        var pages = container.querySelectorAll(".tabpage");
        for (var i = 1; i < pages.length; i++) {
          pages[i].style.display="none";
        }

        //this adds click event to tabs
        var tabs = container.querySelectorAll(".tabs ul li");
        for (var i = 0; i < tabs.length; i++) {
          tabs[i].onclick=displayPage;
        }
      }

      // on click of one of tabs
      function displayPage() {
        var current = this.parentNode.getAttribute("data-current");
        //remove class of activetabheader and hide old contents
        document.getElementById("tabHeader_" + current).removeAttribute("class");
        document.getElementById("tabpage_" + current).style.display="none";

        var ident = this.id.split("_")[1];
        //add class of activetabheader to new active tab and show contents
        this.setAttribute("class","tabActiveHeader");
        document.getElementById("tabpage_" + ident).style.display="block";
        this.parentNode.setAttribute("data-current",ident);
      }
    </script>
  </head>
  <body>
    <div id="wrapper">
      <h1>Pure Javascript, HTML 5 &amp; CSS3 Tabs</h1>
      <div id="tabContainer">
        <div id="tabs">
          <ul>
            <li id="tabHeader_1">Page 1</li>
            <li id="tabHeader_2">Page 2</li>
            <li id="tabHeader_3">Page 3</li>
          </ul>
        </div>
        <div id="tabscontent">
          <div class="tabpage" id="tabpage_1">
            <h2>Page 1</h2>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum 
              erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.
              Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat 
              volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. </p>
          </div>
          <div class="tabpage" id="tabpage_2">
            <h2>Page 2</h2>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. </p>
            <p>Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus 
              lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. </p>
            <p> Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, 
              accumsan porttitor, facilisis luctus, metus. </p>
          </div>
          <div class="tabpage" id="tabpage_3">
            <h2>Page 3</h2>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
            <p>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris 
              placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, 
              elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.</p>
            <p>Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam 
              erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. </p>
          </div>
        </div>
      </div>
      <a href="http://www.my-html-codes.com/javascript-tabs-html-5-css3">Back to Tutorial</a> </div>
    <script>
      window.onload=function() {

        // get tab container
        var container = document.getElementById("tabContainer");
        var tabcon = document.getElementById("tabscontent");
        //alert(tabcon.childNodes.item(1));
        // set current tab
        var navitem = document.getElementById("tabHeader_1");
		
        //store which tab we are on
        var ident = navitem.id.split("_")[1];
        //alert(ident);
        navitem.parentNode.setAttribute("data-current",ident);
        //set current tab with class of activetabheader
        navitem.setAttribute("class","tabActiveHeader");

        //hide two tab contents we don't need
        var pages = tabcon.getElementsByTagName("div");
        for (var i = 1; i < pages.length; i++) {
          pages.item(i).style.display="none";
        };

        //this adds click event to tabs
        var tabs = container.getElementsByTagName("li");
        for (var i = 0; i < tabs.length; i++) {
          tabs[i].onclick=displayPage;
        }
      }

      // on click of one of tabs
      function displayPage() {
        var current = this.parentNode.getAttribute("data-current");
        //remove class of activetabheader and hide old contents
        document.getElementById("tabHeader_" + current).removeAttribute("class");
        document.getElementById("tabpage_" + current).style.display="none";

        var ident = this.id.split("_")[1];
        //add class of activetabheader to new active tab and show contents
        this.setAttribute("class","tabActiveHeader");
        document.getElementById("tabpage_" + ident).style.display="block";
        this.parentNode.setAttribute("data-current",ident);
      }  
    </script>
  </body>
</html>

