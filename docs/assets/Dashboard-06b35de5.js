import{A as C,h as S,a as N,c as I,i as e,b as s,s as D,I as L,S as m,F as v,t as i}from"./index-5e42b8e0.js";import{L as k}from"./Loading-ea53d3b8.js";import{N as $}from"./NoDataAvailable-2fc5541b.js";const A=async()=>(await fetch(C+"/dashboard",S()).then(N)).json(),E=i('<div class="w-64 h-48 grid items-center text-center border bg-slate-700 border-slate-600 rounded-lg"><div class="text-6xl"> <br><span class="text-lg uppercase">users</span></div></div>'),F=i('<div class="flex flex-wrap gap-4 p-4"><div class="flex-grow h-48 pb-4 grid grid-cols-2 items-end border bg-slate-700 border-slate-600 rounded-lg"><div class="ml-8"><img class="w-32 h-32" alt="icon"></div><div class="mr-8 text-right"><div class="mb-2 text-7xl text-gray-400 font-bold">Iron Guard</div><div class="text-4xl text-gray-500 uppercase">inventory management system</div></div></div><div class="w-64 h-48 grid items-center text-center border bg-slate-700 border-slate-600 rounded-lg"><div class="text-6xl"> <br><span class="text-lg uppercase">items</span></div></div><div class="w-64 h-48 grid items-center text-center border bg-slate-700 border-slate-600 rounded-lg"><div class="text-6xl"> <br><span class="text-lg uppercase">categories</span></div></div></div>'),G=i('<div class="flex gap-4"><div class="overflow-x-auto px-4 flex-1"><h1 class="text-3xl p-4">Latest Items</h1><table class="w-full whitespace-nowrap rounded-lg divide-y divide-gray-300 overflow-hidden"><thead class="bg-gray-900"><tr class="text-white text-left"><th class="font-semibold text-sm uppercase px-6 py-4">Item</th><th class="font-semibold text-sm uppercase px-6 py-4">Description</th><th class="font-semibold text-sm uppercase px-6 py-4">Quantity</th></tr></thead><tbody class="divide-y divide-gray-600 bg-slate-800"></tbody></table></div><div class="overflow-x-auto px-4 flex-1"><h1 class="text-3xl p-4">Latest Categories</h1><table class="w-full whitespace-nowrap rounded-lg divide-y divide-gray-300 overflow-hidden"><thead class="bg-gray-900"><tr class="text-white text-left"><th class="font-semibold text-sm uppercase px-6 py-4">Category</th><th class="font-semibold text-sm uppercase px-6 py-4">Description</th></tr></thead><tbody class="divide-y divide-gray-600 bg-slate-800"></tbody></table></div></div>'),R=i('<div class="flex mt-4"><div class="overflow-x-auto px-4 flex-1"><h1 class="text-3xl p-4">Latest Users</h1><table class="w-full whitespace-nowrap rounded-lg divide-y divide-gray-300 overflow-hidden"><thead class="bg-gray-900"><tr class="text-white text-left"><th class="font-semibold text-sm uppercase px-6 py-4">Firstname</th><th class="font-semibold text-sm uppercase px-6 py-4">Lastname</th><th class="font-semibold text-sm uppercase px-6 py-4">Email</th><th class="font-semibold text-sm uppercase px-6 py-4">Role</th></tr></thead><tbody class="divide-y divide-gray-600 bg-slate-800"></tbody></table></div></div>'),j=i('<div class="flex-grow flex flex-col"></div>'),q=i('<tr><td class="px-6 py-4"></td><td class="px-6 py-4"></td><td class="px-6 py-4"></td></tr>'),B=i('<tr><td class="px-6 py-4"></td><td class="px-6 py-4"></td></tr>'),P=i('<tr><td class="px-6 py-4"></td><td class="px-6 py-4"></td><td class="px-6 py-4"></td><td class="px-6 py-4 uppercase"></td></tr>'),z=()=>{const[l]=I(A);return(()=>{const y=j.cloneNode(!0);return e(y,s(m,{get when(){return!l.loading},get fallback(){return s(k,{})},get children(){return[(()=>{const r=F.cloneNode(!0),d=r.firstChild,b=d.firstChild,u=b.firstChild,p=d.nextSibling,x=p.firstChild,a=x.firstChild,h=p.nextSibling,n=h.firstChild,g=n.firstChild;return D(u,"src",L),e(x,()=>l()?.count_items,a),e(n,()=>l()?.count_categories,g),e(r,s(m,{get when(){return l().count_users>0},get children(){const c=E.cloneNode(!0),t=c.firstChild,o=t.firstChild;return e(t,()=>l()?.count_users,o),c}}),null),r})(),(()=>{const r=G.cloneNode(!0),d=r.firstChild,b=d.firstChild,u=b.nextSibling,p=u.firstChild,x=p.nextSibling,a=d.nextSibling,h=a.firstChild,n=h.nextSibling,g=n.firstChild,c=g.nextSibling;return e(x,s(v,{get each(){return l()?.latest_items},get fallback(){return s($,{col:3})},children:t=>(()=>{const o=q.cloneNode(!0),f=o.firstChild,_=f.nextSibling,w=_.nextSibling;return e(f,()=>t.name),e(_,()=>t.description),e(w,()=>t.quantity),o})()})),e(c,s(v,{get each(){return l()?.latest_categories},get fallback(){return s($,{col:2})},children:t=>(()=>{const o=B.cloneNode(!0),f=o.firstChild,_=f.nextSibling;return e(f,()=>t.name),e(_,()=>t.description),o})()})),r})(),s(m,{get when(){return l().latest_users.length>0},get children(){const r=R.cloneNode(!0),d=r.firstChild,b=d.firstChild,u=b.nextSibling,p=u.firstChild,x=p.nextSibling;return e(x,s(v,{get each(){return l()?.latest_users},get fallback(){return s($,{col:4})},children:a=>(()=>{const h=P.cloneNode(!0),n=h.firstChild,g=n.nextSibling,c=g.nextSibling,t=c.nextSibling;return e(n,()=>a.firstname),e(g,()=>a.lastname),e(c,()=>a.email),e(t,()=>a.role),h})()})),r}})]}})),y})()};export{z as default};
