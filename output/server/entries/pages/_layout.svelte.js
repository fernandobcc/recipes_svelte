import { c as create_ssr_component, v as validate_component, e as escape, a as subscribe, b as each } from "../../chunks/index2.js";
import { T as Tag, m as myList } from "../../chunks/Tag.js";
const app = "";
const Footer_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "footer.svelte-wkqshn{background:url('/images/footer.png');height:100px;font-weight:700;color:var(--white);display:flex;justify-content:center;align-items:center}.registered.svelte-wkqshn{margin-right:6px}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<footer class="svelte-wkqshn"><img class="registered svelte-wkqshn" src="icons/registered.png" alt="registered signature icon">
	Copyright 2022 - All Rights Reserved
</footer>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "header.svelte-1nxfpzt{--base-screen-width:1440;background:url('/images/header.png') no-repeat;background-size:100%;height:calc((325 / var(--base-screen-width)) * 100vw);margin-bottom:3rem;display:flex;justify-content:center;align-items:center}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<header class="svelte-1nxfpzt"><img src="/images/amazing-logo.svg" alt="Logo recipes">
</header>`;
});
const MyIngredient_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".my-ingredient-container.svelte-1mzif5s{position:relative}.close.svelte-1mzif5s{background-image:url('/icons/close.svg');height:10px;width:10px;cursor:pointer;position:absolute;top:4px;right:4px}.remove.svelte-1mzif5s{line-height:24px;font-size:0.875rem;color:var(--orange);cursor:pointer}",
  map: null
};
const MyIngredient = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ingredient } = $$props;
  if ($$props.ingredient === void 0 && $$bindings.ingredient && ingredient !== void 0)
    $$bindings.ingredient(ingredient);
  $$result.css.add(css$2);
  return `<div class="my-ingredient-container svelte-1mzif5s">${validate_component(Tag, "Tag").$$render($$result, { active: true }, {}, {
    default: () => {
      return `<button class="close svelte-1mzif5s"></button>
		${escape(ingredient)}`;
    }
  })}

	<span class="remove svelte-1mzif5s">Remove</span>
</div>`;
});
const MyList_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".my-list.svelte-1unag4b.svelte-1unag4b{padding-bottom:1.625rem}.my-list.svelte-1unag4b>h2.svelte-1unag4b{font-size:1.5rem;color:var(--orange);margin-bottom:1.5rem;line-height:2rem;font-weight:700}.my-ingredients.svelte-1unag4b.svelte-1unag4b{display:flex;flex-wrap:wrap;justify-content:center;gap:0.75rem 1.875rem}",
  map: null
};
const MyList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $myList, $$unsubscribe_myList;
  $$unsubscribe_myList = subscribe(myList, (value) => $myList = value);
  $$result.css.add(css$1);
  $$unsubscribe_myList();
  return `<section class="my-list svelte-1unag4b"><h2 class="svelte-1unag4b">My list:</h2>
	<ul class="my-ingredients svelte-1unag4b">${each($myList, (ingredient) => {
    return `<li>${validate_component(MyIngredient, "MyIngredient").$$render($$result, { ingredient }, {}, {})}
			</li>`;
  })}</ul>
</section>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main-container.svelte-15kgwgb{display:flex;flex-direction:column;min-height:100vh}.main-style.svelte-15kgwgb{text-align:center;padding:0 5vw 3.375rem;flex:1}.my-list-container.svelte-15kgwgb{margin-bottom:2rem}.diviser.svelte-15kgwgb{width:40vw;height:2px;background-color:var(--green);margin:0 auto}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $myList, $$unsubscribe_myList;
  $$unsubscribe_myList = subscribe(myList, (value) => $myList = value);
  $$result.css.add(css);
  $$unsubscribe_myList();
  return `<div class="main-container svelte-15kgwgb">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<div class="main-style svelte-15kgwgb">${$myList.length ? `<div class="my-list-container svelte-15kgwgb">${validate_component(MyList, "MyList").$$render($$result, {}, {}, {})}
				<div class="diviser svelte-15kgwgb"></div></div>` : ``}

		${slots.default ? slots.default({}) : ``}</div>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
