import{A as P,h as C,a as I,g as r,c as M,j as O,i as e,b as l,S as g,B as R,t as d,k as q}from"./index-f282f4e2.js";import{I as p}from"./Input-78de07b2.js";const z=async()=>(await fetch(P+"/me",C()).then(I)).json(),D=async(i,o,c,x)=>(await fetch(P+"/me",{method:"PUT",...C(),body:JSON.stringify({firstname:i,lastname:o,email:c,password:x})}).then(I)).json(),G=d('<span class="ml-4 px-4 py-2 rounded text-xl bg-red-900 text-gray-300"></span>'),H=d('<span class="ml-4 px-4 py-2 rounded text-xl bg-green-800 text-gray-300"></span>'),K=d('<h1 class="px-4 py-2 my-4 text-3xl border-b border-b-slate-700">Profile</h1>'),Q=d('<div class="flex-grow p-4 bg-gray-700"><div class="flex items-center py-2"><div class="px-2 text-slate-300 text-xl w-64">Firstname</div><div class="px-2"></div></div><div class="flex items-center py-2"><div class="px-2 text-slate-300 text-xl w-64">Lastname</div><div class="px-2"></div></div><div class="flex items-center py-2"><div class="px-2 text-slate-300 text-xl w-64">Email</div><div class="px-2"></div></div><div class="flex items-center py-2"><div class="px-2 text-slate-300 text-xl w-64">Password</div><div class="px-2"></div></div><div class="flex items-center px-2 py-4 mt-4 border-t border-t-slate-800 gap-2"></div></div>'),V=d('<div class="flex-grow flex flex-col px-2"></div>'),Y=()=>{const[i,o]=r(""),[c,x]=r(""),[u,v]=r(""),[f,T]=r(""),[h,_]=r(""),[$,b]=r(""),[m]=M(z);O(()=>{if(m()){const t=m();o(t.firstname),x(t.lastname),v(t.email)}});const E=async()=>{if(i().trim()===""||c().trim()===""||u().trim()===""){_("Please fill firstname, lastname and email.");return}const t=await D(i(),c(),u(),f());t.status===q.Success?(b("Updated!"),setTimeout(()=>b(""),1e3)):_(t.message)};return(()=>{const t=V.cloneNode(!0);return e(t,l(g,{get when(){return!m.loading},get children(){return[(()=>{const a=K.cloneNode(!0);return a.firstChild,e(a,l(g,{get when(){return h()!==""},get children(){const s=G.cloneNode(!0);return e(s,h),s}}),null),e(a,l(g,{get when(){return $()!==""},get children(){const s=H.cloneNode(!0);return e(s,$),s}}),null),a})(),(()=>{const a=Q.cloneNode(!0),s=a.firstChild,N=s.firstChild,j=N.nextSibling,y=s.nextSibling,k=y.firstChild,A=k.nextSibling,w=y.nextSibling,B=w.firstChild,U=B.nextSibling,S=w.nextSibling,F=S.firstChild,L=F.nextSibling,J=S.nextSibling;return e(j,l(p,{get value(){return i()},onInput:n=>o(n.currentTarget.value)})),e(A,l(p,{get value(){return c()},onInput:n=>x(n.currentTarget.value)})),e(U,l(p,{type:"email",get value(){return u()},onInput:n=>v(n.currentTarget.value)})),e(L,l(p,{type:"password",placeholder:"Unchanged",get value(){return f()},onInput:n=>T(n.currentTarget.value)})),e(J,l(R,{label:"Save",onClick:E})),a})()]}})),t})()};export{Y as default};
