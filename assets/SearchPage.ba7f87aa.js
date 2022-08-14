import{d as h,u as f,c as m,o as i,a as d,b as s,t as p,e as v,f as S,_ as g,g as x,h as I,r as y,w,v as D,F as C,i as P,j as k,p as B,k as W}from"./index.d03b79b1.js";const b={class:"location"},$={class:"temperature"},M=h({__name:"LocationItem",props:{location:{type:String,required:!0}},setup(e){const t=e,n=f(),c=S(),l=m(()=>{if(!n.weatherData[t.location])return"Loading...";const r=n.weatherData[t.location].currentData;return Math.round(r.temp)+"\xB0C"});function a(){c.push(`/w/${t.location}`)}return(r,o)=>(i(),d("div",{class:"LocationData",onClick:a},[s("span",b,p(e.location),1),s("span",$,p(v(l)),1)]))}});const E=g(M,[["__scopeId","data-v-6d194df1"]]),F=e=>(B("data-v-d2b71d52"),e=e(),W(),e),V={class:"SearchPage"},j=F(()=>s("h1",null,"Location",-1)),q={class:"results"},A=h({__name:"SearchPage",emits:["expandPanel"],setup(e,{emit:t}){const n=f(),c=x();t("expandPanel");const l=c.locationList;I(()=>{l.forEach(o=>{n.fetchWeatherAPIData(o)})});const a=y(""),r=m(()=>c.locationList.filter(o=>o.toLowerCase().includes(a.value.toLowerCase())));return(o,_)=>(i(),d("section",V,[j,w(s("input",{"onUpdate:modelValue":_[0]||(_[0]=u=>a.value=u),type:"text",name:"search",id:"search",placeholder:"Search city..."},null,512),[[D,a.value]]),s("div",q,[(i(!0),d(C,null,P(v(r),(u,L)=>(i(),k(E,{key:L,location:u},null,8,["location"]))),128))])]))}});const O=g(A,[["__scopeId","data-v-d2b71d52"]]);export{O as default};