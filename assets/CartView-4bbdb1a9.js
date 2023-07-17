import{Y as V,Z as w,ap as B,x as q,o as f,ae as _,a1 as u,a3 as N,a4 as r,c as l,av as S,aj as a,a2 as h,a7 as P,a6 as $,a5 as I,af as c,K as d,ab as k,aw as R,V as T}from"./index-0e34b374.js";import{V as j}from"./VContainer-3d82e16e.js";import{V as m,a as z}from"./VRow-6446a7fd.js";const A=a("h1",null,"購物車",-1),D=a("thead",null,[a("tr",null,[a("th",null,"圖片"),a("th",null,"名稱"),a("th",null,"單價"),a("th",null,"數量"),a("th",null,"小計"),a("th",null,"操作")])],-1),E={key:0},F=a("td",{colspan:"6",class:"text-center"},"沒有商品",-1),K=[F],G={__name:"CartView",setup(L){const i=V(),v=w(),C=B(),o=q([]),p=async(e,s)=>{try{const{data:t}=await _.post("/users/cart",{product:e,quantity:s}),n=o.value.findIndex(g=>g.product._id===e);o.value[n].quantity+=s,o.value[n].quantity<=0&&o.value.splice(n,1),v.cart=t.result}catch(t){i({text:t.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}},y=f(()=>o.value.reduce((e,s)=>e+s.quantity*s.product.price,0)),b=f(()=>o.value.length>0&&!o.value.some(e=>!e.product.sell)),x=async(e,s)=>{try{await _.post("/orders"),v.cart=0,C.push("/orders")}catch(t){console.log(t),i({text:t.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(async()=>{try{const{data:e}=await _.get("/users/cart");o.value.push(...e.result)}catch(e){i({text:e.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(e,s)=>(u(),N(j,null,{default:r(()=>[l(z,null,{default:r(()=>[l(m,{cols:"12"},{default:r(()=>[A]),_:1}),l(m,{cols:"12"},{default:r(()=>[l(S,null,{default:r(()=>[D,a("tbody",null,[(u(!0),h($,null,P(o.value,t=>(u(),h("tr",{key:t._id,class:R({"bg-red-lighten-5":!t.product.sell})},[a("td",null,[l(T,{src:t.product.image,cover:"",width:"200","aspect-ratio":"1"},null,8,["src"])]),a("td",null,c(t.product.name),1),a("td",null,c(t.product.price),1),a("td",null,[l(d,{color:"primary",variant:"text",icon:"mdi-minus",onClick:n=>p(t.product._id,-1)},null,8,["onClick"]),k(" "+c(t.quantity)+" ",1),l(d,{color:"primary",variant:"text",icon:"mdi-plus",onClick:n=>p(t.product._id,1)},null,8,["onClick"])]),a("td",null,c(t.quantity*t.product.price),1),a("td",null,[l(d,{color:"red",variant:"text",icon:"mdi-delete",onClick:n=>p(t.product._id,t.quantity*-1)},null,8,["onClick"])])],2))),128)),o.value.length===0?(u(),h("tr",E,K)):I("",!0)])]),_:1})]),_:1}),l(m,{cols:"12",class:"text-center"},{default:r(()=>[a("p",null,"總金額: "+c(y.value),1),l(d,{color:"green",onClick:x,disabled:!b.value},{default:r(()=>[k("結帳")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}))}};export{G as default};
