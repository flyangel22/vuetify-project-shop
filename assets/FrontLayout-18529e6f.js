import{p as C,m as Y,a as z,g as w,u as p,c as a,b as oe,d as ne,e as Q,f as W,h as Z,t as I,i as se,j as re,k as ee,l as ie,n as ue,s as _,o as b,q as ce,V as de,r as U,v as $,w as ve,x as X,y as me,z as H,A as ge,B as fe,C as be,D as he,E as ye,F as Ve,G as Se,H as E,I as ke,J as xe,K as M,L as Be,M as Te,N as _e,O as Ce,P as we,Q as pe,R as Ne,S as Pe,T as Ae,U as Le,W as Re,X as F,Y as Ie,Z as Ee,_ as $e,$ as He,a0 as De,a1 as f,a2 as A,a3 as k,a4 as m,a5 as x,a6 as L,a7 as q,a8 as D,a9 as O,aa as j,ab as R,ac as Me,ad as Ue,ae as Fe,af as G}from"./index-0e34b374.js";import{V as Ye,a as ze}from"./VNavigationDrawer-ea9b156a.js";import{V as Xe}from"./VContainer-3d82e16e.js";const te=C({text:String,...Y(),...z()},"VToolbarTitle"),ae=w()({name:"VToolbarTitle",props:te(),setup(e,u){let{slots:t}=u;return p(()=>{const i=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var s;return[i&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(s=t.default)==null?void 0:s.call(t)])]}})}),{}}}),qe=[null,"prominent","default","comfortable","compact"],le=C({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>qe.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...oe(),...Y(),...ne(),...Q(),...z({tag:"header"}),...W()},"VToolbar"),J=w()({name:"VToolbar",props:le(),setup(e,u){var c;let{slots:t}=u;const{backgroundColorClasses:i,backgroundColorStyles:s}=Z(I(e,"color")),{borderClasses:o}=se(e),{elevationClasses:y}=re(e),{roundedClasses:v}=ee(e),{themeClasses:h}=ie(e),{rtlClasses:V}=ue(),n=_(!!(e.extended||(c=t.extension)!=null&&c.call(t))),g=b(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),d=b(()=>n.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ce({VBtn:{variant:"text"}}),p(()=>{var r;const l=!!(e.title||t.title),S=!!(t.image||e.image),B=(r=t.extension)==null?void 0:r.call(t);return n.value=!!(e.extended||B),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},i.value,o.value,y.value,v.value,h.value,V.value,e.class],style:[s.value,e.style]},{default:()=>[S&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(U,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(de,{key:"image-img",cover:!0,src:e.image},null)]),a(U,{defaults:{VTabs:{height:$(g.value)}}},{default:()=>{var T,N,P;return[a("div",{class:"v-toolbar__content",style:{height:$(g.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(T=t.prepend)==null?void 0:T.call(t)]),l&&a(ae,{key:"title",text:e.title},{text:t.title}),(N=t.default)==null?void 0:N.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(P=t.append)==null?void 0:P.call(t)])])]}}),a(U,{defaults:{VTabs:{height:$(d.value)}}},{default:()=>[a(ve,null,{default:()=>[n.value&&a("div",{class:"v-toolbar__extension",style:{height:$(d.value)}},[B])]})]})]})}),{contentHeight:g,extensionHeight:d}}}),Oe=C({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function je(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=u;let i=0;const s=X(null),o=_(0),y=_(0),v=_(0),h=_(!1),V=_(!1),n=b(()=>Number(e.scrollThreshold)),g=b(()=>me((n.value-o.value)/n.value||0)),d=()=>{const c=s.value;!c||t&&!t.value||(i=o.value,o.value="window"in c?c.pageYOffset:c.scrollTop,V.value=o.value<i,v.value=Math.abs(o.value-n.value))};return H(V,()=>{y.value=y.value||o.value}),H(h,()=>{y.value=0}),ge(()=>{H(()=>e.scrollTarget,c=>{var S;const l=c?document.querySelector(c):window;l&&l!==s.value&&((S=s.value)==null||S.removeEventListener("scroll",d),s.value=l,s.value.addEventListener("scroll",d,{passive:!0}))},{immediate:!0})}),fe(()=>{var c;(c=s.value)==null||c.removeEventListener("scroll",d)}),t&&H(t,d,{immediate:!0}),{scrollThreshold:n,currentScroll:o,currentThreshold:v,isScrollActive:h,scrollRatio:g,isScrollingUp:V,savedScroll:y}}const Ge=C({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...le(),...be(),...Oe(),height:{type:[Number,String],default:64}},"VAppBar"),Je=w()({name:"VAppBar",props:Ge(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:t}=u;const i=X(),s=he(e,"modelValue"),o=b(()=>{var T;const r=new Set(((T=e.scrollBehavior)==null?void 0:T.split(" "))??[]);return{hide:r.has("hide"),inverted:r.has("inverted"),collapse:r.has("collapse"),elevate:r.has("elevate"),fadeImage:r.has("fade-image")}}),y=b(()=>{const r=o.value;return r.hide||r.inverted||r.collapse||r.elevate||r.fadeImage||!s.value}),{currentScroll:v,scrollThreshold:h,isScrollingUp:V,scrollRatio:n}=je(e,{canScroll:y}),g=b(()=>e.collapse||o.value.collapse&&(o.value.inverted?n.value>0:n.value===0)),d=b(()=>e.flat||o.value.elevate&&(o.value.inverted?v.value>0:v.value===0)),c=b(()=>o.value.fadeImage?o.value.inverted?1-n.value:n.value:void 0),l=b(()=>{var N,P;if(o.value.hide&&o.value.inverted)return 0;const r=((N=i.value)==null?void 0:N.contentHeight)??0,T=((P=i.value)==null?void 0:P.extensionHeight)??0;return r+T});ye(b(()=>!!e.scrollBehavior),()=>{ke(()=>{o.value.hide?o.value.inverted?s.value=v.value>h.value:s.value=V.value||v.value<h.value:s.value=!0})});const{ssrBootStyles:S}=Ve(),{layoutItemStyles:B}=Se({id:e.name,order:b(()=>parseInt(e.order,10)),position:I(e,"location"),layoutSize:l,elementSize:_(void 0),active:s,absolute:I(e,"absolute")});return p(()=>{const[r]=J.filterProps(e);return a(J,E({ref:i,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...B.value,"--v-toolbar-image-opacity":c.value,height:void 0,...S.value},e.style]},r,{collapse:g.value,flat:d.value}),t)}),{}}}),Ke=C({...xe({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Qe=w()({name:"VAppBarNavIcon",props:Ke(),setup(e,u){let{slots:t}=u;return p(()=>a(M,E(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),We=w()({name:"VAppBarTitle",props:te(),setup(e,u){let{slots:t}=u;return p(()=>a(ae,E(e,{class:"v-app-bar-title"}),t)),{}}});const Ze=C({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:Be,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...Y(),...Te({location:"top end"}),...Q(),...z(),...W(),..._e({transition:"scale-rotate-transition"})},"VBadge"),K=w()({name:"VBadge",inheritAttrs:!1,props:Ze(),setup(e,u){const{backgroundColorClasses:t,backgroundColorStyles:i}=Z(I(e,"color")),{roundedClasses:s}=ee(e),{t:o}=Ce(),{textColorClasses:y,textColorStyles:v}=we(I(e,"textColor")),{themeClasses:h}=pe(),{locationStyles:V}=Ne(e,!0,n=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(n)?+(e.offsetY??0):["left","right"].includes(n)?+(e.offsetX??0):0));return p(()=>{const n=Number(e.content),g=!e.max||isNaN(n)?e.content:n<=+e.max?n:`${e.max}+`,[d,c]=Pe(u.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return a(e.tag,E({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},c,{style:e.style}),{default:()=>{var l,S;return[a("div",{class:"v-badge__wrapper"},[(S=(l=u.slots).default)==null?void 0:S.call(l),a(Ae,{transition:e.transition},{default:()=>{var B,r;return[Le(a("span",E({class:["v-badge__badge",h.value,t.value,s.value,y.value],style:[i.value,v.value,e.inline?{}:V.value],"aria-atomic":"true","aria-label":o(e.label,n),"aria-live":"polite",role:"status"},d),[e.dot?void 0:u.slots.badge?(r=(B=u.slots).badge)==null?void 0:r.call(B):e.icon?a(F,{icon:e.icon},null):g]),[[Re,e.modelValue]])]}})])]}})}),{}}}),lt={__name:"FrontLayout",setup(e){const u=Ie(),t=Ee(),{isLogin:i,isAdmin:s,cart:o}=$e(t),{mobile:y}=He(),v=b(()=>y.value),h=X(!1),V=b(()=>[{to:"/register",text:"註冊",icon:"mdi-account-plus",show:!i.value},{to:"/login",text:"登入",icon:"mdi-login",show:!i.value},{to:"/cart",text:"購物車",icon:"mdi-cart",show:i.value},{to:"/orders",text:"訂單",icon:"mdi-format-list-numbered",show:i.value},{to:"/admin",text:"管理",icon:"mdi-cog",show:i.value&&s.value}]),n=async()=>{try{await Fe.delete("/users/logout"),t.logout(),u({text:"登出成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(g){u({text:g.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(g,d)=>{const c=De("RouterView");return f(),A(L,null,[v.value?(f(),k(Ye,{key:0,modelValue:h.value,"onUpdate:modelValue":d[0]||(d[0]=l=>h.value=l),location:"right",temporary:""},{default:m(()=>[a(Me,{nav:""},{default:m(()=>[(f(!0),A(L,null,q(V.value,l=>(f(),A(L,{key:l.to},[l.show?(f(),k(O,{key:0,to:l.to},{prepend:m(()=>[a(F,{icon:l.icon},null,8,["icon"])]),append:m(()=>[l.to==="/cart"?(f(),k(K,{key:0,color:"success",content:D(o).toString()},null,8,["content"])):x("",!0)]),default:m(()=>[a(j,null,{default:m(()=>[R(G(l.text),1)]),_:2},1024)]),_:2},1032,["to"])):x("",!0)],64))),128)),D(i)?(f(),k(O,{key:0,onClick:n},{prepend:m(()=>[a(F,{icon:"mdi-logout"})]),default:m(()=>[a(j,null,{default:m(()=>[R("登出")]),_:1})]),_:1})):x("",!0)]),_:1})]),_:1},8,["modelValue"])):x("",!0),a(Je,{color:"purple-darken-4"},{default:m(()=>[a(Xe,{class:"d-flex align-center"},{default:m(()=>[a(M,{to:"/",active:!1},{default:m(()=>[a(We,null,{default:m(()=>[R("購物網")]),_:1})]),_:1}),a(Ue),v.value?(f(),k(Qe,{key:0,onClick:d[1]||(d[1]=l=>h.value=!0)})):x("",!0),v.value?x("",!0):(f(!0),A(L,{key:1},q(V.value,l=>(f(),A(L,{key:l.to},[l.show?(f(),k(M,{key:0,variant:"text","prepend-icon":l.icon,to:l.to},{default:m(()=>[R(G(l.text),1),l.to==="/cart"?(f(),k(K,{key:0,color:"success",content:D(o).toString(),floating:""},null,8,["content"])):x("",!0)]),_:2},1032,["prepend-icon","to"])):x("",!0)],64))),128)),!v.value&&D(i)?(f(),k(M,{key:2,variant:"text","prepend-icon":"mdi-logout",onClick:n},{default:m(()=>[R("登出")]),_:1})):x("",!0)]),_:1})]),_:1}),a(ze,null,{default:m(()=>[(f(),k(c,{key:g.$route.path}))]),_:1})],64)}}};export{lt as default};
