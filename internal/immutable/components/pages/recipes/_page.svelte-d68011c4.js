import{S as F,i as J,s as Q,k as d,w as D,l as $,m as b,x as A,p as H,b as v,y as S,f as G,t as O,h as m,z as V,a as w,q as P,c as R,r as B,C as K,n as g,D as _,u as X,T as ee,d as Y,M as te,g as Z,K as ie,L as se}from"../../../chunks/index-9bf5f0dc.js";import{C as ae,T as le,a as re}from"../../../chunks/TagLink-a94f9439.js";import{m as ne}from"../../../chunks/Tag-0ef984dd.js";import{b as ce}from"../../../chunks/paths-b4419565.js";function oe(c){let t,e,i,s,a,n,l=c[0].name+"",r;return{c(){t=d("img"),s=w(),a=d("div"),n=d("h3"),r=P(l),this.h()},l(o){t=$(o,"IMG",{src:!0,alt:!0,class:!0}),s=R(o),a=$(o,"DIV",{class:!0});var h=b(a);n=$(h,"H3",{class:!0});var T=b(n);r=B(T,l),T.forEach(m),h.forEach(m),this.h()},h(){K(t.src,e="images/recipes/"+c[0].image)||g(t,"src",e),g(t,"alt",i=c[0].name),g(t,"class","recipe-img svelte-hye4qa"),g(n,"class","recipe-name svelte-hye4qa"),g(a,"class","recipe-info svelte-hye4qa")},m(o,h){v(o,t,h),v(o,s,h),v(o,a,h),_(a,n),_(n,r)},p(o,h){h&1&&!K(t.src,e="images/recipes/"+o[0].image)&&g(t,"src",e),h&1&&i!==(i=o[0].name)&&g(t,"alt",i),h&1&&l!==(l=o[0].name+"")&&X(r,l)},d(o){o&&m(t),o&&m(s),o&&m(a)}}}function ue(c){let t,e,i;return t=new ae({props:{$$slots:{default:[oe]},$$scope:{ctx:c}}}),{c(){e=d("div"),D(t.$$.fragment),this.h()},l(s){e=$(s,"DIV",{style:!0});var a=b(e);A(t.$$.fragment,a),this.h()},h(){H(e,"display","contents"),H(e,"--cardWidth","280px")},m(s,a){v(s,e,a),S(t,e,null),i=!0},p(s,[a]){const n={};a&3&&(n.$$scope={dirty:a,ctx:s}),t.$set(n)},i(s){i||(G(t.$$.fragment,s),i=!0)},o(s){O(t.$$.fragment,s),i=!1},d(s){s&&t&&m(e),V(t,s)}}}function me(c,t,e){let{recipe:i}=t;return c.$$set=s=>{"recipe"in s&&e(0,i=s.recipe)},[i]}class fe extends F{constructor(t){super(),J(this,t,me,ue,Q,{recipe:0})}}const he=[{name:"Roasted Garlic Paste",ingredients:["Garlic","Olive Oil"],image:"roasted_garlic_paste.png"},{name:"Roasted Garlic Pate",ingredients:["Garlic","Olive Oil"],image:"roasted_garlic_pate.png"},{name:"Roasted Garlic",ingredients:["Garlic","Olive Oil","Oregano"],image:"roasted_garlic.png"},{name:"Garlic Rice",ingredients:["Rice","Garlic","Oil"],image:"garlic_rice.png"},{name:"Garlic Bread",ingredients:["Bread","Butter","Garlic","Oregano"],image:"garlic_bread.png"},{name:"Garlic and Oil Pasta",ingredients:["Pasta","Garlic","Oil","Butter"],image:"garlic_and_oil_pasta.png"},{name:"Cod with Garlic Chips",ingredients:["Cod","Garlic","Olive Oil","Lemon"],image:"cod_with_garlic_chips.png"},{name:"Butter with Thyme and Garlic",ingredients:["Butter","Garlic","Thyme"],image:"butter_with_thyme_and_garlic.png"},{name:"Pie with pumpkin filling",ingredients:["Pastry dough","Pumpkin","Tomato","Garlic","Oil","Bread flour","Nutmeg"],image:"tortei.png"},{name:"Chicken Cream",ingredients:["Chicken","Milk","Sour Cream","Corn","Eggs"],image:"chicken_cream.png"},{name:"Pancake",ingredients:["Wheat flour","Butter","Milk","Eggs"],image:"pancake.png"},{name:"Chocolate Milkshake",ingredients:["Chocolate","Whipped cream"],image:"chocolate_milkshake.png"},{name:"Chocolate Mousse",ingredients:["Sour Cream","Chocolate","Eggs","Butter"],image:"chocolate_mousse.png"}];function U(c,t,e){const i=c.slice();return i[2]=t[e],i}function _e(c){let t;return{c(){t=P("Amazing Recipes | Recipes")},l(e){t=B(e,"Amazing Recipes | Recipes")},m(e,i){v(e,t,i)},d(e){e&&m(t)}}}function ge(c){let t,e;return{c(){t=d("p"),e=P("Try to select other or more ingredients"),this.h()},l(i){t=$(i,"P",{class:!0});var s=b(t);e=B(s,"Try to select other or more ingredients"),s.forEach(m),this.h()},h(){g(t,"class","svelte-1bus9xv")},m(i,s){v(i,t,s),_(t,e)},d(i){i&&m(t)}}}function pe(c){let t,e;return{c(){t=d("p"),e=P("Check recipe options found with selected options:"),this.h()},l(i){t=$(i,"P",{class:!0});var s=b(t);e=B(s,"Check recipe options found with selected options:"),s.forEach(m),this.h()},h(){g(t,"class","svelte-1bus9xv")},m(i,s){v(i,t,s),_(t,e)},d(i){i&&m(t)}}}function j(c){let t,e=[],i=new Map,s,a=c[0];const n=l=>l[2].name;for(let l=0;l<a.length;l+=1){let r=U(c,a,l),o=n(r);i.set(o,e[l]=x(o,r))}return{c(){t=d("ul");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=$(l,"UL",{class:!0});var r=b(t);for(let o=0;o<e.length;o+=1)e[o].l(r);r.forEach(m),this.h()},h(){g(t,"class","recipes svelte-1bus9xv")},m(l,r){v(l,t,r);for(let o=0;o<e.length;o+=1)e[o].m(t,null);s=!0},p(l,r){r&1&&(a=l[0],Z(),e=ie(e,r,n,1,l,a,i,t,se,x,null,U),Y())},i(l){if(!s){for(let r=0;r<a.length;r+=1)G(e[r]);s=!0}},o(l){for(let r=0;r<e.length;r+=1)O(e[r]);s=!1},d(l){l&&m(t);for(let r=0;r<e.length;r+=1)e[r].d()}}}function x(c,t){let e,i,s,a;return i=new fe({props:{recipe:t[2]}}),{key:c,first:null,c(){e=d("li"),D(i.$$.fragment),s=w(),this.h()},l(n){e=$(n,"LI",{class:!0});var l=b(e);A(i.$$.fragment,l),s=R(l),l.forEach(m),this.h()},h(){g(e,"class","svelte-1bus9xv"),this.first=e},m(n,l){v(n,e,l),S(i,e,null),_(e,s),a=!0},p(n,l){t=n;const r={};l&1&&(r.recipe=t[2]),i.$set(r)},i(n){a||(G(i.$$.fragment,n),a=!0)},o(n){O(i.$$.fragment,n),a=!1},d(n){n&&m(e),V(i)}}}function de(c){let t;return{c(){t=P("Edit list!")},l(e){t=B(e,"Edit list!")},m(e,i){v(e,t,i)},d(e){e&&m(t)}}}function $e(c){let t,e,i,s,a,n,l,r=c[0].length+"",o,h,T,L,M,C,I;i=new le({props:{tag:"h1",$$slots:{default:[_e]},$$scope:{ctx:c}}});function W(u,p){return u[0].length?pe:ge}let q=W(c),y=q(c),f=c[0].length&&j(c);return C=new re({props:{href:ce+"/",$$slots:{default:[de]},$$scope:{ctx:c}}}),{c(){t=w(),e=d("main"),D(i.$$.fragment),s=w(),a=d("div"),n=d("p"),l=P("Results found: "),o=P(r),h=w(),y.c(),T=w(),f&&f.c(),L=w(),M=d("div"),D(C.$$.fragment),this.h()},l(u){ee("svelte-cwdhnw",document.head).forEach(m),t=R(u),e=$(u,"MAIN",{});var k=b(e);A(i.$$.fragment,k),s=R(k),a=$(k,"DIV",{class:!0});var E=b(a);n=$(E,"P",{class:!0});var z=b(n);l=B(z,"Results found: "),o=B(z,r),z.forEach(m),h=R(E),y.l(E),E.forEach(m),T=R(k),f&&f.l(k),L=R(k),M=$(k,"DIV",{class:!0});var N=b(M);A(C.$$.fragment,N),N.forEach(m),k.forEach(m),this.h()},h(){document.title="APP | Recipes",g(n,"class","green svelte-1bus9xv"),g(a,"class","info svelte-1bus9xv"),g(M,"class","edit-list svelte-1bus9xv")},m(u,p){v(u,t,p),v(u,e,p),S(i,e,null),_(e,s),_(e,a),_(a,n),_(n,l),_(n,o),_(a,h),y.m(a,null),_(e,T),f&&f.m(e,null),_(e,L),_(e,M),S(C,M,null),I=!0},p(u,[p]){const k={};p&32&&(k.$$scope={dirty:p,ctx:u}),i.$set(k),(!I||p&1)&&r!==(r=u[0].length+"")&&X(o,r),q!==(q=W(u))&&(y.d(1),y=q(u),y&&(y.c(),y.m(a,null))),u[0].length?f?(f.p(u,p),p&1&&G(f,1)):(f=j(u),f.c(),G(f,1),f.m(e,L)):f&&(Z(),O(f,1,1,()=>{f=null}),Y());const E={};p&32&&(E.$$scope={dirty:p,ctx:u}),C.$set(E)},i(u){I||(G(i.$$.fragment,u),G(f),G(C.$$.fragment,u),I=!0)},o(u){O(i.$$.fragment,u),O(f),O(C.$$.fragment,u),I=!1},d(u){u&&m(t),u&&m(e),V(i),y.d(),f&&f.d(),V(C)}}}function ve(c,t,e){let i,s;return te(c,ne,a=>e(1,s=a)),c.$$.update=()=>{c.$$.dirty&2&&e(0,i=he.filter(a=>a.ingredients.every(n=>s.includes(n))))},[i,s]}class Ge extends F{constructor(t){super(),J(this,t,ve,$e,Q,{})}}export{Ge as default};