import{_ as T}from"./DbRmwbl4.js";import{_ as A,a as G}from"./xG5u76J_.js";import{_ as M,a as E,b as F,c as R,d as j}from"./DkIjAwkr.js";import{_ as z}from"./tCog_cYv.js";import{d as H,a as L,u as q,C as J,r as p,o as K,t as d,v as m,x as r,z as s,A as l,B as u,D as t,y as $,E as O,F as P}from"./CE95Wurm.js";import{u as Q}from"./C5GjP6W8.js";const W={class:"p-6"},X={class:"flex gap-3"},Y={key:0,class:"text-center"},Z={key:1,class:"text-red-500 text-center"},h={key:2,class:"flex flex-col gap-3"},ee={class:"mt-4 flex justify-between"},se={key:0,class:"text-green-500 mt-4"},de=H({__name:"[id]",setup(te){const{$useApi:c}=L(),y=q(),k=J();Q({title:"Профиль"});const v=k.params.id,n=p({username:"",user_full_name:"",role:"user",telegram_id:""}),x=p(!0),i=p(null),_=p(""),C=async()=>{try{const{data:o}=await c.get(`/users/${v}/`),e=o;n.value={username:e.username||"",user_full_name:e.user_full_name||"",role:e.role||"user",telegram_id:e.telegram_id||""}}catch(o){i.value=o.message}finally{x.value=!1}},w=async()=>{try{const{data:o}=await c.patch(`/users/${v}/`,n.value);console.log(o),_.value="Пользователь успешно обновлён!",setTimeout(()=>_.value="",3e3)}catch(o){i.value=o.message}},S=async()=>{try{const o=await c.delete(`/users/${v}/`);console.log("пользователь удален!")}catch(o){console.error("Ошибка удаления пользователя:",o)}};return K(C),(o,e)=>{const g=T,f=A,V=G,b=M,B=E,U=F,D=z,I=R,N=j;return d(),m("div",W,[r("div",X,[s(g,{onClick:e[0]||(e[0]=a=>t(y).push("/users")),class:"h-8 w-8"},{default:l(()=>e[6]||(e[6]=[u(" < ")])),_:1}),e[7]||(e[7]=r("h1",{class:"text-2xl font-bold mb-4"},"Профиль",-1))]),t(x)?(d(),m("div",Y,e[8]||(e[8]=[r("p",null,"Загрузка...",-1)]))):t(i)?(d(),m("div",Z,[r("p",null,"Ошибка загрузки: "+$(t(i)),1)])):(d(),m("div",h,[r("div",null,[s(f,{for:"username"},{default:l(()=>e[9]||(e[9]=[u("Имя")])),_:1}),s(V,{class:"mt-2",id:"username",modelValue:t(n).username,"onUpdate:modelValue":e[1]||(e[1]=a=>t(n).username=a),placeholder:"Введите имя"},null,8,["modelValue"])]),r("div",null,[s(f,{for:"user_full_name"},{default:l(()=>e[10]||(e[10]=[u("Фамилия")])),_:1}),s(V,{class:"mt-2",id:"user_full_name",modelValue:t(n).user_full_name,"onUpdate:modelValue":e[2]||(e[2]=a=>t(n).user_full_name=a),placeholder:"Введите фамилию"},null,8,["modelValue"])]),r("div",null,[s(f,{for:"role"},{default:l(()=>e[11]||(e[11]=[u("Роль")])),_:1}),s(N,{modelValue:t(n).role,"onUpdate:modelValue":e[3]||(e[3]=a=>t(n).role=a)},{default:l(()=>[s(B,null,{default:l(()=>[s(b,{placeholder:"Выберите роль"})]),_:1}),s(I,null,{default:l(()=>[s(D,null,{default:l(()=>[s(U,{value:"admin"},{default:l(()=>e[12]||(e[12]=[u("Администратор")])),_:1}),s(U,{value:"user"},{default:l(()=>e[13]||(e[13]=[u("Пользователь")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),r("div",null,[s(f,{for:"telegram_id"},{default:l(()=>e[14]||(e[14]=[u("TG ID")])),_:1}),s(V,{class:"mt-2",id:"telegram_id",modelValue:t(n).telegram_id,"onUpdate:modelValue":e[4]||(e[4]=a=>t(n).telegram_id=a),placeholder:"Введите TG ID"},null,8,["modelValue"])]),r("div",ee,[s(g,{onClick:e[5]||(e[5]=O(a=>S(),["stop"]))},{default:l(()=>e[15]||(e[15]=[u("Удалить")])),_:1}),s(g,{onClick:w},{default:l(()=>e[16]||(e[16]=[u("Сохранить")])),_:1})]),t(_)?(d(),m("p",se,$(t(_)),1)):P("",!0)]))])}}});export{de as default};
