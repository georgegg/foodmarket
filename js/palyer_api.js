if (!window['YT']) {
  var YT = {};

}
if (!YT.Player) {
  (function(){
    var s = 'http:' + '//s.ytimg.com/yts/jsbin/www-widgetapi-vflsofjNm.js';
    var a = document.createElement('script');
    a.src = s;
    a.async = true;
    var b = document.getElementsByTagName('script')[0];
    b.parentNode.insertBefore(a, b);
    YT.embed_template = "\u003ciframe width=\"425\" height=\"344\" src=\"\" frameborder=\"0\" allowfullscreen\u003e\u003c\/iframe\u003e";
  })();
}