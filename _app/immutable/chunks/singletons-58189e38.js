import{B as u}from"./index-9bf5f0dc.js";let f="",g="";function R(e){f=e.base,g=e.assets||f}let h="";function k(e){h=e}const x="sveltekit:scroll",I="sveltekit:index",d={tap:1,hover:2,viewport:3,eager:4,off:-1};function y(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function A(){return{x:pageXOffset,y:pageYOffset}}function l(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const p={...d,"":d.hover};function b(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function S(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A")return e;e=b(e)}}function T(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o={rel_external:(e.getAttribute("rel")||"").split(/\s+/).includes("external"),download:e.hasAttribute("download"),target:!!(e instanceof SVGAElement?e.target.baseVal:e.target)},a=!n||m(n,t)||o.rel_external||o.target||o.download;return{url:n,has:o,external:a}}function U(e){let t=null,n=null,o=null,a=null,s=e;for(;s&&s!==document.documentElement;)n===null&&(n=l(s,"preload-code")),o===null&&(o=l(s,"preload-data")),t===null&&(t=l(s,"noscroll")),a===null&&(a=l(s,"reload")),s=b(s);return{preload_code:p[n??"off"],preload_data:p[o??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:a==="off"?!1:a===""?!0:null}}function _(e){const t=u(e);let n=!0;function o(){n=!0,t.update(r=>r)}function a(r){n=!1,t.set(r)}function s(r){let i;return t.subscribe(c=>{(i===void 0||n&&c!==i)&&r(i=c)})}return{notify:o,set:a,subscribe:s}}function v(){const{set:e,subscribe:t}=u(!1);let n;async function o(){clearTimeout(n);const a=await fetch(`${g}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const r=(await a.json()).version!==h;return r&&(e(!0),clearTimeout(n)),r}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:t,check:o}}function m(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let w;function L(e){w=e.client}const O={url:_({}),page:_({}),navigating:u(null),updated:v()};export{I,d as P,x as S,T as a,U as b,A as c,R as d,L as e,S as f,y as g,k as h,m as i,w as j,O as s};
