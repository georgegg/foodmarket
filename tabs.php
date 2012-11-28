<div id="Tabs">
<ul>
<li id="li_tab1" onclick="tab('tab1')" ><a>Tab 1</a></li>
<li id="li_tab2" onclick="tab('tab2')" ><a>Tab 1</a></li>
</ul>
<div id="Content_Area">
<div id="tab1">
<p>This is the text for tab 1</p>
</div>

<div id="tab2" style="display: none;"> <!– We set its display as none because we don’t want to make this
tab visible by default. The only visible/active tab should be Tab 1 until the visitor clicks on Tab 2. –>
<p>This is the text for tab 2.</p>
</div>
</div> <!– End of Content_Area Div –>
</div> <!– End of Tabs Div –>

<script type="text/javascript">
function tab(tab) {
document.getElementById('tab1').style.display = 'none';
document.getElementById('tab2').style.display = 'none';
document.getElementById('li tab1').setAttribute("class", "");
document.getElementById('li tab2').setAttribute("class", "");
document.getElementById(tab).style.display = 'block';
document.getElementById('li_'+tab).setAttribute("class", "active");
}
</script>