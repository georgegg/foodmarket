(function(){
  var f=void 0,h=null,j=!1,m,n=this;
  function p(a){
    a=a.split(".");
    for(var b=n,c;c=a.shift();)if(b[c]!=h)b=b[c];else return h;return b
    }
  function aa(a){
    var b=typeof a;
    if("object"==b)if(a){
      if(a instanceof Array)return"array";
      if(a instanceof Object)return b;
      var c=Object.prototype.toString.call(a);
      if("[object Window]"==c)return"object";
      if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";
      if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"
        }else return"null";
    else if("function"==b&&"undefined"==typeof a.call)return"object";
    return b
    }
    function q(a){
    return"string"==typeof a
    }
    var r="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),ba=0;
  function ca(a,b,c){
    return a.call.apply(a.bind,arguments)
    }
  function da(a,b,c){
    if(!a)throw Error();
    if(2<arguments.length){
      var d=Array.prototype.slice.call(arguments,2);
      return function(){
        var c=Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c,d);
        return a.apply(b,c)
        }
      }
    return function(){
    return a.apply(b,arguments)
    }
  }
function s(a,b,c){
  s=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;
  return s.apply(h,arguments)
  }
function v(a,b){
  var c=a.split("."),d=n;
  !(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);
  for(var e;c.length&&(e=c.shift());)!c.length&&b!==f?d[e]=b:d=d[e]?d[e]:d[e]={}
  }
  function w(a,b){
  function c(){}
  c.prototype=b.prototype;
  a.n=b.prototype;
  a.prototype=new c
  }
  Function.prototype.bind=Function.prototype.bind||function(a,b){
  if(1<arguments.length){
    var c=Array.prototype.slice.call(arguments,1);
    c.unshift(this,a);
    return s.apply(h,c)
    }
    return s(this,a)
  };
  
var x=Array.prototype,y=x.indexOf?function(a,b,c){
  return x.indexOf.call(a,b,c)
  }:function(a,b,c){
  c=c==h?0:0>c?Math.max(0,a.length+c):c;
  if(q(a))return!q(b)||1!=b.length?-1:a.indexOf(b,c);
  for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1
  },z=x.forEach?function(a,b,c){
  x.forEach.call(a,b,c)
  }:function(a,b,c){
  for(var d=a.length,e=q(a)?a.split(""):a,g=0;g<d;g++)g in e&&b.call(c,e[g],g,a)
    };
    
function ea(a,b,c){
  return 2>=arguments.length?x.slice.call(a,b):x.slice.call(a,b,c)
  };
  
var A,B,C,D;
function fa(){
  return n.navigator?n.navigator.userAgent:h
  }
  D=C=B=A=j;
var F;
if(F=fa()){
  var ga=n.navigator;
  A=0==F.indexOf("Opera");
  B=!A&&-1!=F.indexOf("MSIE");
  C=!A&&-1!=F.indexOf("WebKit");
  D=!A&&!C&&"Gecko"==ga.product
  }
  var G=B,H=D,ha=C;
function ia(){
  var a=n.document;
  return a?a.documentMode:f
  }
  var I;
  a:{
    var J="",K;
    if(A&&n.opera)var L=n.opera.version,J="function"==typeof L?L():L;
    else if(H?K=/rv\:([^\);]+)(\)|;)/:G?K=/MSIE\s+([^\);]+)(\)|;)/:ha&&(K=/WebKit\/(\S+)/),K)var ja=K.exec(fa()),J=ja?ja[1]:"";
    if(G){
      var ka=ia();
      if(ka>parseFloat(J)){
        I=String(ka);
        break a
      }
    }
    I=J
  }
  var la=I,ma={};
function na(a){
  if(!ma[a]){
    for(var b=0,c=String(la).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){
      var l=c[g]||"",k=d[g]||"",E=RegExp("(\\d*)(\\D*)","g"),Da=RegExp("(\\d*)(\\D*)","g");
      do{
        var t=E.exec(l)||["","",""],u=Da.exec(k)||["","",""];
        if(0==t[0].length&&0==u[0].length)break;
        b=((0==t[1].length?0:parseInt(t[1],10))<(0==u[1].length?0:parseInt(u[1],10))?-1:(0==t[1].length?0:parseInt(t[1],
          10))>(0==u[1].length?0:parseInt(u[1],10))?1:0)||((0==t[2].length)<(0==u[2].length)?-1:(0==t[2].length)>(0==u[2].length)?1:0)||(t[2]<u[2]?-1:t[2]>u[2]?1:0)
        }while(0==b)
    }
    ma[a]=0<=b
    }
  }
var oa=n.document,pa=!oa||!G?f:ia()||("CSS1Compat"==oa.compatMode?parseInt(la,10):5);
if(H||G){
  var M;
  if(M=G)M=G&&9<=pa;
  M||H&&na("1.9.1")
  }
  G&&na("9");
function qa(a,b,c){
  var d=document;
  c=c||d;
  a=a&&"*"!=a?a.toUpperCase():"";
  if(c.querySelectorAll&&c.querySelector&&(a||b))return c.querySelectorAll(a+(b?"."+b:""));
  if(b&&c.getElementsByClassName){
    c=c.getElementsByClassName(b);
    if(a){
      for(var d={},e=0,g=0,l;l=c[g];g++)a==l.nodeName&&(d[e++]=l);
      d.length=e;
      return d
      }
      return c
    }
    c=c.getElementsByTagName(a||"*");
  if(b){
    d={};
    
    for(g=e=0;l=c[g];g++)a=l.className,"function"==typeof a.split&&0<=y(a.split(/\s+/),b)&&(d[e++]=l);
    d.length=e;
    return d
    }
    return c
  };
  
function ra(){};

function N(){
  this.a=[];
  this.e={}
}
w(N,ra);
N.prototype.m=1;
N.prototype.d=0;
N.prototype.o=function(a,b){
  var c=this.e[a];
  if(c){
    this.d++;
    for(var d=ea(arguments,1),e=0,g=c.length;e<g;e++){
      var l=c[e];
      this.a[l+1].apply(this.a[l+2],d)
      }
      this.d--;
    if(this.b&&0==this.d)for(;c=this.b.pop();)if(0!=this.d)this.b||(this.b=[]),this.b.push(c);
      else if(d=this.a[c]){
      if(d=this.e[d])e=y(d,c),0<=e&&x.splice.call(d,e,1);
      delete this.a[c];
      delete this.a[c+1];
      delete this.a[c+2]
    }
    }
    };

var sa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function ta(a){
  if(O){
    O=j;
    var b=n.location;
    if(b){
      var c=b.href;
      if(c&&(c=(c=ta(c)[3]||h)&&decodeURIComponent(c))&&c!=b.hostname)throw O=!0,Error();
    }
  }
  return a.match(sa)
}
var O=ha;
function ua(a,b,c){
  if("array"==aa(b))for(var d=0;d<b.length;d++)ua(a,String(b[d]),c);else b!=h&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))
    };
    
var P=p("yt.dom.getNextId_");
if(!P){
  P=function(){
    return++va
    };
    
  v("yt.dom.getNextId_",P);
  var va=0
  };
  
function Q(a){
  if(a=a||window.event){
    for(var b in a)b in wa||(this[b]=a[b]);this.scale=a.scale;
    this.rotation=a.rotation;
    if((b=a.target||a.srcElement)&&3==b.nodeType)b=b.parentNode;
    this.target=b;
    if(b=a.relatedTarget)try{
      b=b.nodeName&&b
      }catch(c){
      b=h
      }else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);
    this.relatedTarget=b;
    this.clientX=a.clientX!=f?a.clientX:a.pageX;
    this.clientY=a.clientY!=f?a.clientY:a.pageY;
    if(document.body&&document.documentElement){
      b=document.body.scrollLeft+
      document.documentElement.scrollLeft;
      var d=document.body.scrollTop+document.documentElement.scrollTop;
      this.pageX=a.pageX!=f?a.pageX:a.clientX+b;
      this.pageY=a.pageY!=f?a.pageY:a.clientY+d
      }
      this.keyCode=a.keyCode?a.keyCode:a.which;
    this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);
    this.altKey=a.altKey;
    this.ctrlKey=a.ctrlKey;
    this.shiftKey=a.shiftKey;
    "MozMousePixelScroll"==this.type?(this.wheelDeltaX=a.axis==a.HORIZONTAL_AXIS?a.detail:0,this.wheelDeltaY=a.axis==a.HORIZONTAL_AXIS?0:a.detail):
    window.opera?(this.wheelDeltaX=0,this.wheelDeltaY=a.detail):0==a.wheelDelta%120?"WebkitTransform"in document.documentElement.style?window.a&&0==navigator.platform.indexOf("Mac")?(this.wheelDeltaX=a.wheelDeltaX/-30,this.wheelDeltaY=a.wheelDeltaY/-30):(this.wheelDeltaX=a.wheelDeltaX/-1.2,this.wheelDeltaY=a.wheelDeltaY/-1.2):(this.wheelDeltaX=0,this.wheelDeltaY=a.wheelDelta/-1.6):(this.wheelDeltaX=a.wheelDeltaX/-3,this.wheelDeltaY=a.wheelDeltaY/-3)
    }
  }
m=Q.prototype;
m.type="";
m.target=h;
m.relatedTarget=h;
m.currentTarget=h;
m.data=h;
m.keyCode=0;
m.charCode=0;
m.altKey=j;
m.ctrlKey=j;
m.shiftKey=j;
m.clientX=0;
m.clientY=0;
m.pageX=0;
m.pageY=0;
m.wheelDeltaX=0;
m.wheelDeltaY=0;
m.rotation=0;
m.scale=1;
var wa={
  stopPropagation:1,
  preventMouseEvent:1,
  preventManipulation:1,
  preventDefault:1,
  layerX:1,
  layerY:1,
  scale:1,
  rotation:1
};

var R=p("yt.events.listeners_")||{};

v("yt.events.listeners_",R);
var xa=p("yt.events.counter_")||{
  count:0
};

v("yt.events.counter_",xa);
function ya(a,b,c){
  if(a&&(a.addEventListener||a.attachEvent)){
    var d;
      a:{
      d=function(d){
        return d[0]==a&&d[1]==b&&d[2]==c&&d[4]==j
        };
        
      for(var e in R)if(d.call(f,R[e])){
        d=e;
        break a
      }
      d=f
      }
      if(!d){
      d=++xa.count+"";
      e=!(!("mouseenter"==b||"mouseleave"==b)||!a.addEventListener||"onmouseenter"in document);
      var g;
      g=e?function(d){
        d=new Q(d);
        var e;
          a:{
          e=d.relatedTarget;
          for(var g=0;e;){
            if(e==a)break a;
            e=e.parentNode;
            g++
          }
          e=h
          }
          if(!e)return d.currentTarget=a,d.type=b,c.call(a,d)
          }:function(b){
        b=new Q(b);
        b.currentTarget=a;
        return c.call(a,
          b)
        };
        
      R[d]=[a,b,c,g,j];
      a.addEventListener?"mouseenter"==b&&e?a.addEventListener("mouseover",g,j):"mouseleave"==b&&e?a.addEventListener("mouseout",g,j):"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style?a.addEventListener("MozMousePixelScroll",g,j):a.addEventListener(b,g,j):a.attachEvent("on"+b,g)
      }
    }
};

v("yt.config_",window.yt&&window.yt.config_||{});
v("yt.tokens_",window.yt&&window.yt.tokens_||{});
v("yt.globals_",window.yt&&window.yt.globals_||{});
v("yt.msgs_",window.yt&&window.yt.msgs_||{});
v("yt.timeouts_",window.yt&&window.yt.timeouts_||[]);
var za=window.yt&&window.yt.intervals_||[];
v("yt.intervals_",za);
function Aa(a){
  a=window.setInterval(a,250);
  za.push(a);
  return a
  };
  
var Ba=["corp.google.com","youtube.com","youtube-nocookie.com"];
var Ca=window.YTConfig||{};

function S(a){
  this.b=a||{};
  
  this.a={};
  
  this.a.width=640;
  this.a.height=390;
  this.a.title="";
  this.a.host=("https:"==document.location.protocol?"https:":"http:")+"//www.youtube.com"
  }
  var T=h;
function U(a,b){
  for(var c=[a.b,Ca,a.a],d=0;d<c.length;d++){
    var e=c[d][b];
    if(e!=f)return e
      }
      return h
  }
S.prototype.d=function(a){
  if(a.origin==U(this,"host")||RegExp("^https?://([a-z0-9-]{1,63}\\.)*("+Ba.join("|").replace(/\./g,".")+")(:[0-9]+)?([/?#]|$)","i").test(a.origin))a=JSON.parse(a.data),T[a.id].j(a)
    };
function V(a,b){
  this.b=b;
  this.d=this.a=h;
  this.h=this.id=0;
  this.e=h;
  var c=q(a)?document.getElementById(a):a;
  if(c){
    if("iframe"!=c.tagName.toLowerCase()){
      var d=document.createElement("div");
      d.innerHTML+=p("YT.embed_template");
      for(var d=qa("iframe",h,d),d=d.length?d[0]:h,e=0,g=c.attributes.length;e<g;e++)d.setAttribute(c.attributes[e].name,c.attributes[e].value);
      d.removeAttribute("width");
      d.removeAttribute("height");
      d.removeAttribute("src");
      d.setAttribute("title","YouTube "+U(this.b,"title"));
      d.height=
      U(this.b,"height");
      d.width=U(this.b,"width");
      e=this.i();
      e.enablejsapi=window.postMessage?1:0;
      window.location.host&&(e.origin=window.location.protocol+"//"+window.location.host);
      var g=U(this.b,"host")+this.k()+"?",l=[],k;
      for(k in e)ua(k,e[k],l);l[0]="";
      d.src=g+l.join("");
      this.d=c;
      (k=c.parentNode)&&k.replaceChild(d,c);
      c=d
      }
      this.a=c;
    this.id=this[r]||(this[r]=++ba);
    if(window.JSON&&window.postMessage){
      this.e=new N;
      c=this.b;
      k=this.id;
      T||(T={},ya(window,"message",s(c.d,c)));
      T[k]=this;
      this.h=Aa(s(this.l,this));
      ya(this.a,"load",s(function(){
        window.clearInterval(this.h);
        this.h=Aa(s(this.l,this))
        },this));
      var c=U(this.b,"events"),E;
      for(E in c)c.hasOwnProperty(E)&&this.addEventListener(E,c[E])
        }
      }
}
m=V.prototype;
m.z=function(){
  if(this.d){
    var a=this.a,b=a.parentNode;
    b&&b.replaceChild(this.d,a)
    }else(a=this.a)&&a.parentNode&&a.parentNode.removeChild(a)
    };
    
m.i=function(){
  return{}
};

m.l=function(){
  this.a&&this.a.contentWindow?Ea(this,{
    event:"listening"
  }):window.clearInterval(this.h)
  };
  
m.j=function(a){
  this.c(a.event,a)
  };
m.addEventListener=function(a,b){
  var c=b;
  "string"==typeof b&&(c=function(){
    window[b].apply(window,arguments)
    });
  var d=this.e,e=d.e[a];
  e||(e=d.e[a]=[]);
  var g=d.m;
  d.a[g]=a;
  d.a[g+1]=c;
  d.a[g+2]=f;
  d.m=g+3;
  e.push(g);
  W(this,"addEventListener",[a]);
  return this
  };
  
m.c=function(a,b){
  this.e.o(a,{
    target:this,
    data:b
  })
  };
  
function W(a,b,c){
  c=c||[];
  c=Array.prototype.slice.call(c);
  Ea(a,{
    event:"command",
    func:b,
    args:c
  })
  }
function Ea(a,b){
  b.id=a.id;
  var c=JSON.stringify(b),d=ta(a.a.src),e=d[1],g=d[2],l=d[3],d=d[4],k="";
  e&&(k+=e+":");
  l&&(k+="//",g&&(k+=g+"@"),k+=l,d&&(k+=":"+d));
  a.a.contentWindow.postMessage(c,k)
  }
  m.A=function(a,b){
  this.a.width=a;
  this.a.height=b;
  return this
  };
  
m.p=function(){
  return this.a
  };
  
var Fa={
  "0":"onEnded",
  1:"onPlaying",
  2:"onPaused",
  3:"onBuffering",
  5:"onVideoCued"
};

function Ga(a){
  S.call(this,a);
  this.a.title="video player";
  this.a.videoId=""
  }
  w(Ga,S);
function X(a,b){
  V.call(this,a,new Ga(b));
  this.g={};
  
  this.f={}
}
w(X,V);
m=X.prototype;
m.k=function(){
  return"/embed/"+U(this.b,"videoId")
  };
  
m.i=function(){
  return U(this.b,"playerVars")||{}
};
m.j=function(a){
  switch(a.event){
    case "onReady":
      window.clearInterval(this.h);
      this.c("onReady");
      break;
    case "onStateChange":
      var b=a.info.playerState;
      Y(this,a);
      this.c("onStateChange",b);
      -1!=b&&this.c(Fa[b]);
      break;
    case "onPlaybackQualityChange":
      Y(this,a);
      this.c("onPlaybackQualityChange",this.g.playbackQuality);
      break;
    case "onPlaybackRateChange":
      Y(this,a);
      this.c("onPlaybackRateChange",this.g.playbackRate);
      break;
    case "onError":
      this.c("onError",a.error);
      break;
    case "onApiChange":
      a=a.info||{};
      
      for(b in a)this.f[b]=
      a[b];this.c("onApiChange");
      break;
    case "infoDelivery":
      Y(this,a);
      break;
    case "initialDelivery":
      this.g={};
      
      this.f={};
      
      z(a.apiInterface,function(a){
      this[a]||(this[a]=0==a.search("cue")||0==a.search("load")?function(){
        this.g={};
        
        this.f={};
        
        W(this,a,arguments);
        return this
        }:0==a.search("get")||0==a.search("is")?function(){
        var b=0;
        0==a.search("get")?b=3:0==a.search("is")&&(b=2);
        return this.g[a.charAt(b).toLowerCase()+a.substr(b+1)]
        }:function(){
        W(this,a,arguments);
        return this
        })
      },this);
    Y(this,a);
      break;
    case "onFullScreenToggleRequest":
      this.c("onFullScreenToggleRequest");
      break;
    default:
      Y(this,a),this.c(a.event,a.info)
      }
    };

function Y(a,b){
  var c=b.info||{},d;
  for(d in c)a.g[d]=c[d]
    }
    m.w=function(){
  var a=this.a.cloneNode(j),b=this.g.videoData,c=U(this.b,"host");
  a.src=b&&b.video_id?c+"/embed/"+b.video_id:a.src;
  b=document.createElement("div");
  b.appendChild(a);
  return b.innerHTML
  };
  
m.v=function(a){
  return!this.f.namespaces?[]:!a?this.f.namespaces||[]:this.f[a].options||[]
  };
  
m.u=function(a,b){
  if(this.f.namespaces&&a&&b)return this.f[a][b]
    };
    
function Ha(a){
  S.call(this,a)
  }
  w(Ha,S);
function Z(a,b){
  V.call(this,a,new Ha(b))
  }
  w(Z,V);
function Ia(){
  var a;
  a=document;
  a=a.querySelectorAll&&a.querySelector?a.querySelectorAll(".youtube-subscribe-embed"):a.getElementsByClassName?a.getElementsByClassName("youtube-subscribe-embed"):qa("*","youtube-subscribe-embed",f);
  z(a,function(a){
    new Z(a)
    })
  }
  Z.prototype.j=function(a){
  a.width&&this.a.setAttribute("width",a.width)
  };
  
function Ja(a){
  S.call(this,a);
  this.a.host="https://www.youtube.com";
  this.a.title="upload widget";
  this.a.height=0.67*U(this,"width")
  }
  w(Ja,S);
function $(a,b){
  V.call(this,a,new Ja(b))
  }
  w($,V);
m=$.prototype;
m.k=function(){
  return"/upload_embed"
  };
  
m.i=function(){
  var a={},b=U(this.b,"webcamOnly");
  b!=h&&(a.webcam_only=b);
  return a
  };
  
m.c=function(a,b){
  $.n.c.call(this,a,b);
  "onApiReady"==a&&W(this,"hostWindowReady")
  };
  
m.q=function(a){
  W(this,"setVideoDescription",arguments)
  };
m.r=function(a){
  W(this,"setVideoKeywords",arguments)
  };
  
m.s=function(a){
  W(this,"setVideoPrivacy",arguments)
  };
  
m.t=function(a){
  W(this,"setVideoTitle",arguments)
  };
  
v("YT.PlayerState.ENDED",0);
v("YT.PlayerState.PLAYING",1);
v("YT.PlayerState.PAUSED",2);
v("YT.PlayerState.BUFFERING",3);
v("YT.PlayerState.CUED",5);
v("YT.UploadWidgetEvent.API_READY","onApiReady");
v("YT.UploadWidgetEvent.UPLOAD_SUCCESS","onUploadSuccess");
v("YT.UploadWidgetEvent.PROCESSING_COMPLETE","onProcessingComplete");
v("YT.UploadWidgetEvent.STATE_CHANGE","onStateChange");
v("YT.UploadWidgetState.IDLE",0);
v("YT.UploadWidgetState.PENDING",1);
v("YT.UploadWidgetState.ERROR",2);
v("YT.UploadWidgetState.PLAYBACK",3);
v("YT.UploadWidgetState.RECORDING",4);
v("YT.UploadWidgetState.STOPPED",5);
v("YT.SubscribeEmbed.setup",Ia);
v("YT.Player",X);
v("YT.UploadWidget",$);
V.prototype.destroy=V.prototype.z;
V.prototype.setSize=V.prototype.A;
V.prototype.getIframe=V.prototype.p;
V.prototype.addEventListener=V.prototype.addEventListener;
X.prototype.getVideoEmbedCode=X.prototype.w;
X.prototype.getOptions=X.prototype.v;
X.prototype.getOption=X.prototype.u;
$.prototype.setVideoDescription=$.prototype.q;
$.prototype.setVideoKeywords=$.prototype.r;
$.prototype.setVideoPrivacy=$.prototype.s;
$.prototype.setVideoTitle=$.prototype.t;
Ia();
var Ka=p("onYouTubeIframeAPIReady");
Ka&&Ka();
var La=p("onYouTubePlayerAPIReady");
La&&La();
})();
