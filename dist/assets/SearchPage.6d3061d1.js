import{d as h,u as f,c as m,o as i,a as _,b as s,t as d,e as v,f as S,_ as g,g as x,h as I,r as y,w,v as C,F as D,i as P,j as k,p as B,k as W}from"./index.e7db3292.js";const $={class:"location"},M={class:"temperature"},E=h({__name:"LocationItem",props:{location:{type:String,required:!0}},setup(e){const t=e,c=f(),n=S(),l=m(()=>{if(!c.weatherData[t.location])return"Loading...";const r=c.weatherData[t.location].currentData;return Math.round(r.temp)+"\xB0C"});function a(){n.push(`/w/${t.location}`)}return(r,o)=>(i(),_("div",{class:"LocationItem",onClick:a},[s("span",$,d(e.location),1),s("span",M,d(v(l)),1)]))}});const F=g(E,[["__scopeId","data-v-cfc8286d"]]),V=e=>(B("data-v-2e8206c4"),e=e(),W(),e),b={class:"SearchPage"},j=V(()=>s("h1",null,"Location",-1)),q={class:"results"},A=h({__name:"SearchPage",emits:["expandPanel"],setup(e,{emit:t}){const c=f(),n=x();t("expandPanel");const l=n.locationList;I(()=>{l.forEach(o=>{c.fetchWeatherAPIData(o)})});const a=y(""),r=m(()=>n.locationList.filter(o=>o.toLowerCase().includes(a.value.toLowerCase())));return(o,p)=>(i(),_("section",b,[j,w(s("input",{id:"search",type:"text",name:"search",autocomplete:"off","onUpdate:modelValue":p[0]||(p[0]=u=>a.value=u),placeholder:"Search city..."},null,512),[[C,a.value]]),s("div",q,[(i(!0),_(D,null,P(v(r),(u,L)=>(i(),k(F,{key:L,location:u},null,8,["location"]))),128))])]))}});const O=g(A,[["__scopeId","data-v-2e8206c4"]]);export{O as default};