import{_ as N}from"./nuxt-link.19b5cbae.js";import{n as C,q as x,o as d,c as m,b as T,w as P,a as u,u as p,t as b,s as j,r as g,g as F,v as B,x as D,y as M,z as S,F as V,A as W,B as h}from"./entry.d811ef13.js";import{u as A}from"./fetch.353fd583.js";const q={class:"h-128 w-64 border flex flex-col text-center"},R=["src"],U={class:"text-lg"},G={class:"text-m text-gray-500 break-words text-wrap truncate overflow-hidden px-2"},L=C({__name:"MovieCard",props:{movie:{type:Object}},setup(t){const s=t,r=j(),e=x(()=>{var o;return((o=s.movie)==null?void 0:o.poster_path)!=null?`${r.public.imgBaseUrl}/${s.movie.poster_path}`:"https://via.placeholder.com/300x500"});return(o,i)=>{var l,c,n;const v=N;return d(),m("div",q,[T(v,{to:`/movies/${(l=t.movie)==null?void 0:l.id}`,class:"mb-5 bg-green-600 inline-block"},{default:P(()=>[u("img",{class:"transform hover:translate-x-6 hover:-translate-y-6 delay-50 duration-100 inline-block",src:p(e),alt:"Movie Poster"},null,8,R)]),_:1},8,["to"]),u("div",U,b((c=t.movie)==null?void 0:c.title),1),u("p",G,b((n=t.movie)==null?void 0:n.overview),1)])}}});function k(t){return typeof t=="function"?t():p(t)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const $=()=>{};function O(t,s){function r(...e){return new Promise((o,i)=>{Promise.resolve(t(()=>s.apply(this,e),{fn:s,thisArg:this,args:e})).then(o).catch(i)})}return r}function z(t,s={}){let r,e,o=$;const i=l=>{clearTimeout(l),o(),o=$};return l=>{const c=k(t),n=k(s.maxWait);return r&&i(r),c<=0||n!==void 0&&n<=0?(e&&(i(e),e=null),Promise.resolve(l())):new Promise((a,_)=>{o=s.rejectOnCancel?_:a,n&&!e&&(e=setTimeout(()=>{r&&i(r),e=null,a(l())},n)),r=setTimeout(()=>{e&&i(e),e=null,a(l())},c)})}}function E(t,s=200,r={}){return O(z(s,r),t)}function Q(t,s=200,r={}){const e=g(t.value),o=E(()=>{e.value=t.value},s,r);return F(t,()=>o()),e}const H={class:"flex flex-col py-10"},I=u("div",null,[u("h2",{class:"text-2xl font-bold text-center"},"Nxut Movies App")],-1),J={class:"flex justify-center items-center h-32"},K={class:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 self-center gap-x-10 gap-y-10 mb-10"},X={key:0,class:"flex justify-center"},Y={class:"px-4 py-2 text-m border rounded-lg"},oe=C({__name:"index",async setup(t){let s,r;const e=g(""),o=g(1);x(()=>o.value===1);const i=x(()=>{var n;return o.value+1===((n=c.value)==null?void 0:n.total_pages)}),v=Q(e,700),l=x(()=>`api/movies/search?query=${v.value}&page=${o.value}`),{data:c}=([s,r]=B(()=>A(l,"$pqtWcjQkdb")),s=await s,r(),s);return(n,a)=>{var y,w;const _=L;return d(),m("div",H,[I,u("div",J,[D(u("input",{class:"px-2 py-1 border border-gray-800 rounded-md min-w-64",type:"text","onUpdate:modelValue":a[0]||(a[0]=f=>S(e)?e.value=f:null),placeholder:"Search..."},null,512),[[M,p(e)]])]),u("div",K,[(d(!0),m(V,null,W((y=p(c))==null?void 0:y.results,f=>(d(),m("div",{key:f},[T(_,{movie:f},null,8,["movie"])]))),128))]),(w=p(c))!=null&&w.results.length?(d(),m("div",X,[n.disabledPrevious?h("",!0):(d(),m("button",{key:0,onClick:a[1]||(a[1]=f=>o.value--),class:"px-4 py-2 text-m border rounded-lg"},"Previous")),u("div",Y,b(p(o)),1),p(i)?h("",!0):(d(),m("button",{key:1,onClick:a[2]||(a[2]=f=>o.value++),class:"px-4 py-2 text-m border rounded-lg"},"Next"))])):h("",!0)])}}});export{oe as default};
