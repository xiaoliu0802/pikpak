var ce=Object.defineProperty;var U=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))de.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))pe.call(t,o)&&H(e,o,t[o]);return e};import{d as P,u as me,r as v,o as K,a as G,b as k,c as Y,w as c,e as i,f as n,N as _e,g as fe,h as ge,z as he,i as ve,j as ke,k as Z,l as ye,m as we,n as Ee,p as Fe,q as xe,s as w,t as Ae,v as Ne,x as Ie,y as f,A as b,B as Ce,C as Pe,D as C,E as g,F as q,G as be,H as De,I as D,L as Le,J as X,K as $e,M as Se,O as Oe,P as Be,Q as Te,R as Re,S as Ve,T as Me,U as Q,V as je,W as ze,X as Je,Y as Ue,Z as He,_ as We,$ as Ke,a0 as Ge,a1 as Ye,a2 as Ze,a3 as qe}from"./vendor.64da71ad.js";const Xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};Xe();const Qe=P({setup(e){return window.$message=me(),(t,o)=>null}}),et=["https://cf-api.xswd.cf"],tt=P({setup(e){const t=v({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return K(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(et))}),(o,a)=>{const s=G("router-view");return k(),Y(n(ke),{locale:n(he),"date-locale":n(ve),"theme-overrides":t.value},{default:c(()=>[i(n(ge),null,{default:c(()=>[i(n(_e),null,{default:c(()=>[i(n(fe),null,{default:c(()=>[i(Qe),i(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),ot="modulepreload",ee={},st="/pikpak/",p=function(t,o){return!o||o.length===0?t():Promise.all(o.map(a=>{if(a=`${st}${a}`,a in ee)return;ee[a]=!0;const s=a.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${r}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":ot,s||(l.as="script",l.crossOrigin=""),l.href=a,document.head.appendChild(l),s)return new Promise((N,_)=>{l.addEventListener("load",N),l.addEventListener("error",_)})})).then(()=>t())};var at="/pikpak/assets/logo1.08eb9157.png";const m=Z.create({});m.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((o=e.url)==null?void 0:o.indexOf("https://",4))===-1){const a=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(a.length>0){const s=Math.floor(Math.random()*a.length);e.url=a[s]+"/"+e.url}}return e});let F=!1;m.interceptors.response.use(e=>e,e=>{var a;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:console.log(1);const s=window.localStorage.getItem("pikpakLoginData"),r=s?JSON.parse(s):{};return r.username&&r.password&&!F?(console.log("wait",o.url),F=!0,m.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},r)).then(l=>(l.data&&l.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(l.data)),F=!1,m(o))).catch(()=>(x.push("/login"),!1))):r.username&&r.password&&F?new Promise((l,N)=>{const _=setInterval(()=>{F||(clearInterval(_),l(m(o)))},100)}):(x.push("/login?redirect="+x.currentRoute.value.fullPath),Promise.reject(e));default:window.$message.error(((a=t==null?void 0:t.data)==null?void 0:a.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const nt=Z.create({});nt.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const te=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let a=Math.floor(o/10);return e=e/Math.pow(2,10*a),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[a]};const it=g("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[g("img",{src:"https://mypikpak.com/apple-touch-icon.png",class:"logo-box__icon",alt:""}),g("div",{class:"logo-box__text"},"PikPak")],-1),rt={key:0,class:"content-bottom"},lt=f("\u4F1A\u5458\u7801"),ut={style:{"margin-bottom":"0"}},ct=f(" # "),dt=f(" # "),pt=f(" # "),mt=g("a",{style:{color:"#306eff"},target:"_blank",href:"https://mypikpak.com/drive/payment"},"\u9996\u5E74\u4F1A\u5458\u8BA2\u9605\u4EC5\u9700179",-1),_t=f(" # "),ft=f(" # \u30101\u5E74PikPak\u9996\u5E74\u8BA2\u9605\u4EC5\u9700\uFF1A179\u5143\uFF01\u539F\u4EF7320\u5143\u3011 # "),gt={class:"bottom-user-info"},ht={key:0,src:at,class:"user-info-avatar"},vt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},kt={class:"user-info-name"},yt={key:0},wt={class:"action"},Et=f(" \u9000\u51FA\u767B\u5F55 "),Ft=g("p",null,[g("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0-\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u611F\u8C22\u652F\u6301")],-1),xt=f("\u6DFB\u52A0"),At=P({setup(e){const t=v(!1),o=u=>()=>Q(D,null,{default:()=>Q(u)}),a=ye(),s=we(),r=v([{label:"\u6587\u4EF6",key:"list",icon:o(We)},{label:"\u89C6\u9891",key:"video",icon:o(je)},{label:"\u56FE\u7247",key:"image",icon:o(ze)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Je)},{label:"\u9080\u8BF7",key:"invited",icon:o(Ue)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(He)}]),l=v(),N=()=>{m.get("https://user.mypikpak.com/v1/user/me").then(u=>{window.localStorage.setItem("pikpakUser",JSON.stringify(u.data)),l.value=u.data}).catch(u=>{console.log(u)})},_=v(),L=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/about").then(u=>{_.value=u.data}).catch(u=>{console.log(u)})},y=v(),oe=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(u=>{var d;y.value=(d=u.data)==null?void 0:d.data})},se=(u,d)=>{console.log(d),a.push("/"+d.key)};K(()=>{N(),L(),oe()});const I=v(),E=v(!1),ae=()=>{m.post("https://api-drive.mypikpak.com/vip/v1/order/activation-code",{activation_code:I.value,data:{}}).then(u=>{window.$message.success("\u5151\u6362\u6210\u529F"),L()}).catch(u=>{console.log(u)}).finally(()=>{E.value=!1})},$=v(!1),ne=u=>{$.value=u<800,t.value||(t.value=u<800)};Ee(s,()=>{$.value&&(t.value=!0)});const ie=Fe(),re=()=>{ie.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{m.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(u=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),a.push("/login")}).catch(u=>{console.log(u)})}})};return(u,d)=>{const le=G("router-view"),ue=xe("resize");return k(),w(Me,null,[Ae(i(n(X),{"has-sider":"",onResize:ne},{default:c(()=>[i(n(Ne),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:d[1]||(d[1]=h=>t.value=!0),onExpand:d[2]||(d[2]=h=>t.value=!1),bordered:""},{default:c(()=>{var h,S,O,B,T,R,V,M,j,z,J;return[it,i(n(Ie),{options:r.value,value:String(n(s).name),"onUpdate:value":se},null,8,["options","value"]),t.value?C("",!0):(k(),w("div",rt,[f(b(n(te)((h=_.value)==null?void 0:h.quota.usage))+" / "+b(n(te)((S=_.value)==null?void 0:S.quota.limit))+" ",1),i(n(Ce),{type:"primary",onClick:d[0]||(d[0]=Ct=>E.value=!0)},{default:c(()=>[lt]),_:1}),((O=_.value)==null?void 0:O.quota)?(k(),Y(n(Pe),{key:0,type:"line",percentage:Number((((B=_.value)==null?void 0:B.quota.usage)/((T=_.value)==null?void 0:T.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((R=y.value)==null?void 0:R.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):C("",!0),g("p",ut,[ct,i(n(q),{placement:"right"},{trigger:c(()=>[pt,mt,_t]),default:c(()=>[dt,ft]),_:1})])])),t.value?C("",!0):(k(),w("div",{key:1,class:be(["sider-bottom",{vip:((V=y.value)==null?void 0:V.status)==="ok"}])},[g("div",gt,[((M=y.value)==null?void 0:M.status)==="ok"?(k(),w("img",ht)):(k(),w("img",vt)),g("div",kt,[f(b((j=l.value)==null?void 0:j.name)+" ",1),((z=y.value)==null?void 0:z.status)==="ok"&&((J=y.value)==null?void 0:J.expire)?(k(),w("div",yt,[i(n(De),{time:new Date(y.value.expire),type:"datetime"},null,8,["time"])])):C("",!0)]),g("div",wt,[i(n(q),null,{trigger:c(()=>[i(n(D),{onClick:re},{default:c(()=>[i(n(Le))]),_:1})]),default:c(()=>[Et]),_:1})])])],2))]}),_:1},8,["collapsed"]),i(n(X),null,{default:c(()=>[i(n($e),{style:{height:"100vh"}},{default:c(()=>[i(n(Se),{style:{"max-height":"100vh"}},{default:c(()=>[i(le)]),_:1})]),_:1})]),_:1})]),_:1},512),[[ue]]),i(n(Ve),{show:E.value,"onUpdate:show":d[5]||(d[5]=h=>E.value=h)},{default:c(()=>[i(n(Oe),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[i(n(D),{onClick:d[3]||(d[3]=h=>E.value=!1)},{default:c(()=>[i(n(Be))]),_:1})]),action:c(()=>[i(n(Te),{block:!0,type:"primary",disabled:!I.value,onClick:ae},{default:c(()=>[xt]),_:1},8,["disabled"])]),default:c(()=>[i(n(Re),{placeholder:"\u4F1A\u5458\u7801",value:I.value,"onUpdate:value":d[4]||(d[4]=h=>I.value=h)},null,8,["value"]),Ft]),_:1})]),_:1},8,["show"])],64)}}}),Nt=[{path:"/",name:"home",component:At,redirect:"/list",beforeEnter:(e,t,o)=>{const a=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!a||!a.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>p(()=>import("./list.f918e37d.js"),["assets/list.f918e37d.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"video",name:"video",component:()=>p(()=>import("./list.f918e37d.js"),["assets/list.f918e37d.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"image",name:"image",component:()=>p(()=>import("./list.f918e37d.js"),["assets/list.f918e37d.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"trash",name:"trash",component:()=>p(()=>import("./trash.99bace29.js"),["assets/trash.99bace29.js","assets/trash.99a3677d.css","assets/vendor.64da71ad.js"])},{path:"setting",name:"setting",component:()=>p(()=>import("./setting.f8c34dbc.js"),["assets/setting.f8c34dbc.js","assets/setting.f947579c.css","assets/vendor.64da71ad.js"])},{path:"invited",name:"invited",component:()=>p(()=>import("./invited.579e8b16.js"),["assets/invited.579e8b16.js","assets/invited.74b24e1e.css","assets/clipboard.a54b99ef.js","assets/vendor.64da71ad.js"])}]},{path:"/t/:id?",name:"test",component:()=>p(()=>import("./test.31840dca.js"),["assets/test.31840dca.js","assets/vendor.64da71ad.js"])},{path:"/s/:id/:password?",name:"shareInfo",component:()=>p(()=>import("./shareInfo.76ff1152.js"),["assets/shareInfo.76ff1152.js","assets/shareInfo.678356c6.css","assets/vendor.64da71ad.js"])},{path:"/login",name:"login",component:()=>p(()=>import("./login.36f956ac.js"),["assets/login.36f956ac.js","assets/login.a8b45006.css","assets/vendor.64da71ad.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>p(()=>import("./sms.8732a231.js"),["assets/sms.8732a231.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.64da71ad.js"])},{path:"/register",name:"register",component:()=>p(()=>import("./register.50fa7243.js"),["assets/register.50fa7243.js","assets/register.5588ce76.css","assets/vendor.64da71ad.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>p(()=>import("./testtest.674fcf10.js"),["assets/testtest.674fcf10.js","assets/vendor.64da71ad.js"])}],It=Ke({history:Ge(),routes:Nt});var x=It;const A=Ye(tt);A.directive("resize",{mounted(e,t,o){e.$$erd=Ze({strategy:"scroll"}),e.$$erd.listenTo({},e,a=>{let s=a.offsetWidth,r=a.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var l;(l=o.props)==null||l.onResize(s,r)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});A.config.globalProperties.$http=m;A.use(x);A.use(qe,{router:x,siteIdList:[1280680983]});A.mount("#app");export{te as b,m as i,et as p};
