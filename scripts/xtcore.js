/***@licence*Copyright2014ATInternet,AllRightsReserved.*ATInternetTag4.5.7*/window.Xtconf={xt1:'.ultima-fixations.com',xtLogDom:'.xiti.com/hit.xiti',xtfirst:false,xt2:'1',xt3:365,xt4sec:'20',xt4rss:'20',xt4epr:'20',xt4erec:'20',xt4adi:'20',xt4adc:'20',xt4al:'20',xtsds:'https://logs1406',xtsd:'http://logc406',xtsts:0,xtsite:function(x){return x},xtscript:'',xtpreview:false,xtnocookies:false,xtcode:'',xt46:'1',xt50:'1',xt48:'',xt54:false,xt58:false,xtdocl:false,xttredir:500,xtkwv:'xtmc',xtkwp:'xtnp'};
window.Xtcore=function(){function C(b){return"undefined"!==typeof b}function H(b){var e=typeof b;if("object"!==e||null===b)return"string"===e&&(b=encodeURIComponent('"'+b+'"')),String(b);var a,c,d=[],g=b&&b.constructor==Array;for(a in b)c=b[a],e=typeof c,b.hasOwnProperty(a)&&"function"!==e&&("string"===e?c=encodeURIComponent('"'+c.replace(/[^\\]"/g,'\\"')+'"'):"object"===e&&null!==c&&(c=H(c)),d.push((g?"":encodeURIComponent('"'+a+'":'))+String(c)));return(g?"[":"{")+String(d)+(g?"]":"}")}function oa(b){return b.replace(/%3C/g,
"<").replace(/%3E/g,">").replace(/[<>]/g,"")}function m(b,a,f,c,d){a=0===d?a:encodeURIComponent(a);pa||(j.cookie=b+"="+a+";expires="+f.toGMTString()+";path=/"+c)}function l(b,e,f){var c;try{c=T.location.href}catch(d){c=a.location.href}e=null===e||!C(e)?oa(c.toLowerCase().replace(/%3d/g,"=")):e;if(0<e.indexOf(b+"=")){e=e.substr(1);b=e.substr(e.indexOf(b+"="));if(2!=f){if(1!=f)try{b=decodeURIComponent(b)}catch(g){b=unescape(b)}if(e=b.match(/(\[[^\]]*\])/g)){c="";for(var p=0,k=e.length;p<k;p++)c=e[p].substring(1,
e[p].length-1),b=b.replace(c,encodeURIComponent(c))}}e=b.indexOf("#");c=b.search(/&.[^&]+=/gi);c=-1==c?-1==e?b.length:e:0<e&&e<c?e:c;return 1==f?decodeURIComponent(b.substring(b.indexOf("=")+1,c)):2==f?b.substring(b.indexOf("=")+1,c):b.substring(b.indexOf("=")+1,c).replace("&","%26")}return null}function D(b,a,f,c){if((0===qa||3==qa||"C"!=b)&&"P"!=b)Xa&&"0"==aa&&"F"==b?(v=v.replace("&p="+l("p",v,2),""),v=v.replace("&s2="+l("s2",v),""),AT_hit.isPreviewOrPrerendering()||AT_hit.sendTag(b,null,null,a),
Xa=!1):AT_hit.sendTag(b,a);null!==f&&(C(f)&&"M"!=b)&&(""===c||null===c?j.location=f:window.open(f,"xfen","").focus())}function E(b){b-=100*Math.floor(b/100);return 10>b?"0"+b:b}function U(b){return Math.floor(Math.random()*Math.pow(10,b))}var ra=this;ra.sentHits=[];var h=Xtconf.xt1,Ya=Xtconf.xtscript,Za=window.xtLogDom=Xtconf.xtLogDom,vb=Xtconf.xtpreview,$a=Xtconf.xtfirst,pa=Xtconf.xtnocookies,ab=Xtconf.xtcode,aa=Xtconf.xt46,sa=Xtconf.xt50,bb=Xtconf.xt48,wb=Xtconf.xt54,xb=Xtconf.xt58,yb=Xtconf.xtdocl,
zb=Xtconf.xt2,Ab=Xtconf.xt3;window.xttredir=Xtconf.xttredir;var cb=Xtconf.xtkwv,db=Xtconf.xtkwp,ta=[],z=[];z.sec=Xtconf.xt4sec;z.rss=Xtconf.xt4rss;z.epr=Xtconf.xt4epr;z.erec=Xtconf.xt4erec;z.adi=Xtconf.xt4adi;z.adc=Xtconf.xt4adc;z.al=Xtconf.xt4al;z.es=Xtconf.xt4epr;z.ad=Xtconf.xt4adi;var ua=[],Xa=!0,O=!1,va=null,a=window.xw=window,j=window.xd=document,s=navigator,Bb=window.xtv=a.xtczv?"4.5.7-"+a.xtczv:"4.5.7",h=window.xt1=a.xtdmc?";domain="+a.xtdmc:""!==h?";domain="+h:"",T=a.xtnv?a.xtnv:
j,Cb=window.xt7=a.xtsdi?a.xtsdi:a.xtsd?a.xtsd+Za:("https:"===j.location.protocol?Xtconf.xtsds:Xtconf.xtsd)+Za,ba=a.xtsts?a.xtsts:Xtconf.xtsts,ca="";if(wb){var wa="";try{wa=T.location.href}catch($b){wa=a.location.href}var Db=/#.*/,xa=null;try{xa=wa.match(Db)[0]}catch(ac){xa=null}ca=(ca=xa)?"&sta="+encodeURIComponent(oa(ca)):""}var eb=a.xtcustom?H(a.xtcustom):"",I=window.xt8=a.xtsite?a.xtsite:0,Eb=window.xt9=a.xtn2?"&s2="+a.xtn2:"",Fb=window.xt8b=(0===I?"":"s="+I)+(0===ba?"":0===I?"sts="+ba:"&sts="+
ba),J=window.xtp=a.xtpage?a.xtpage:"",fb=a.xto_force?a.xto_force.toLowerCase():null,K="redirect"===I,Gb=a.xtdi?"&di="+a.xtdi:"",Hb=a.xtidp?"&idpays="+a.xtidp:"",Ib=a.xtidprov?"&idprov="+a.xtidprov:"",r=a.xtparam?a.xtparam:"",aa=a.xtnopage&&"1"===a.xtnopage?"0":aa,sa=a.xtergo&&"0"===a.xtergo?"0":sa,qa=a.scriptOnClickZone&&"1"===sa?a.scriptOnClickZone:0,Jb=""!==ab?"&code="+ab:"",ya=[],da=[],V=[],ea=[],za=[],M=[];window.xt44=a.xtprod_load?"&pdtl="+a.xtprod_load:"";a.addEventListener?a.addEventListener("unload",
function(){},!1):a.attachEvent&&a.attachEvent("onunload",function(){});j.addEventListener?(j.addEventListener("keydown",function(){O=!0},!1),j.addEventListener("keyup",function(){O=!1},!1)):j.attachEvent&&(j.attachEvent("onkeydown",function(){O=!0}),j.attachEvent("onkeyup",function(){O=!1}));var Kb=a.roimt&&0>r.indexOf("&roimt",0)?"&roimt="+a.roimt:"",Lb=0>r.indexOf("&mc=",0)?a.xtmc?"&mc="+a.xtmc:l(cb)?"&mc="+l(cb):l("xtmc")?"&mc="+l("xtmc"):"":"",Mb=l("xtcr")?"&mcrg="+l("xtcr"):"",Nb=a.xtac&&0>r.indexOf("&ac=",
0)?"&ac="+a.xtac:"",Ob=a.xtat&&0>r.indexOf("&at=",0)?"&at="+a.xtat:"",gb=a.xtan&&0>r.indexOf("&an=",0)?"&an="+a.xtan:"",Pb=0>r.indexOf("&np=",0)?a.xtnp?"&np="+a.xtnp:l(db)?"&np="+l(db):l("xtnp")?"&np="+l("xtnp"):"":"",Qb=a.xtprm&&0>r.indexOf("&x",0)?a.xtprm:"",r=r+(Kb+Lb+Mb+Nb+(""!==gb?gb:Ob)+Pb+Qb+ca),Aa="";try{Aa=top.document.referrer}catch(bc){try{Aa=T.referrer}catch(cc){}}var fa=screen,u=window.xt21=new Date,hb=u.getTime()/36E5,n=window.xtf1=function(b,a){if(pa)return null;a=null!==a&&C(a)?a:
"0";var f=RegExp("(?:^| )"+b+"=([^;]+)").exec(j.cookie)||null;f&&(f=oa(f[1]),"1"!=a&&(f=decodeURIComponent(f)));return f};window.xt_addchain=function(b,a){var f=a?a:"abmv",c=!ta[f]?0:ta[f];c++;r+="&"+f+""+c+"="+b;ta[f]=c};"function"===typeof xt_adch&&xt_adch();window.wck=m;window.xtf3=l;window.xt_mvt=function(b,a,f,c,d){if(c)for(var g=1;g<c.length+1;g++)f+="&"+(d?d:"abmv")+g+"="+c[g-1];D("","&p="+b+"&s2="+a+"&abmvc="+f+"&type=mvt")};window.xt_med=function(b,a,f,c,d,g,p,k){c="F"==b&&(null===c||!C(c))?
"":"M"==b?"&a="+c+"&m1="+d+"&m2="+g+"&m3="+p+"&m4="+k:"&clic="+c+(p?"&stc="+H(p):"");D(b,"&s2="+a+"&p="+f+c,d,g)};if($a=window.xtfirst=-1!=s.userAgent.indexOf("Safari")&&0>s.userAgent.indexOf("Chrome")||-1!=s.userAgent.indexOf("iPhone")||-1!=s.userAgent.indexOf("iPod")||-1!=s.userAgent.indexOf("iPad")||$a||a.xtidc||pa){var F=a.xtidc?a.xtidc:n("xtidc"),G;null===F&&(F=Math.floor(999999*Math.random()),G=u.getYear(),100>G&&(G+=2E3),100<G&&2E3>G&&(G+=1900),F=E(G)+""+E(u.getMonth())+""+E(u.getDate())+""+
E(u.getHours())+""+E(u.getMinutes())+""+E(u.getSeconds())+""+F);var Ba=new Date;Ba.setTime(Ba.getTime()+31536E7);m("xtidc",F,Ba,h,1);var ib=n("xtidc"),F=F+(!a.xtidc&&(null===ib||ib!=F)?"-NO":"")}window.xt_ad=function(b,e,f,c){D("AT","&atc="+b+"&type=AT&patc="+J+"&s2atc="+a.xtn2+(c?"&stc="+H(c):""),e,f)};window.xt_adi=function(b,a,f){D("AT","&ati="+b+"&type=AT",a,f)};window.xt_adc=function(b,e,f,c,d){D("AT","&atc="+e+"&type=AT&patc="+J+"&s2atc="+a.xtn2+(d?"&stc="+H(d):""));return AT_click.do_navig(b,
f,c?"_blank":null,!0)};window.xt_click=function(b,a,f,c,d,g,p,k){d="F"==a&&(null===d||!C(d))?"":"&clic="+d+(k?"&stc="+H(k):"");D(a,"&s2="+f+"&p="+c+d);return AT_click.do_navig(b,g,p?"_blank":null,!0)};window.xt_form=function(b,a,f,c,d,g,p){d="F"==a&&(null===d||!C(d))?"":"&clic="+d+(p?"&stc="+H(p):"");D(a,"&s2="+f+"&p="+c+d);return AT_click.do_submit(b,!0,g)};window.xt_rm=function(b,e,f,c,d,g,p,k,q,l,m,h,j,n){d="&p="+f+"&s2="+e+"&type="+b+"&a="+c+"&m5="+m+"&m6="+h+(null!==d&&"0"!=d?"&"+d:"")+(null!==
p&&"pause"!=c&&"stop"!=c?"&m1="+p+"&"+k+"&m3="+q+"&m4="+l+"&m7="+j+"&m8="+n+"&prich="+J+"&s2rich="+a.xtn2:"")+(null!==g&&"0"!=g&&null!==p?"&rfsh="+g:"")+"&rn="+U(10);D(b,d);d=new Date;if(null!==g&&"0"!=g&&("play"==c||"play&buf=1"==c||"refresh"==c)){M[b]&&18E5<d.getTime()-M[b]&&(V[b]=0);if(("play"==c||"play&buf=1"==c)&&!V[b])V[b]=d.getTime()/1E3,ea[b]=parseInt(p),c=Math.floor(g),c=1500<c?1500:5>c?5:c,ya[b]=c,da[b]=c,M[b]=!1;else if("refresh"==c&&("live"==h||!ea[b]||300<ea[b]&&2>100*ya[b]/ea[b]))c=
M[b]?za[b]:d.getTime()/1E3-V[b],5>100*da[b]/(c+30)&&(da[b]=5*((c+30)/100)),M[b]&&(M[b]=!1,V[b]=d.getTime()/1E3-za[b]),za[b]=c;ua[b]=a.setTimeout("xt_rm('"+b+"','"+e+"','"+f+"','refresh','0','"+g+"',null,'"+k+"','"+q+"','"+l+"','"+m+"','"+h+"')",1E3*da[b])}else if(("pause"==c||"stop"==c)&&null!==ua)a.clearTimeout(ua[b]),"stop"==c?ya[b]=0:M[b]=d.getTime()};var Ca=window.xtidpg=E(u.getHours())+""+E(u.getMinutes())+""+E(u.getSeconds())+""+U(7),t=0,jb=0;window.xt16="";window.xt_addProduct=function(b,e,
f,c,d,g){t++;a.xt16+="&pdt"+t+"=";a.xt16+=b?b+"::":"";a.xt16+=e?e:"";a.xt16+=f?"&qte"+t+"="+f:"";a.xt16+=c?"&mt"+t+"="+c:"";a.xt16+=d?"&dsc"+t+"="+d:"";a.xt16+=g?"&pcode"+t+"="+g:""};window.xt_rd=U;window.xt_addProduct_v2=function(b,e,f,c,d,g,p,k,q){t++;a.xt16+="&pdt"+t+"=";a.xt16+=b?b+"::":"";a.xt16+=e?e:"";a.xt16+=f?"&qte"+t+"="+f:"";a.xt16+=c?"&mt"+t+"="+c:"";a.xt16+=d?"&mtht"+t+"="+d:"";a.xt16+=g?"&dsc"+t+"="+g:"";a.xt16+=p?"&dscht"+t+"="+p:"";a.xt16+=q?"&roimt"+t+"="+q:"";a.xt16+=k?"&pcode"+
t+"="+k:""};window.xt_addProduct_load=function(b,e,f){e&&(jb++,a.xt44+=1==jb?"&pdtl=":"|",a.xt44+=b?b+"::":"",a.xt44+=e,a.xt44+=f?";"+f:"")};"function"==typeof xt_cart?xt_cart():a.xt16="";window.xt_ParseUrl=function(b,a,f){AT_hit.sendTag(f?"F":"old",a)};window.xt_ParseUrl3=function(b,a,f,c,d){AT_hit.sendTag("&ati="==d?"AT":"PDT",a,null,"&type="+("&ati="==d?"AT":"PDT"))};window.AT_click={id:0,objs:[],elem:function(b,a,f,c,d,g,p,k){var q={};q.urlDest=d;q.type=b;q.n2=a;q.label=f;q.typeClick=c;q.target=
g;q.submit=!1!==d;q.redir=!C(p)?!0:p;q.xtcust=C(k)?"&stc="+H(k):"";return q},addListener:function(b,a,f){window.addEventListener?b.addEventListener(a,f,!1):window.attachEvent&&b.attachEvent("on"+a,f)},tag:function(b,a,f,c,d,g,p,k,q){if(b&&"function"==typeof b.setAttribute)this.addElem(b,a,f,c,d,g,p,k,q);else if("object"==typeof b)for(var l in b)b.hasOwnProperty(l)&&"function"==typeof b[l].setAttribute&&this.addElem(b[l],a,f,c,d,g,p,k,q)},addElem:function(b,a,f,c,d,g,p,k,l){this.id++;b.setAttribute("data-xtclickid",
this.id);this.objs[this.id]=this.elem(a,f,c,d,g,p,k,l);"FORM"!=b.nodeName?this.addListener(b,"click",this.on_click_submit):this.addListener(b,"submit",this.on_click_submit)},on_click_submit:function(b){try{var a=b.target||b.srcElement,f=a.getAttribute("data-xtclickid"),c={},d="",g=b.defaultPrevented,l=window.AT_click;if(!f)for(var k=a.parentNode;k;){if(k.getAttribute("data-xtclickid")){f=k.getAttribute("data-xtclickid");break}k=k.parentNode}f&&(c=l.objs[f],"AT"!=c.type?d+="&p="+c.label+("C"==c.type?
"&clic="+c.typeClick+c.xtcust:""):"AT"==c.type&&(d+="&type=AT&atc="+c.label+c.xtcust),D(c.type,"&s2="+c.n2+d),!g&&c.redir&&(b.preventDefault(),"FORM"!=a.nodeName?l.do_navig(a,c.urlDest,c.target):l.do_submit(a,null,c.submit)))}catch(q){}},do_navig:function(b,e,f,c){var d=null;if("A"!=b.nodeName)for(var g=b.parentNode;g;){if("A"==g.nodeName){d=g;break}g=g.parentNode}else d=b;if(d){if(d.target=f||b.target||"_self",d.href=e||b.href||d.href,!c||c&&!O)if(b=d.href.split('"').join('\\"'),0>d.href.indexOf("mailto:"))if("_self"==
d.target.toLowerCase()){if(setTimeout('self.location.href="'+b+'"',a.xttredir),c)return!1}else if("_top"==d.target.toLowerCase()){if(setTimeout('top.location.href="'+b+'"',a.xttredir),c)return!1}else if("_parent"==d.target.toLowerCase()){if(setTimeout('parent.location.href="'+b+'"',a.xttredir),c)return!1}else return!0;else if(setTimeout('AT_click.mail_to("'+b+'");',a.xttredir),c)return!1}else if(e||b.href)if(e=e?e:b.href,0>e.indexOf("mailto:"))if("_blank"==f)setTimeout('(xw.open("'+e.split('"').join('\\"')+
'","_blank")).focus();',1);else{if(setTimeout('self.location.href="'+e.split('"').join('\\"')+'"',a.xttredir),c)return!1}else if(setTimeout('AT_click.mail_to("'+e.split('"').join('\\"')+'");',a.xttredir),c)return!1;if(c)return O=!1,!0},do_submit:function(a,e,f){if(f&&(setTimeout(function(){a.submit()},500),e&&f))return!1},mail_to:function(a){window.location=a}};window.AT_hit={first:!0,referrer:("acc_dir"==l("xtref")?"":null!==l("xtref")?l("xtref"):"acc_dir"==n("xtref")?"":n("xtref")||Aa.replace(/[<>]/g,
"")||"").replace(/[<>]/g,"").substring(0,1600),parse:function(a,e,f,c){var d=[""];if(1600>=e.length)d[0]=e;else{a=AT_hit.first&&"F"==a?Ca:Ca.substring(0,6)+U(8);var g="",p="",k,q={};k=[];var h=0;0<=e.indexOf("&ref=")&&(g=e.substring(e.indexOf("&ref=")),e=e.replace(g,""));if(c)for(var m in c)if(c.hasOwnProperty(m)&&0<=e.indexOf("&"+m+"=")&&1600<(p=l(m,e,2)).length)e=e.replace("&"+m+"="+p,""),k=RegExp("["+c[m]+"]","gi"),q[m]=p.replace(/&/g,"%26").split(k);k=RegExp("["+f+"]","gi");k=e.split(k);for(var j in k)k.hasOwnProperty(j)&&
(1600>=d[h].length+k[j].length+1?d[h]+=""!==k[j]?"&"+k[j]:"":(d.push(""),h++,d[h]=1600>k[j].length?d[h]+(""!==k[j]?"&"+k[j]:""):d[h]+("&mherr=1&"+k[j].substring(0,1600))));for(var n in q)if(q.hasOwnProperty(n)){e="&"+n+"=";f=!1;m=q[n].length;for(j=0;j<m;j++)1600>=d[h].length+q[n][j].length+1?(f||(d[h]+=e,f=!0),d[h]+=""!==q[n][j]?q[n][j]+("stc"===n&&m-1===j?"":c[n]):""):(d.push(e),f=!0,h++,d[h]=1600>q[n][j].length?d[h]+(""!==q[n][j]?q[n][j]+("stc"===n&&m-1===j?"":c[n]):""):d[h]+("mherr=1"+c[n]))}g&&
(1600>=d[h].length+g.length||(d.push(""),h++),d[h]+=g);for(c=0;c<d.length;c++)d[c]="&mh="+(c+1)+"-"+d.length+"-"+a+d[c]}return d},sendTag:function(b,e,f,c){var d=[];f=f||Rb+Fb;f+=a.xtfirst?"&idclient="+F:"";b=b||"F";e=e||v;e+=(c?c:"")+"&vtag="+Bb+AT_hit.localHour()+AT_hit.resolution();AT_hit.first&&"F"==b&&(e+=eb?"&stc="+eb:"",e+="&ref="+AT_hit.referrer.replace(/&/g,"$"));"C"===b&&(e+="&pclick="+J+"&s2click="+(a.xtn2?a.xtn2:""));d=AT_hit.parse(b,e,"&",{ati:",",atc:",",pdtl:"|",stc:",",dz:"|"});for(e=
0;e<d.length;e++)AT_hit.loadImage(f+d[e]);AT_hit.first&&("F"==b&&""!==Ya)&&AT_hit.loadFile("script",Ya,!0,"text/javascript");"F"==b&&(AT_hit.first=!1)},loadImage:function(a){var e=new Image;e.src=a;ra.sentHits instanceof Array&&ra.sentHits.push(a);e.onload=function(){e.onload=null}},loadFile:function(a,e,f,c,d){a=document.createElement(a);a.type=c;a.async=f;a.src=e;(d||document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]||document.getElementsByTagName("script")[0].parentNode).insertBefore(a,
null)},localHour:function(a){a=a?a:new Date;return"&hl="+a.getHours()+"x"+a.getMinutes()+"x"+a.getSeconds()},resolution:function(){if(4<=parseFloat(s.appVersion))try{var a;a="undefined"!==typeof window.devicePixelRatio?window.devicePixelRatio:1;return"&r="+fa.width*a+"x"+fa.height*a+"x"+fa.pixelDepth+"x"+fa.colorDepth}catch(e){}return""},prerenderDisplaying:function(){AT_hit.first&&(AT_hit.sendTag("F"),""!==xt44&&AT_hit.sendTag("PDT",xt44,null,"&type=PDT&p="+J+(a.xt_pageID?"&pid="+a.xt_pageID+"&pchap="+
(a.xt_chap||"")+"&pidt="+(a.xt_pageDate||""):"")))},isPreviewOrPrerendering:function(){return window.navigator&&"preview"===window.navigator.loadPurpose&&-1!=s.userAgent.indexOf("Safari")&&0>s.userAgent.indexOf("Chrome")?(vb&&(AT_hit.sendTag("F",null,null,"&pvw=1"),""!==xt44&&AT_hit.sendTag("PDT",xt44,null,"&type=PDT&p="+J+(a.xt_pageID?"&pid="+a.xt_pageID+"&pchap="+(a.xt_chap||"")+"&pidt="+(a.xt_pageDate||""):""))),!0):"prerender"==j.webkitVisibilityState?(j.addEventListener("webkitvisibilitychange",
AT_hit.prerenderDisplaying,!1),!0):!1}};if(0!==I||0!==ba||K){var W="";if(""!==bb){W=n("xtvid");W||(va=W=u.getTime()+""+U(6));var Da=new Date;Da.setMinutes(Da.getMinutes()+30);m("xtvid",W,Da,"",1)}window.xtvid=W;var kb=Xtconf.xtsite("xtor"),Ea=Xtconf.xtsite("xtdate"),lb=Xtconf.xtsite("xtocl"),Fa=Xtconf.xtsite("xtan"),Ga=Xtconf.xtsite("xtat"),X=Xtconf.xtsite("xtant"),N=l("xtor"),Ha=l("xtdt"),w=l("xtan"),x=l("xtat"),Ia=l("an",r),Ja=l("at",r),mb=l("ac",r),nb=n(lb),Ka=n("xtgo"),La=n("xtord"),ob=n("xtvrn"),
Y=null!==nb?nb:"$",Sb="0"===Ka?La:null,Ma=null!==Ka?Ka:"0",ga=null!==ob?ob:"$",pb=u.getTime()/6E4,Z=null!==Ha&&(l("xts")==I||K)?30>pb-Ha&&0<=pb-Ha?"2":"1":Ma,Tb="1"==Ma?"&pgt="+La:"1"==Z&&null!==N?"&pgt="+N:"",P=null!==fb?fb:null!==N&&"0"==Z?N:!K?Sb:null,P=0>Y.indexOf("$"+P+"$")||"$"==Y?P:null,B="0"==Z?P:"2"==Ma?La:"2"==Z?N:null,Q,Na;null!==B?(Na=B.substring(0,B.indexOf("-")),Q=z[Na]):Q="1";if(null===Q||!C(Q))Q=z.ad;null===w&&!K&&(w=n("xtanrd"));null===x&&!K&&(x=n("xtatrd"));var qb=n(Fa),rb=n(Ga),
ha=n(X),A=new Date,y=window.xt29=new Date,Oa=new Date;K?A.setTime(A.getTime()+3E4):A.setTime(A.getTime()+864E5*Q);Oa.setTime(Oa.getTime()+18E5);y.setTime(y.getTime()+864E5*Ab);var Pa=null!==w?w.indexOf("-"):0,Qa=null!==x?x.indexOf("-"):0,sb=null!==Ia?"":null!==w&&0<Pa?"&ac="+w.substring(0,Pa)+"&ant=0&an="+w.substring(Pa+1,w.length):null!==qb?"&anc="+qb+"&anct="+ha:"",Ub=null!==Ja?"":null!==x&&0<Qa?"&ac="+x.substring(0,Qa)+"&ant=0&at="+x.substring(Qa+1,x.length):null!==rb?"&attc="+rb+"&anct="+ha:"",
L=0>ga.indexOf("$"+I+"$")?"&vrn=1":"",Vb=null!==l("xtatc")&&null===l("atc",r)?"&atc="+l("xtatc"):"";""!==L&&m("xtvrn",141>ga.length?ga+I+"$":ga.substring(0,141),y,h,0);L+=null===P?"":"&xto="+P;L+=(""!==sb?sb:Ub)+Tb+Vb;null!==Ia?(m(Fa,mb+"-"+Ia,y,h,1),m(X,"1",y,h,1)):null!==w&&"1"!=ha&&(m(Fa,w,y,h,1),m(X,"0",y,h,1));null!==Ja?(m(Ga,mb+"-"+Ja,y,h,1),m(X,"1",y,h,1)):null!==x&&"1"!=ha&&(m(Ga,x,y,h,1),m(X,"0",y,h,1));var Ra=n(kb),$=n(Ea),$=(/[a-zA-Z]/.test($)?(new Date($)).getTime()/36E5:parseFloat(n(Ea)))||
(new Date).getTime()/36E5,Wb=0<=Math.floor(hb-$)?Math.floor(hb-$):0,L=L+(null===Ra?"":"&xtor="+Ra+"&roinbh="+Wb);if(K)m("xtgo",Z,A,h,1),null!==N&&m("xtord",N,A,h,1),null!==w&&m("xtanrd",w,A,h,1),null!==x&&m("xtatrd",x,A,h,1),m("xtref",AT_hit.referrer?AT_hit.referrer.replace(/&/g,"$"):"acc_dir",A,h,0),a.xtloc&&(T.location=a.xtloc);else{null!==B&&(0>Y.indexOf("$"+encodeURIComponent(B)+"$")||"$"==Y)&&m(lb,Y+B+"$",Oa,h,1);var ia=s.appName+" "+s.appVersion,R=ia.indexOf("MSIE"),S;0<=R?(S=parseInt(ia.substr(R+
5)),R=!0):(S=parseFloat(s.appVersion),R=!1);var Xb=0<=ia.indexOf("Netscape"),Yb=0<=ia.indexOf("Mac"),Sa=0<=s.userAgent.indexOf("Opera"),ja="",tb="",Ta="",Ua="";if(R&&5<=S&&!Yb&&!Sa&&!K)try{j.body.addBehavior("#default#clientCaps"),ja="&cn="+j.body.connectionType,ja+="&ul="+j.body.UserLanguage,j.body.addBehavior("#default#homePage"),tb=j.body.isHomePage(location.href)?"&hm=1":"&hm=0",Ua="&re="+j.body.offsetWidth+"x"+j.body.offsetHeight}catch(dc){}else 5<=S&&(Ua="&re="+a.innerWidth+"x"+a.innerHeight);
Xb&&4<=S||Sa?Ta="&lng="+s.language:R&&(4<=S&&!Sa)&&(Ta="&lng="+s.userLanguage);m("xtord","",u,h,1);if(null!==B&&(null===Ra||"1"==zb))m(kb,B,A,h,1),m(Ea,u.getTime()/36E5,A,h,1);var Zb=yb?"&docl="+encodeURIComponent(T.location.href.replace(/&/g,"#ec#")):"",v=Eb+"&p="+J+Gb+Hb+Ib+L+Zb+Jb+r+ja+tb+Ta+"&idp="+Ca,Va=n("xtvalCZ",1);if(null!==Va){var v=v+Va.replace("&c=","&current=").replace("&b=","&before=").replace("&a=","&after="),Wa=new Date;Wa.setTime(Wa.getTime()-36E5);m("xtvalCZ",Va,Wa,h,1)}var Rb=window.Xt_id=
Cb+"?",ka=n("xtide");if(null!==B)switch(Na.toLowerCase()){case "erec":case "epr":case "es":var la=null;try{var ma=B.match(/(\[[^\]]*\])|([^\-]+)|(-)/g),ub=0,na;for(na in ma)"-"==ma[na]&&ub++,5==ub&&"-"!=ma[na]&&(la=ma[na])}catch(ec){la=null}null!==la&&(ka=la,m("xtide",ka,y,"",1))}v+="&jv="+(s.javaEnabled()?"1":"0")+Ua+xt16+(null!==ka?"&ide="+ka:"");va&&(v+="&lnk="+bb+"&vid="+va);"0"!=aa&&!AT_hit.isPreviewOrPrerendering()&&(AT_hit.sendTag("F"),""!==xt44&&AT_hit.sendTag("PDT",xt44,null,"&type=PDT&p="+
J+(a.xt_pageID?"&pid="+a.xt_pageID+"&pchap="+(a.xt_chap||"")+"&pidt="+(a.xt_pageDate||""):"")))}}0<qa&&"function"==typeof xtNodesload&&(xb?a.addEventListener?a.addEventListener("load",xtNodesload,!1):a.attachEvent&&a.attachEvent("onload",xtNodesload):xtNodesload())};window.attag=new Xtcore;
