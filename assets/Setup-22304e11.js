import{B as z,a1 as A,a2 as N,a3 as P,a4 as q,N as H,i as c,c as h,O as M,F as O,d as C,a5 as x,v as U,e as T,w as X}from"./vendor-0976ad90.js";import{u as G,e as m,B as _,s as f,a as J,b as S,t as K}from"./index-fb9de2c9.js";let y;const Q=new Uint8Array(16);function W(){if(!y&&(y=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(Q)}const l=[];for(let t=0;t<256;++t)l.push((t+256).toString(16).slice(1));function Y(t,e=0){return l[t[e+0]]+l[t[e+1]]+l[t[e+2]]+l[t[e+3]]+"-"+l[t[e+4]]+l[t[e+5]]+"-"+l[t[e+6]]+l[t[e+7]]+"-"+l[t[e+8]]+l[t[e+9]]+"-"+l[t[e+10]]+l[t[e+11]]+l[t[e+12]]+l[t[e+13]]+l[t[e+14]]+l[t[e+15]]}const Z=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),E={randomUUID:Z};function tt(t,e,d){if(E.randomUUID&&!e&&!t)return E.randomUUID();t=t||{};const i=t.random||(t.rng||W)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){d=d||0;for(let r=0;r<16;++r)e[d+r]=i[r];return e}return Y(i)}const et=C('<div class="mx-auto flex max-w-screen-sm flex-col items-center gap-4 py-10"><form class=contents><div class="flex w-full flex-col gap-4"><div class=flex-1><label class=label><span class=label-text></span></label><input name=url type=url class="input input-bordered w-full"placeholder=http://127.0.0.1:9090 list=defaultEndpoints><datalist id=defaultEndpoints><option value=http://127.0.0.1:9090></option></datalist></div><div class=flex-1><label class=label><span class=label-text></span></label><input name=secret type=password class="input input-bordered w-full"placeholder=secret></div></div></form><div class="grid w-full grid-cols-2 gap-4">'),nt=C('<div class="badge badge-info flex w-full cursor-pointer items-center justify-between gap-4 py-4"><span class=truncate>'),st=x.object({url:x.string().min(1),secret:x.string()}),it=()=>{const[t]=G(),e=z(),d=A(),i=n=>{S(n),d("/overview")},r=(n,s)=>X.get(n,{headers:s?{Authorization:`Bearer ${s}`}:{}}).then(({ok:a})=>a).catch(a=>{const{message:o}=a;U.error(o)}),R=async n=>{const s=m().find(a=>a.id===n);s&&await r(s.url,s.secret)&&i(n)},b=async({url:n,secret:s})=>{const a=K(n);if(!await r(a,s))return;const o=tt(),u=m().slice(),p=u.find(v=>v.url===a);if(!p){f([{id:o,url:a,secret:s},...u]),i(o);return}p.secret=s,p.id=o,f(u),i(o)},I=n=>{const{message:s}=n;U.error(s)},{form:$}=N({extend:P({schema:st}),onSubmit:b,onError:I}),L=n=>{J()===n&&S(""),f(m().filter(s=>s.id!==n))};return q(()=>{const n=new URLSearchParams(e.search);n.has("hostname")?b({url:`${window.location.protocol}//${n.get("hostname")}${n.get("port")?`:${n.get("port")}`:""}`,secret:n.get("secret")??""}):m().length===0&&b({url:"http://127.0.0.1:9090",secret:""})}),(()=>{const n=et(),s=n.firstChild,a=s.firstChild,o=a.firstChild,u=o.firstChild,p=u.firstChild,v=o.nextSibling,k=v.firstChild,D=k.firstChild,B=s.nextSibling;return H($,s,()=>$),c(p,()=>t("endpointURL")),c(D,()=>t("secret")),c(a,h(_,{type:"submit",class:"btn-primary uppercase",get children(){return t("add")}}),null),c(B,h(O,{get each(){return m()},children:({id:w,url:V})=>(()=>{const g=nt(),j=g.firstChild;return g.$$click=()=>R(w),c(j,V),c(g,h(_,{class:"btn-circle btn-ghost btn-xs text-white",onClick:F=>{F.stopPropagation(),L(w)},get children(){return h(M,{})}}),null),g})()})),n})()};T(["click"]);export{it as default};
