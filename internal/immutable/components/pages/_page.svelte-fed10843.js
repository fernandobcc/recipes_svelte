import{S as W,i as j,s as J,k as y,w as V,l as k,m as C,x as D,h as m,n as v,b as E,y as N,G as ge,f as A,t as G,z as F,M as se,q as z,r as H,u as re,a as I,c as S,C as Z,D as f,g as le,K as ie,L as oe,d as ce,T as ue}from"../../chunks/index-9bf5f0dc.js";import{C as de,T as me,a as fe}from"../../chunks/TagLink-a94f9439.js";import{T as he,m as R}from"../../chunks/Tag-0ef984dd.js";import{j as M,k as _e}from"../../chunks/singletons-22e01f6d.js";function pe(s){let t;return{c(){t=z(s[0])},l(e){t=H(e,s[0])},m(e,a){E(e,t,a)},p(e,a){a&1&&re(t,e[0])},d(e){e&&m(t)}}}function $e(s){let t,e,a,o,r;return e=new he({props:{active:s[1],$$slots:{default:[pe]},$$scope:{ctx:s}}}),{c(){t=y("button"),V(e.$$.fragment),this.h()},l(n){t=k(n,"BUTTON",{class:!0});var l=C(t);D(e.$$.fragment,l),l.forEach(m),this.h()},h(){v(t,"class","svelte-10z98yb")},m(n,l){E(n,t,l),N(e,t,null),a=!0,o||(r=ge(t,"click",s[2]),o=!0)},p(n,[l]){const p={};l&2&&(p.active=n[1]),l&17&&(p.$$scope={dirty:l,ctx:n}),e.$set(p)},i(n){a||(A(e.$$.fragment,n),a=!0)},o(n){G(e.$$.fragment,n),a=!1},d(n){n&&m(t),F(e),o=!1,r()}}}function ve(s,t,e){let a,o;se(s,R,l=>e(3,o=l));let{ingredient:r}=t;const n=()=>{a?R.removeIngredients(r):R.addIngredients(r)};return s.$$set=l=>{"ingredient"in l&&e(0,r=l.ingredient)},s.$$.update=()=>{s.$$.dirty&9&&e(1,a=o.includes(r))},[r,a,n,o]}class ye extends W{constructor(t){super(),j(this,t,ve,$e,J,{ingredient:0})}}function x(s,t,e){const a=s.slice();return a[1]=t[e],a}function ee(s,t){let e,a,o,r;return a=new ye({props:{ingredient:t[1]}}),{key:s,first:null,c(){e=y("li"),V(a.$$.fragment),o=I(),this.h()},l(n){e=k(n,"LI",{});var l=C(e);D(a.$$.fragment,l),o=S(l),l.forEach(m),this.h()},h(){this.first=e},m(n,l){E(n,e,l),N(a,e,null),f(e,o),r=!0},p(n,l){t=n;const p={};l&1&&(p.ingredient=t[1]),a.$set(p)},i(n){r||(A(a.$$.fragment,n),r=!0)},o(n){G(a.$$.fragment,n),r=!1},d(n){n&&m(e),F(a)}}}function ke(s){let t,e,a,o,r,n,l=s[0].name+"",p,P,b,h=[],w=new Map,d,L=s[0].ingredients;const O=c=>c[1];for(let c=0;c<L.length;c+=1){let i=x(s,L,c),$=O(i);w.set($,h[c]=ee($,i))}return{c(){t=y("div"),e=y("img"),r=I(),n=y("h3"),p=z(l),P=I(),b=y("ul");for(let c=0;c<h.length;c+=1)h[c].c();this.h()},l(c){t=k(c,"DIV",{class:!0});var i=C(t);e=k(i,"IMG",{src:!0,alt:!0,class:!0}),r=S(i),n=k(i,"H3",{class:!0});var $=C(n);p=H($,l),$.forEach(m),P=S(i),b=k(i,"UL",{class:!0});var B=C(b);for(let q=0;q<h.length;q+=1)h[q].l(B);B.forEach(m),i.forEach(m),this.h()},h(){Z(e.src,a="icons/category_ingredients/"+s[0].image)||v(e,"src",a),v(e,"alt",o=s[0].name),v(e,"class","category-image svelte-gvqygo"),v(n,"class","category-name svelte-gvqygo"),v(b,"class","ingredients svelte-gvqygo"),v(t,"class","category-container svelte-gvqygo")},m(c,i){E(c,t,i),f(t,e),f(t,r),f(t,n),f(n,p),f(t,P),f(t,b);for(let $=0;$<h.length;$+=1)h[$].m(b,null);d=!0},p(c,i){(!d||i&1&&!Z(e.src,a="icons/category_ingredients/"+c[0].image))&&v(e,"src",a),(!d||i&1&&o!==(o=c[0].name))&&v(e,"alt",o),(!d||i&1)&&l!==(l=c[0].name+"")&&re(p,l),i&1&&(L=c[0].ingredients,le(),h=ie(h,i,O,1,c,L,w,b,oe,ee,null,x),ce())},i(c){if(!d){for(let i=0;i<L.length;i+=1)A(h[i]);d=!0}},o(c){for(let i=0;i<h.length;i+=1)G(h[i]);d=!1},d(c){c&&m(t);for(let i=0;i<h.length;i+=1)h[i].d()}}}function Ce(s){let t,e;return t=new de({props:{$$slots:{default:[ke]},$$scope:{ctx:s}}}),{c(){V(t.$$.fragment)},l(a){D(t.$$.fragment,a)},m(a,o){N(t,a,o),e=!0},p(a,[o]){const r={};o&17&&(r.$$scope={dirty:o,ctx:a}),t.$set(r)},i(a){e||(A(t.$$.fragment,a),e=!0)},o(a){G(t.$$.fragment,a),e=!1},d(a){F(t,a)}}}function be(s,t,e){let{category:a}=t;return s.$$set=o=>{"category"in o&&e(0,a=o.category)},[a]}class Pe extends W{constructor(t){super(),j(this,t,be,Ce,J,{category:0})}}const te=[{name:"Milk and Eggs",ingredients:["Eggs","Cheese","Milk","Butter","Sour Cream","Yogurt","Condensed Milk","Ice Cream"],image:"milk_and_egg.png"},{name:"Flour and Yeast",ingredients:["Wheat flour","Povilho","Bread flour","Canjica","Cassava flour","Corn meal","Linseed","Chemical yeast"],image:"flour.png"},{name:"Seasonings and Spices",ingredients:["Cinnamon","Clove","Oregano","Nutmeg","Thyme","Black Pepper","Cumin"],image:"seasonings_and_spices.png"},{name:"Oils, Fats and Vinegars",ingredients:["Vinegar","Oil","Palm","Olive Oil","Larth","Balsamic Aceto","Coconut Oil"],image:"oils_fats_and_vinegars.png"},{name:"Vegetables and Greens",ingredients:["Onion","Garlic","Tomato","Pumpkin","Zucchini","Potato","Pepper","Spinach","Carrot"],image:"vegetables_and_greens.png"},{name:"Sugars and Sweeteners",ingredients:["White sugar","Brown sugar","Crystal sugar","Molasses","Honey","Vanilla","Glucose","Xylite","Stevia"],image:"sugar.png"},{name:"Animal Proteins",ingredients:["Fish","Beef","Pork","Chicken","Bacon","Sausage","Tuna","Salmon","Ham","Cod"],image:"animal_proteins.png"},{name:"Grains, Cereals and Legumes",ingredients:["Rice","Beans","Oats","Peas","Lentils","Chickpeas","Corn","Sesame","Quinoa"],image:"cereal_grains_and_legumes.png"},{name:"Fresh fruit",ingredients:["Banana","Apple","Grape","Pear","Lemon","Strawberry","Plum","Raspberry","Apineapple"],image:"fresh_fruits.png"},{name:"Dried fruits",ingredients:["Cashew Nut","Brazil Nut","Raisin","Apricot","Date","Pistachio","Almond","Peanut"],image:"dried_fruits.png"},{name:"Breads and Pasta",ingredients:["Bread","Flatbread","Tortilla","Pasta","Gnocchi","Pastry dough","Lasagna dough","Biscuit","Cornbread"],image:"bread_and_pasta.png"},{name:"Sweets and Candies",ingredients:["Chocolate","Jam","Guava","Caramel","Whipped cream","Cocoa powder","Sigh","Jello","Paçoca"],image:"candies.png"}];M.disable_scroll_handling;M.goto;M.invalidate;M.invalidateAll;M.preload_data;M.preload_code;const we=M.before_navigate;M.after_navigate;function ae(s,t,e){const a=s.slice();return a[2]=t[e],a}function Ie(s){let t;return{c(){t=z("Ingredients")},l(e){t=H(e,"Ingredients")},m(e,a){E(e,t,a)},d(e){e&&m(t)}}}function ne(s,t){let e,a,o,r;return a=new Pe({props:{category:t[2]}}),{key:s,first:null,c(){e=y("li"),V(a.$$.fragment),o=I(),this.h()},l(n){e=k(n,"LI",{});var l=C(e);D(a.$$.fragment,l),o=S(l),l.forEach(m),this.h()},h(){this.first=e},m(n,l){E(n,e,l),N(a,e,null),f(e,o),r=!0},p(n,l){t=n},i(n){r||(A(a.$$.fragment,n),r=!0)},o(n){G(a.$$.fragment,n),r=!1},d(n){n&&m(e),F(a)}}}function Se(s){let t;return{c(){t=z("Search recipes!")},l(e){t=H(e,"Search recipes!")},m(e,a){E(e,t,a)},d(e){e&&m(t)}}}function Ee(s){let t,e,a,o,r,n,l,p,P,b,h,w,d=[],L=new Map,O,c,i,$;a=new me({props:{tag:"h1",$$slots:{default:[Ie]},$$scope:{ctx:s}}});let B=te;const q=g=>g[2].name;for(let g=0;g<B.length;g+=1){let u=ae(s,B,g),_=q(u);L.set(_,d[g]=ne(_,u))}return i=new fe({props:{disabled:s[0],href:_e+"/recipes",$$slots:{default:[Se]},$$scope:{ctx:s}}}),{c(){t=I(),e=y("main"),V(a.$$.fragment),o=I(),r=y("div"),n=y("p"),l=z("Please select the ingredients you would like to use below:"),p=I(),P=y("p"),b=z(`*Important: It is assumed that you already have salt, pepper and water at
			home.`),h=I(),w=y("ul");for(let g=0;g<d.length;g+=1)d[g].c();O=I(),c=y("div"),V(i.$$.fragment),this.h()},l(g){ue("svelte-1k0e4ah",document.head).forEach(m),t=S(g),e=k(g,"MAIN",{});var _=C(e);D(a.$$.fragment,_),o=S(_),r=k(_,"DIV",{class:!0});var T=C(r);n=k(T,"P",{class:!0});var Y=C(n);l=H(Y,"Please select the ingredients you would like to use below:"),Y.forEach(m),p=S(T),P=k(T,"P",{class:!0});var K=C(P);b=H(K,`*Important: It is assumed that you already have salt, pepper and water at
			home.`),K.forEach(m),T.forEach(m),h=S(_),w=k(_,"UL",{class:!0});var Q=C(w);for(let U=0;U<d.length;U+=1)d[U].l(Q);Q.forEach(m),O=S(_),c=k(_,"DIV",{class:!0});var X=C(c);D(i.$$.fragment,X),X.forEach(m),_.forEach(m),this.h()},h(){document.title="APP | Index",v(n,"class","svelte-t82isa"),v(P,"class","svelte-t82isa"),v(r,"class","info svelte-t82isa"),v(w,"class","categories svelte-t82isa"),v(c,"class","search-recipes svelte-t82isa")},m(g,u){E(g,t,u),E(g,e,u),N(a,e,null),f(e,o),f(e,r),f(r,n),f(n,l),f(r,p),f(r,P),f(P,b),f(e,h),f(e,w);for(let _=0;_<d.length;_+=1)d[_].m(w,null);f(e,O),f(e,c),N(i,c,null),$=!0},p(g,[u]){const _={};u&32&&(_.$$scope={dirty:u,ctx:g}),a.$set(_),u&0&&(B=te,le(),d=ie(d,u,q,1,g,B,L,w,oe,ne,null,ae),ce());const T={};u&1&&(T.disabled=g[0]),u&32&&(T.$$scope={dirty:u,ctx:g}),i.$set(T)},i(g){if(!$){A(a.$$.fragment,g);for(let u=0;u<B.length;u+=1)A(d[u]);A(i.$$.fragment,g),$=!0}},o(g){G(a.$$.fragment,g);for(let u=0;u<d.length;u+=1)G(d[u]);G(i.$$.fragment,g),$=!1},d(g){g&&m(t),g&&m(e),F(a);for(let u=0;u<d.length;u+=1)d[u].d();F(i)}}}function Le(s,t,e){let a,o;return se(s,R,r=>e(1,o=r)),we(async r=>{var n;a&&((n=r.to)==null?void 0:n.route.id)==="/recipes"&&r.cancel()}),s.$$.update=()=>{s.$$.dirty&2&&e(0,a=o.length===0)},[a,o]}class Me extends W{constructor(t){super(),j(this,t,Le,Ee,J,{})}}export{Me as default};
