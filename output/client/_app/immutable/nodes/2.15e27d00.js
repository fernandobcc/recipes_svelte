import{S as U,i as W,s as J,k as y,y as q,l as k,m as C,z as V,h as m,n as v,b as E,A as D,G as ce,g as A,d as G,B as N,M as ne,q as F,r as R,u as se,a as I,c as S,C as X,D as _,v as re,K as le,L as ie,f as oe,R as ge}from"../chunks/index.874377d6.js";import{C as ue,T as de,a as me}from"../chunks/TagLink.7c9a8aaa.js";import{T as fe,m as z}from"../chunks/Tag.f4a9141b.js";import{b as he}from"../chunks/paths.ccd215ee.js";import{h as _e}from"../chunks/singletons.bc24d0a3.js";function pe(s){let t;return{c(){t=F(s[0])},l(e){t=R(e,s[0])},m(e,a){E(e,t,a)},p(e,a){a&1&&se(t,e[0])},d(e){e&&m(t)}}}function $e(s){let t,e,a,o,r;return e=new fe({props:{active:s[1],$$slots:{default:[pe]},$$scope:{ctx:s}}}),{c(){t=y("button"),q(e.$$.fragment),this.h()},l(n){t=k(n,"BUTTON",{class:!0});var l=C(t);V(e.$$.fragment,l),l.forEach(m),this.h()},h(){v(t,"class","svelte-10z98yb")},m(n,l){E(n,t,l),D(e,t,null),a=!0,o||(r=ce(t,"click",s[2]),o=!0)},p(n,[l]){const p={};l&2&&(p.active=n[1]),l&17&&(p.$$scope={dirty:l,ctx:n}),e.$set(p)},i(n){a||(A(e.$$.fragment,n),a=!0)},o(n){G(e.$$.fragment,n),a=!1},d(n){n&&m(t),N(e),o=!1,r()}}}function ve(s,t,e){let a,o;ne(s,z,l=>e(3,o=l));let{ingredient:r}=t;const n=()=>{a?z.removeIngredients(r):z.addIngredients(r)};return s.$$set=l=>{"ingredient"in l&&e(0,r=l.ingredient)},s.$$.update=()=>{s.$$.dirty&9&&e(1,a=o.includes(r))},[r,a,n,o]}class ye extends U{constructor(t){super(),W(this,t,ve,$e,J,{ingredient:0})}}function Z(s,t,e){const a=s.slice();return a[1]=t[e],a}function x(s,t){let e,a,o,r;return a=new ye({props:{ingredient:t[1]}}),{key:s,first:null,c(){e=y("li"),q(a.$$.fragment),o=I(),this.h()},l(n){e=k(n,"LI",{});var l=C(e);V(a.$$.fragment,l),o=S(l),l.forEach(m),this.h()},h(){this.first=e},m(n,l){E(n,e,l),D(a,e,null),_(e,o),r=!0},p(n,l){t=n;const p={};l&1&&(p.ingredient=t[1]),a.$set(p)},i(n){r||(A(a.$$.fragment,n),r=!0)},o(n){G(a.$$.fragment,n),r=!1},d(n){n&&m(e),N(a)}}}function ke(s){let t,e,a,o,r,n,l=s[0].name+"",p,P,b,f=[],w=new Map,d,L=s[0].ingredients;const M=c=>c[1];for(let c=0;c<L.length;c+=1){let i=Z(s,L,c),$=M(i);w.set($,f[c]=x($,i))}return{c(){t=y("div"),e=y("img"),r=I(),n=y("h3"),p=F(l),P=I(),b=y("ul");for(let c=0;c<f.length;c+=1)f[c].c();this.h()},l(c){t=k(c,"DIV",{class:!0});var i=C(t);e=k(i,"IMG",{src:!0,alt:!0,class:!0}),r=S(i),n=k(i,"H3",{class:!0});var $=C(n);p=R($,l),$.forEach(m),P=S(i),b=k(i,"UL",{class:!0});var B=C(b);for(let O=0;O<f.length;O+=1)f[O].l(B);B.forEach(m),i.forEach(m),this.h()},h(){X(e.src,a="icons/category_ingredients/"+s[0].image)||v(e,"src",a),v(e,"alt",o=s[0].name),v(e,"class","category-image svelte-gvqygo"),v(n,"class","category-name svelte-gvqygo"),v(b,"class","ingredients svelte-gvqygo"),v(t,"class","category-container svelte-gvqygo")},m(c,i){E(c,t,i),_(t,e),_(t,r),_(t,n),_(n,p),_(t,P),_(t,b);for(let $=0;$<f.length;$+=1)f[$]&&f[$].m(b,null);d=!0},p(c,i){(!d||i&1&&!X(e.src,a="icons/category_ingredients/"+c[0].image))&&v(e,"src",a),(!d||i&1&&o!==(o=c[0].name))&&v(e,"alt",o),(!d||i&1)&&l!==(l=c[0].name+"")&&se(p,l),i&1&&(L=c[0].ingredients,re(),f=le(f,i,M,1,c,L,w,b,ie,x,null,Z),oe())},i(c){if(!d){for(let i=0;i<L.length;i+=1)A(f[i]);d=!0}},o(c){for(let i=0;i<f.length;i+=1)G(f[i]);d=!1},d(c){c&&m(t);for(let i=0;i<f.length;i+=1)f[i].d()}}}function Ce(s){let t,e;return t=new ue({props:{$$slots:{default:[ke]},$$scope:{ctx:s}}}),{c(){q(t.$$.fragment)},l(a){V(t.$$.fragment,a)},m(a,o){D(t,a,o),e=!0},p(a,[o]){const r={};o&17&&(r.$$scope={dirty:o,ctx:a}),t.$set(r)},i(a){e||(A(t.$$.fragment,a),e=!0)},o(a){G(t.$$.fragment,a),e=!1},d(a){N(t,a)}}}function be(s,t,e){let{category:a}=t;return s.$$set=o=>{"category"in o&&e(0,a=o.category)},[a]}class Pe extends U{constructor(t){super(),W(this,t,be,Ce,J,{category:0})}}const ee=[{name:"Milk and Eggs",ingredients:["Eggs","Cheese","Milk","Butter","Sour Cream","Yogurt","Condensed Milk","Ice Cream"],image:"milk_and_egg.png"},{name:"Flour and Yeast",ingredients:["Wheat flour","Povilho","Bread flour","Canjica","Cassava flour","Corn meal","Linseed","Chemical yeast"],image:"flour.png"},{name:"Seasonings and Spices",ingredients:["Cinnamon","Clove","Oregano","Nutmeg","Thyme","Black Pepper","Cumin"],image:"seasonings_and_spices.png"},{name:"Oils, Fats and Vinegars",ingredients:["Vinegar","Oil","Palm","Olive Oil","Larth","Balsamic Aceto","Coconut Oil"],image:"oils_fats_and_vinegars.png"},{name:"Vegetables and Greens",ingredients:["Onion","Garlic","Tomato","Pumpkin","Zucchini","Potato","Pepper","Spinach","Carrot"],image:"vegetables_and_greens.png"},{name:"Sugars and Sweeteners",ingredients:["White sugar","Brown sugar","Crystal sugar","Molasses","Honey","Vanilla","Glucose","Xylite","Stevia"],image:"sugar.png"},{name:"Animal Proteins",ingredients:["Fish","Beef","Pork","Chicken","Bacon","Sausage","Tuna","Salmon","Ham","Cod"],image:"animal_proteins.png"},{name:"Grains, Cereals and Legumes",ingredients:["Rice","Beans","Oats","Peas","Lentils","Chickpeas","Corn","Sesame","Quinoa"],image:"cereal_grains_and_legumes.png"},{name:"Fresh fruit",ingredients:["Banana","Apple","Grape","Pear","Lemon","Strawberry","Plum","Raspberry","Apineapple"],image:"fresh_fruits.png"},{name:"Dried fruits",ingredients:["Cashew Nut","Brazil Nut","Raisin","Apricot","Date","Pistachio","Almond","Peanut"],image:"dried_fruits.png"},{name:"Breads and Pasta",ingredients:["Bread","Flatbread","Tortilla","Pasta","Gnocchi","Pastry dough","Lasagna dough","Biscuit","Cornbread"],image:"bread_and_pasta.png"},{name:"Sweets and Candies",ingredients:["Chocolate","Jam","Guava","Caramel","Whipped cream","Cocoa powder","Sigh","Jello","Paçoca"],image:"candies.png"}],we=_e("before_navigate");function te(s,t,e){const a=s.slice();return a[2]=t[e],a}function Ie(s){let t;return{c(){t=F("Ingredients")},l(e){t=R(e,"Ingredients")},m(e,a){E(e,t,a)},d(e){e&&m(t)}}}function ae(s,t){let e,a,o,r;return a=new Pe({props:{category:t[2]}}),{key:s,first:null,c(){e=y("li"),q(a.$$.fragment),o=I(),this.h()},l(n){e=k(n,"LI",{});var l=C(e);V(a.$$.fragment,l),o=S(l),l.forEach(m),this.h()},h(){this.first=e},m(n,l){E(n,e,l),D(a,e,null),_(e,o),r=!0},p(n,l){t=n},i(n){r||(A(a.$$.fragment,n),r=!0)},o(n){G(a.$$.fragment,n),r=!1},d(n){n&&m(e),N(a)}}}function Se(s){let t;return{c(){t=F("Search recipes!")},l(e){t=R(e,"Search recipes!")},m(e,a){E(e,t,a)},d(e){e&&m(t)}}}function Ee(s){let t,e,a,o,r,n,l,p,P,b,f,w,d=[],L=new Map,M,c,i,$;a=new de({props:{tag:"h1",$$slots:{default:[Ie]},$$scope:{ctx:s}}});let B=ee;const O=g=>g[2].name;for(let g=0;g<B.length;g+=1){let u=te(s,B,g),h=O(u);L.set(h,d[g]=ae(h,u))}return i=new me({props:{disabled:s[0],href:`${he}/recipes`,$$slots:{default:[Se]},$$scope:{ctx:s}}}),{c(){t=I(),e=y("main"),q(a.$$.fragment),o=I(),r=y("div"),n=y("p"),l=F("Please select the ingredients you would like to use below:"),p=I(),P=y("p"),b=F(`*Important: It is assumed that you already have salt, pepper and water at
			home.`),f=I(),w=y("ul");for(let g=0;g<d.length;g+=1)d[g].c();M=I(),c=y("div"),q(i.$$.fragment),this.h()},l(g){ge("svelte-1k0e4ah",document.head).forEach(m),t=S(g),e=k(g,"MAIN",{});var h=C(e);V(a.$$.fragment,h),o=S(h),r=k(h,"DIV",{class:!0});var T=C(r);n=k(T,"P",{class:!0});var Y=C(n);l=R(Y,"Please select the ingredients you would like to use below:"),Y.forEach(m),p=S(T),P=k(T,"P",{class:!0});var j=C(P);b=R(j,`*Important: It is assumed that you already have salt, pepper and water at
			home.`),j.forEach(m),T.forEach(m),f=S(h),w=k(h,"UL",{class:!0});var K=C(w);for(let H=0;H<d.length;H+=1)d[H].l(K);K.forEach(m),M=S(h),c=k(h,"DIV",{class:!0});var Q=C(c);V(i.$$.fragment,Q),Q.forEach(m),h.forEach(m),this.h()},h(){document.title="APP | Index",v(n,"class","svelte-t82isa"),v(P,"class","svelte-t82isa"),v(r,"class","info svelte-t82isa"),v(w,"class","categories svelte-t82isa"),v(c,"class","search-recipes svelte-t82isa")},m(g,u){E(g,t,u),E(g,e,u),D(a,e,null),_(e,o),_(e,r),_(r,n),_(n,l),_(r,p),_(r,P),_(P,b),_(e,f),_(e,w);for(let h=0;h<d.length;h+=1)d[h]&&d[h].m(w,null);_(e,M),_(e,c),D(i,c,null),$=!0},p(g,[u]){const h={};u&32&&(h.$$scope={dirty:u,ctx:g}),a.$set(h),u&0&&(B=ee,re(),d=le(d,u,O,1,g,B,L,w,ie,ae,null,te),oe());const T={};u&1&&(T.disabled=g[0]),u&32&&(T.$$scope={dirty:u,ctx:g}),i.$set(T)},i(g){if(!$){A(a.$$.fragment,g);for(let u=0;u<B.length;u+=1)A(d[u]);A(i.$$.fragment,g),$=!0}},o(g){G(a.$$.fragment,g);for(let u=0;u<d.length;u+=1)G(d[u]);G(i.$$.fragment,g),$=!1},d(g){g&&m(t),g&&m(e),N(a);for(let u=0;u<d.length;u+=1)d[u].d();N(i)}}}function Le(s,t,e){let a,o;return ne(s,z,r=>e(1,o=r)),we(async r=>{var n;a&&((n=r.to)==null?void 0:n.route.id)==="/recipes"&&r.cancel()}),s.$$.update=()=>{s.$$.dirty&2&&e(0,a=o.length===0)},[a,o]}class Oe extends U{constructor(t){super(),W(this,t,Le,Ee,J,{})}}export{Oe as component};