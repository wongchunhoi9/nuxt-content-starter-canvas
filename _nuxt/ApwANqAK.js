import{_ as V,a as q,q as z}from"./CDWvRepr.js";import{d as D,q as E,z as I,A as c,B as P,C as R,D as T,E as t,c as U,g as l,w as f,e,t as s,G as M,f as w,v as S,l as j,i as h,K as F,H as G}from"./DF5DPdbR.js";import{_ as H}from"./CXK_V3Tz.js";import{_ as W}from"./BUBPmXIU.js";import{u as J}from"./CJsN_A3p.js";import{_ as O}from"./DlAUqK2U.js";const Q={key:0},X={class:"text-sm font-extralight"},Y={class:"writing mx-auto px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"},Z={class:"info-section mt-1 flex flex-col gap-2 sm:flex-row sm:gap-4"},tt=D({__name:"[...slug]",async setup(et){let n,u;const a=E(),{locale:_,t:y,localeProperties:v}=I(),k=c(()=>Array.isArray(a.params.slug)?a.params.slug:[a.params.slug]),m=c(()=>S(j(_.value,"articles",...k.value))),C=c(()=>`articles_${_.value}`),{data:o}=([n,u]=P(async()=>J(m.value,async()=>await z(C.value).path(m.value).first(),"$WKxwz6obVu")),n=await n,u(),n);if(!o.value)throw R({statusCode:404,statusMessage:"Page not found"});const{copy:$}=T();function A(){$(`${window.location.origin}${a.fullPath}`),F.success(y("global.article_link_copied"))}return(i,r)=>{var p,d,x,g;const b=V,B=G,L=H,K=W,N=q;return t(o)?(h(),U("div",Q,[l(b,{page:t(o),"is-writing":t(a).path.includes("/articles/")},null,8,["page","is-writing"]),l(L,{to:"/writing",class:"mx-auto my-8 flex cursor-pointer items-center gap-2 px-4 text-muted hover:text-primary transition-colors duration-200 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"},{default:f(()=>[l(B,{name:"lucide:arrow-left",class:"size-4"}),e("span",X,s(i.$t("navigation.writing")),1)]),_:1}),e("article",Y,[e("h1",null,s((p=t(o))==null?void 0:p.title),1),e("div",Z,[e("p",null,s((d=t(o))==null?void 0:d.date),1),r[0]||(r[0]=e("p",{class:"hidden sm:block"}," | ",-1)),e("p",null,s((x=t(o))==null?void 0:x.readingTime)+" "+s(i.$t("writing.readingTime")),1),r[1]||(r[1]=e("p",{class:"hidden sm:block"}," | ",-1)),l(K,{text:i.$t("writing.copy_link"),shortcuts:["⌘","K"]},{default:f(()=>[e("p",{class:"flex cursor-pointer select-none items-center gap-1 transition-colors duration-200 hover:text-primary",onClick:A},s(i.$t("writing.share")),1)]),_:1},8,["text"])]),t(o)?(h(),M(N,{key:0,dir:((g=t(v))==null?void 0:g.dir)??"ltr",value:t(o)},null,8,["dir","value"])):w("",!0)])])):w("",!0)}}}),lt=O(tt,[["__scopeId","data-v-058df20d"]]);export{lt as default};
