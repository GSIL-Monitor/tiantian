(function(q,v){var z,m=q._AYWM;m&&"version"in m?z=m.gpa:(z=function(){var a=(+new Date).toString(36),b=Math.random().toString(36).substring(2,7);return a+b}(),m=q._AYWM={version:"1.02",gpa:z,collector:{}});var B=q[v]?q[v]:q[v]=[],w=Array.prototype,A=Object.prototype,K=A.toString,L=A.hasOwnProperty,x={},M=q.console?q.console:{log:function(){}},d={nativeKeys:Object.keys};d.slice=w.slice;d.isArray=Array.isArray||function(a){return"[object Array]"==K.call(a)};d.has=function(a,b){return L.call(a,b)};d.isObject=
function(a){return a===Object(a)};d.isFunction=function(a){return"function"===typeof a};var N=function(a){return d.isFunction(a)?a:function(b){return b[a]}};d.eachItem=function(a,b,c){if(null!=a&&a.length===+a.length)for(var d=0,f=a.length;d<f&&b.call(c,a[d],d,a)!==x;d++);};d.each=function(a,b,c){if(null!=a)if(w.forEach&&a.forEach===w.forEach)a.forEach(b,c);else if(a.length===+a.length)for(var e=0,f=a.length;e<f&&b.call(c,a[e],e,a)!==x;e++);else for(var k=d.keys(a),e=0,f=k.length;e<f&&b.call(c,a[k[e]],
k[e],a)!==x;e++);};d.keys=d.nativeKeys||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[],c;for(c in a)d.has(a,c)&&b.push(c);return b};d.sortedIndex=function(a,b,c,e){c=null==c?d.identity:N(c);b=c.call(e,b);for(var f=0,k=a.length;f<k;){var n=f+k>>>1;c.call(e,a[n])<b?f=n+1:k=n}return f};d.indexOf=function(a,b,c){if(null==a)return-1;var e=0,f=a.length;if(c)if("number"==typeof c)e=0>c?Math.max(0,f+c):c;else return e=d.sortedIndex(a,b),a[e]===b?e:-1;if(w.indexOf&&a.indexOf===
w.indexOf)return a.indexOf(b,c);for(;e<f;e++)if(a[e]===b)return e;return-1};d.extend=function(a){d.each(d.slice.call(arguments,1),function(b){if(b)for(var c in b)a[c]=b[c]});return a};d.clone=function(a){return d.isObject(a)?d.isArray(a)?a.slice():d.extend({},a):a};d.keys=Object.keys||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[],c;for(c in a)d.has(a,c)&&b.push(c);return b};d.values=function(a){for(var b=d.keys(a),c=b.length,e=Array(c),f=0;f<c;f++)e[f]=a[b[f]];return e};
d.encode=d.encodeParams=function(a){return encodeURIComponent(a)};d.trim=function(a){return a.replace(/(^\s*)|(\s*$)/g,"")};var p={getItem:function(a){return a?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:null},setItem:function(a,b,c,d,f,k){if(!a||/^(?:expires|max\-age|path|domain|secure)$/i.test(a))return!1;var n="";if(c)switch(c.constructor){case Number:n=Infinity===c?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":
"; max-age="+c;break;case String:n="; expires="+c;break;case Date:n="; expires="+c.toUTCString()}document.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+n+(f?"; domain="+f:"")+(d?"; path="+d:"")+(k?"; secure":"");return!0},removeItem:function(a,b,c){if(!this.hasItem(a))return!1;document.cookie=encodeURIComponent(a)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(c?"; domain="+c:"")+(b?"; path="+b:"");return!0},hasItem:function(a){return a?(new RegExp("(?:^|;\\s*)"+encodeURIComponent(a).replace(/[\-\.\+\*]/g,
"\\$&")+"\\s*\\=")).test(document.cookie):!1},keys:function(){for(var a=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),b=a.length,c=0;c<b;c++)a[c]=decodeURIComponent(a[c]);return a},set:function(a,b,c,d,f,k){a=encodeURIComponent(a)+"="+encodeURIComponent(b);c instanceof Date&&(a+="; expires="+c.toGMTString());d&&(a+="; path="+d);f&&(a+="; domain="+f);k&&(a+="; secure");document.cookie=a}},D;D=/(iphone|ios|android|mini|mobile|mobi|Nokia|Symbian|iPod|iPad|Windows\s+Phone|MQQBrowser|wp7|wp8|UCBrowser7|UCWEB|360\s+Aphone\s+Browser)/i.test(navigator.userAgent)?
!0:!1;var E="https:"===location.protocol?!0:!1,t;t=new Date;t.setTime(t.getTime()+31536E6);var r={domain:"",cookiepath:""},O={db:!0,sitecode:!0,userid:!0,userflag:!0},P={sitecode:"ao",evtcate:"ec",evtaction:"ea",evtlable:"el",evtvalue:"ev",externalsrc:"oc",sekeyword:"kw",searchengine:"se",sepayflag:"pf"},A=function(){this.gnum=this.gprice=this.gcate=this.gname=this.gid=this.sitecode=this.db="";this.og=[];this.promotion=this.paytype=this.orderstatus=this.ordermoney=this.orderid=this.ofristflag="";
this.cg=[];this.tag=this.convvalue=this.convid=this.convaction=this.convtype=this.keywords=this.userflag=this.userid="";this.kv=[];this.carttype=this.audeducation=this.audgender=this.audage=this.evtvalue=this.evtlable=this.evtaction=this.evtcate="";this.other={};this.sepayflag=this.sekeyword=this.searchengine=this.externalsrc=this.gbrand=this.gcatename=this.gdisrate=this.gdisprice=this.gorgprice=this.gimgurl=""},u={og:{ogcate:"",ogname:"",ogid:"",ognum:"",ogprice:"",ogurl:"",ogimgurl:"",ogorgprice:"",
ogdisprice:"",ogdisrate:"",ogcatename:"",ogbrand:""},cg:{cgcate:"",cgname:"",cgid:"",cgnum:"",cgprice:"",cgurl:"",cgimgurl:"",cgorgprice:"",cgdisprice:"",cgdisrate:"",cgcatename:"",cgbrand:""},kv:{tkey:"",tvalue:""},isArray:function(a){return u.og.hasOwnProperty(a)?"og":u.cg.hasOwnProperty(a)?"cg":u.kv.hasOwnProperty(a)?"kv":!1},setArrItem:function(a){return d.clone(u[a])}},F=["gcate","gname","gid","gnum","gprice"],G=["audage","audgender","audeducation"],H=["convtype","convaction","convid","convvalue"],
I="userid userflag orderid ordermoney og ofristflag product person cg keywords promotion oval orderstatus paytype".split(" "),Q="gimgurl gorgprice gbrand gcatename gdisprice gdisrate".split(" "),R="ogurl ogimgurl ogorgprice ogdisprice ogdisrate ogcatename ogbrand".split(" "),S="cgurl cgimgurl cgorgprice cgdisprice cgdisrate cgcatename cgbrand".split(" "),h=function(a){return function(b){return void 0==b[a]?"":d.encodeParams(b[a])}},J=function(a){return function(b){var c=[],e=[],f="og"===a?R:S;d.each(b[a]||
[],function(b,k){if(d.isObject(b)){var g,h,y={};"og"===a?(g=void 0==b.ogid?"":d.encodeParams(b.ogid),h=void 0==b.ogname?"":d.encodeParams(b.ogname)):(g=void 0==b.cgid?"":d.encodeParams(b.cgid),h=void 0==b.cgname?"":d.encodeParams(b.cgname));var l=[];d.each(b,function(a,b){if(0>d.indexOf(f,b)){var c=void 0==a||"ogname"==b||"cgname"==b?"":d.encodeParams(a);l.push(c);if("ogprice"===b||"cgprice"===b)y[b]=d.encodeParams(a)}else y[b]=d.encodeParams(a)});c.push(d.encodeParams(l.join("^")));if(""!==g||""!==
h)y.id=g,y.value=h,e.push(y)}});b=void 0==b.carttype?"":d.encodeParams(b.carttype);var k="";"cg"==a&&(k=""!==b||""!==c.join("|")?b+"@":"");return{val:d.encodeParams(k+c.join("|")),ds:e}}},T={userid:h("userid"),userflag:h("userflag"),orderid:h("orderid"),ordermoney:h("ordermoney"),ofristflag:h("ofristflag"),person:function(a){var b=[],c=1;d.each(G,function(e,f){var k=void 0==a[e]?"":d.encodeParams(a[e]);""!==k&&(c=0);b.push(k)});return c?"":d.encodeParams(b.join("|"))},keywords:h("keywords"),promotion:h("promotion"),
oval:h("oval"),orderstatus:h("orderstatus"),paytype:h("paytype"),product:function(a){var b=[],c=1;d.each(F,function(e,f){var k=void 0==a[e]||"gname"===e?"":d.encodeParams(a[e]);""!==k&&(c=0);b.push(k)});return{val:c?"":d.encodeParams(b.join("^"))}},cg:J("cg"),og:J("og")},U=function(){var a=document.createElement("a"),b="hash hostname origin href pathname protocol port search".split(" "),c=function(c){var e={};a.href=c;d.each(b,function(b){e[b]=String(a[b])});a.href="";return e},e={isUrlString:function(a){if(!a)return!1;
a=String(a);return 0==a.indexOf("http://")||0==a.indexOf("https://")},genUrlObject:function(a){return e.isUrlString(a)?c(a):null}};return e}(),C=function(){var a=[["baidu.com","wd","bdclkid"],["baidu.com","word","bdclkid"],["google.cn","q","gclid"],["google.com","q","gclid"],["360.cn","q",""],["so.360.cn","q",""],["so.com","q",""],["sogou.com","query",""],["soso.com","w",""],["youdao.com","q",""],["bing.com","q",""],["yahoo.com","p",""]],b=function(a,b){if(!a||!a[0])return!1;if(a[0]===b||0==b.indexOf(a[0]+
"."))return!0;var c=b.indexOf(".");if(!c)return M.log("unknown host.",b),!1;c=b.substring(c);return c=="."+a[0]||0<=c.indexOf("."+a[0]+".")?!0:!1},c=function(a,b){if(!b)return null;var c=b.split("&"),e=null;d.eachItem(c,function(b){b=d.trim(b);if(0==b.indexOf(d.encode(a)+"=")||0==b.indexOf(a+"="))return e=b.split("=")[1],x});return e},e=function(a,b,d){if(!a||!b&&!d)return null;var e=null;if(b&&(b=0==b.indexOf("?")?b.substring(1):b,e=c(a,b),null!=e))return e;d&&(d=0==d.indexOf("#")?d.substring(1):
d,e=c(a,d));return e};return{matchSE:function(c){if(!c)return null;c=String(c);var e=null;d.eachItem(a,function(a){if(b(a,c))return e=a,x});return e},matchQueryKW:function(a,b,c){return e(a[1],b,c)},matchPayflag:function(a,b,c){return e(a[2],b,c)}}}(),g=m.collector[v]||(m.collector[v]=new A),V=(E?"https":"http")+"://idigger.qtmojo.com/main/adftrack",l={setCkWmv:function(){var a="",b=document.domain,c=r.domain;"www."==b.substring(0,4)&&(b=b.substring(4,b.length));if(""==r.domain)a=b;else{var c="www."==
c.substring(0,4)?c.substring(3,c.length):c,b="."==c.substring(0,1)?"."+b:b,d=c.length,f=b.length;0<=f-d&&b.indexOf(c)==f-d&&(a=c)}r.domain=a.toLowerCase();b="";c=r.cookiepath;d=document.location.pathname;""==c||"/"==c?b=c:0==c.indexOf("/")&&(c.lastIndexOf("/")!=c.length-1&&(c+="/"),0==d.indexOf(c)&&(b=c));r.cookiepath=b;p.getItem("__wmv")?p.getItem("__wms")?p.setItem("__wmv",p.getItem("__wmv"),t,b,a):(c=p.getItem("__wmv").split("."),2<=c.length&&(c[1]=parseInt(c[1],10)+1,p.setItem("__wmv",c.join("."),
t,b,a))):p.setItem("__wmv",Math.floor(+new Date/1E3)+".1",t,b,a)},pushHandler:function(a){d.each(a||B,function(a,c){l.setWmColledtor(a)})},setWmColledtor:function(a){if(d.isArray(a))if("_trackPoint"===a[0])l.trackPoint();else{var b=u.isArray(a[0]);if(b){for(var c=u.setArrItem(b),e=0;e<a.length;e+=2){var f=a[e];""===c[f]&&(c[f]=a[e+1]||"")}g[b].push(c)}else{b=!1;for(e=0;e<a.length;e+=2)g.hasOwnProperty(a[e])&&"other"!==a[e]?g[a[e]]=a[e+1]||"":r.hasOwnProperty(a[e])?(r[a[e]]=d.trim(a[e+1]||""),b=!0):
g.other[a[e]]=a[e+1]||"";b&&l.setCkWmv()}}},clearWmColledtor:function(){d.each(g,function(a,b){d.isFunction(a)||O.hasOwnProperty(b)||(d.isArray(a)?g[b]=[]:g[b]="")});g.other={}},IFCCookieMapping:function(){var a=document.createElement("iframe");a.src="http://wmcdn.qtmojo.cn/adxcm_base_idigger.htm";a.style.width="0px";a.style.height="0px";a.style.marginheight="0px";a.style.marginwidth="0px";a.style.position="absolute";a.style.top="-100px";a.style.left="-100px";a.style.FRAMEBORDER="0";a.style.SCROLLING=
"0";a.style.display="none";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)},getParams:function(){var a=[],b=[];d.each(I,function(c,e){var f=T[c](g);d.isObject(f)?(void 0!==f.val&&a.push(f.val),f.ds&&(b=b.concat(f.ds))):a.push(f)});return{ecms:d.encodeParams(a.join("`")),ds:b}},getAcvParams:function(){var a=[];d.each(H,function(b,c){a.push(d.encodeParams(b+"|"+h(b)(g)))});return a.join(";")},getTkvParams:function(){var a=[];d.each(g.kv,function(b,c){a.push(h("tkey")(b)+
"|"+h("tvalue")(b))});return a.join(";")},getOtherParams:function(){var a=[],b="",c=[].concat(I,H,F,G,["carttype"],Q);d.each(g,function(e,f){if(!(d.isArray(e)||d.isFunction(e)||-1<d.indexOf(c,f)))if("other"===f){var g=[];d.each(e,function(a,b){g.push(d.encodeParams(d.encodeParams(b)+"|"+d.encodeParams(void 0==a?"":a)))});b="&ctd="+g.join(";")}else a.push((P[f]||f)+"="+d.encodeParams(void 0==e?"":e))});return{ctd:b,val:a.join("&")}},getWmvParams:function(){var a="",b="",c="1";p.getItem("__wmv")?(c=
p.getItem("__wmv").split("."),2<=c.length&&(a=c[0],b=c[1]),c=0):c="1";"1"==b&&(c="1");return"&cct="+a+"&sc="+b+"&nv="+c},getDefaultParams:function(){return l.getHostParams()},getHostParams:function(){var a=document.location;return"&hn="+d.encodeParams(a.hostname)+"&pu="+d.encodeParams(a.pathname+a.search)+"&rf="+d.encodeParams(document.referrer)},genSEMParams:function(){var a=U.genUrlObject(document.referrer);if(a){var b=[],c=C.matchSE(a.hostname);if(c){b.push("se="+d.encode(c[0]));g.searchengine=
d.encode(c[0]);var e=C.matchQueryKW(c,a.search,a.hash);e?(b.push("kw="+d.encode(e)),g.sekeyword=d.encode(e)):g.sekeyword="";(a=C.matchPayflag(c,a.search,a.hash))?(b.push("pf="+d.encode(a)),g.sepayflag=d.encode(a)):g.sepayflag=""}else g.searchengine="",g.sekeyword="",g.sepayflag=""}},getEcompParams:function(){var a;a="&epi="+h("gid")(g);a+="&epn="+h("gname")(g);a+="&epu="+d.encodeParams(document.location.pathname+document.location.search);a+="&hn="+d.encodeParams(document.location.hostname);a+="&imu="+
h("gimgurl")(g);a+="&pri="+h("gprice")(g);a+="&opri="+h("gorgprice")(g);a+="&dpri="+h("gdisprice")(g);a+="&drat="+h("gdisrate")(g);a+="&brd="+h("gbrand")(g);a+="&cid="+h("gcate")(g);a+="&cnm="+h("gcatename")(g);return a+="&prom="+h("promotion")(g)},send:function(a){var b=new Image;b.onload=b.onerror=function(){};b.src=V+a+"&gpa="+z+"&r="+(new Date).getTime()},trackPoint:function(){D||E||l.IFCCookieMapping();l.genSEMParams();var a=l.getParams(),b=a.ds||[],a=a.ecms||"",c=l.getAcvParams(),e=l.getTkvParams(),
f=l.getWmvParams(),k=l.getOtherParams(),n=k.ctd;l.send("?lt=i&"+k.val+n+"&acv="+c+"&ecm="+a+"&tkv="+e+f+l.getDefaultParams());var a=void 0==g.sitecode?"":d.encodeParams(g.sitecode),m="?lt=p&db="+(void 0==g.db?"":d.encodeParams(g.db)),m=m+("&ao="+a);d.each(b,function(a,b){if(d.isObject(a)){var c=m,e=d.encodeParams(a.id||""),f=d.encodeParams(a.ogurl||""||a.cgurl||"");""!=e&&""!=f&&(c=c+("&epi="+e)+("&epn="+d.encodeParams(a.value||"")),c+="&epu="+f,c+="&hn="+d.encodeParams(document.location.hostname),
c+="&imu="+d.encodeParams(a.ogimgurl||""||a.cgimgurl||""),c+="&pri="+d.encodeParams(a.ogprice||""||a.cgprice||""),c+="&opri="+d.encodeParams(a.ogorgprice||""||a.cgorgprice||""),c+="&dpri="+d.encodeParams(a.ogdisprice||""||a.cgdisprice||""),c+="&drat="+d.encodeParams(a.ogdisrate||""||a.cgdisrate||""),c+="&brd="+d.encodeParams(a.ogbrand||""||a.cgbrand||""),c+="&cid="+d.encodeParams(a.ogcate||""||a.cgcate||""),c+="&cnm="+d.encodeParams(a.ogcatename||""||a.cgcatename||""),c+=n,l.send(c))}});""!=h("gid")(g)&&
(m+=l.getEcompParams()+n,l.send(m));l.clearWmColledtor()}};l.pushHandler();l.setCkWmv();p.getItem("__wms")||(m=new Date,m.setTime(m.getTime()+18E5),p.setItem("__wms",Math.floor(+m/1E3),m));var W=B.push;B.push=function(a){var b=d.slice.call(arguments,0);W.call(this,b);l&&l.pushHandler(b)}})(window,"_wmmq");