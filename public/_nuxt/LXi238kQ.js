import{_ as J,a as G}from"./xG5u76J_.js";import{_ as K}from"./CCxNnwLh.js";import{_ as P}from"./BGzDuTtR.js";import{_ as Q,a as W,b as X,c as Y,d as Z}from"./DkIjAwkr.js";import{_ as h}from"./DbRmwbl4.js";import{d as O,a as ee,r as c,o as le,t as g,v as M,x as m,z as l,A as t,B as n,H as N,u as te,J as D,I as ae,D as ne,y as f}from"./CE95Wurm.js";import{g as oe,h as se,i as de,j as ue,k as re,l as ie,m as me}from"./Bk-8HdKD.js";const _e={class:"flex flex-col gap-3"},fe={class:"flex flex-col gap-2"},pe={class:"flex flex-col gap-2"},ce={class:"flex flex-col gap-2"},Ve=O({__name:"OrderForm",props:{client:{type:Object,default:null},client_addresses:{type:Array,default:()=>[]}},emits:["order-created"],setup(_,{emit:U}){var w,k,I;const{$useApi:p}=ee(),o=_,$=c([]),r=c([]),v=c([]),y=c([]),s=c({order_type:"",order_date:"",client:((w=o.client)==null?void 0:w.id)||0,client_address:((I=(k=o.client_addresses)==null?void 0:k[0])==null?void 0:I.id)||0,supplier:0,vehicle_type:"",unit:"m3",total_handled_volume:0,material_volume:0}),x=c(!1),V=async()=>{try{const{data:d}=await p.get("/order-types/");$.value=d}catch(d){console.error("Ошибка загрузки типов заказов:",d)}},u=async()=>{try{const{data:d}=await p.get("/contractors/");r.value=d}catch(d){console.error("Ошибка загрузки контрагентов:",d)}},b=async()=>{try{const{data:d}=await p.get("/vehicle-types/");v.value=d}catch(d){console.error("Ошибка загрузки типов транспортных средств:",d)}},S=async d=>{try{const{data:e}=await p.get(`/contractor-addresses/?contractor=${d}`);y.value=e}catch(e){console.error("Ошибка загрузки адресов контрагента:",e)}},F=async()=>{try{const{data:d}=await p.post("/orders/",s.value);console.log("Заказ успешно создан:",d),H(),x.value=!1,j("order-created")}catch(d){console.error("Ошибка создания заказа:",d)}},H=()=>{var d,e,i;s.value={order_type:"",order_date:"",client:((d=o.client)==null?void 0:d.id)||0,client_address:((i=(e=o.client_addresses)==null?void 0:e[0])==null?void 0:i.id)||0,supplier:0,vehicle_type:"",unit:"m3",total_handled_volume:0,material_volume:0}},j=U;return le(()=>{V(),u(),b(),console.log(o.client),o.client_addresses?y.value=o.client_addresses:S(s.value.client)}),(d,e)=>{const i=J,A=K,T=G,C=P,L=Q,R=W,B=X,q=Y,z=Z,E=h;return g(),M(N,null,[m("div",_e,[m("div",null,[l(i,{for:"order_type"},{default:t(()=>e[9]||(e[9]=[n("Тип заказа")])),_:1}),l(A,{class:"mt-2",items:$.value.map(a=>a.name),label:"Тип заказа",onSelectedItem:e[0]||(e[0]=a=>s.value.order_type=a)},null,8,["items"])]),m("div",null,[l(i,{for:"order_date"},{default:t(()=>e[10]||(e[10]=[n("Дата заказа")])),_:1}),l(T,{class:"mt-2",id:"order_date",type:"date",modelValue:s.value.order_date,"onUpdate:modelValue":e[1]||(e[1]=a=>s.value.order_date=a),placeholder:"Выберите дату"},null,8,["modelValue"])]),m("div",fe,[l(i,{for:"client"},{default:t(()=>e[11]||(e[11]=[n("Клиент")])),_:1}),l(C,{items:_.client?[{value:_.client.id,label:_.client.name}]:r.value.map(a=>({value:a.id,label:a.name})),label:_.client?_.client.name:"Выбрать клиента",onSelectedItem:e[2]||(e[2]=async a=>{s.value.client=a,await S(a)})},null,8,["items","label"])]),m("div",pe,[l(i,{for:"client_address"},{default:t(()=>e[12]||(e[12]=[n("Адрес клиента")])),_:1}),l(C,{items:y.value.map(a=>({value:a.id,label:a.address})),label:"Выбрать адрес",onSelectedItem:e[3]||(e[3]=a=>s.value.client_address=a)},null,8,["items"])]),m("div",ce,[l(i,{for:"supplier"},{default:t(()=>e[13]||(e[13]=[n("Поставщик")])),_:1}),l(C,{items:r.value.map(a=>({value:a.id,label:a.name})),label:"Выбрать поставщика",onSelectedItem:e[4]||(e[4]=a=>s.value.supplier=a)},null,8,["items"])]),m("div",null,[l(i,{for:"vehicle_type"},{default:t(()=>e[14]||(e[14]=[n("Тип транспорта")])),_:1}),l(A,{class:"mt-2",items:v.value.map(a=>a.name),label:"Тип транспорта",onSelectedItem:e[5]||(e[5]=a=>s.value.vehicle_type=a)},null,8,["items"])]),m("div",null,[l(i,{for:"unit"},{default:t(()=>e[15]||(e[15]=[n("Единица измерения")])),_:1}),l(z,{modelValue:s.value.unit,"onUpdate:modelValue":e[6]||(e[6]=a=>s.value.unit=a)},{default:t(()=>[l(R,null,{default:t(()=>[l(L,{placeholder:"Выберите единицу"})]),_:1}),l(q,null,{default:t(()=>[l(B,{value:"m3"},{default:t(()=>e[16]||(e[16]=[n("м³")])),_:1}),l(B,{value:"ton"},{default:t(()=>e[17]||(e[17]=[n("Тонны")])),_:1})]),_:1})]),_:1},8,["modelValue"])]),m("div",null,[l(i,{for:"total_handled_volume"},{default:t(()=>e[18]||(e[18]=[n("Общий объем")])),_:1}),l(T,{class:"mt-2",id:"total_handled_volume",type:"number",modelValue:s.value.total_handled_volume,"onUpdate:modelValue":e[7]||(e[7]=a=>s.value.total_handled_volume=a),placeholder:"Введите общий объем"},null,8,["modelValue"])]),m("div",null,[l(i,{for:"material_volume"},{default:t(()=>e[19]||(e[19]=[n("Объем материала")])),_:1}),l(T,{class:"mt-2",id:"material_volume",type:"number",modelValue:s.value.material_volume,"onUpdate:modelValue":e[8]||(e[8]=a=>s.value.material_volume=a),placeholder:"Введите объем материала"},null,8,["modelValue"])])]),l(E,{onClick:F},{default:t(()=>e[20]||(e[20]=[n("Создать")])),_:1})],64)}}}),Te=O({__name:"Table",props:{orders:{type:Array,required:!0}},setup(_){const U=te();return(p,o)=>{const $=oe,r=se,v=de,y=ue,s=re,x=ie,V=me;return g(),D(V,null,{default:t(()=>[l($,null,{default:t(()=>o[0]||(o[0]=[n("Список заказов.")])),_:1}),l(y,{class:"bg-slate-100"},{default:t(()=>[l(v,null,{default:t(()=>[l(r,null,{default:t(()=>o[1]||(o[1]=[n("Тип")])),_:1}),l(r,null,{default:t(()=>o[2]||(o[2]=[n("Дата")])),_:1}),l(r,null,{default:t(()=>o[3]||(o[3]=[n("Клиент")])),_:1}),l(r,null,{default:t(()=>o[4]||(o[4]=[n("Адрес")])),_:1}),l(r,null,{default:t(()=>o[5]||(o[5]=[n("Поставщик")])),_:1}),l(r,null,{default:t(()=>o[6]||(o[6]=[n("Тип транспорта")])),_:1}),l(r,null,{default:t(()=>o[7]||(o[7]=[n("Общий объем")])),_:1}),l(r,null,{default:t(()=>o[8]||(o[8]=[n("Объем материала")])),_:1})]),_:1})]),_:1}),l(x,null,{default:t(()=>[(g(!0),M(N,null,ae(_.orders,u=>(g(),D(v,{key:u.id,onClick:b=>ne(U).push(`/orders/${u.id}`),class:"cursor-pointer hover:bg-gray-100"},{default:t(()=>[l(s,null,{default:t(()=>[n(f(u.order_type),1)]),_:2},1024),l(s,null,{default:t(()=>[n(f(u.order_date),1)]),_:2},1024),l(s,null,{default:t(()=>[n(f(u.client_info.name),1)]),_:2},1024),l(s,null,{default:t(()=>{var b;return[n(f(((b=u==null?void 0:u.client_address_info)==null?void 0:b.address)||""),1)]}),_:2},1024),l(s,null,{default:t(()=>[n(f(u.supplier),1)]),_:2},1024),l(s,null,{default:t(()=>[n(f(u.vehicle_type),1)]),_:2},1024),l(s,null,{default:t(()=>[n(f(u.total_handled_volume),1)]),_:2},1024),l(s,null,{default:t(()=>[n(f(u.material_volume),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})}}});export{Ve as _,Te as a};
