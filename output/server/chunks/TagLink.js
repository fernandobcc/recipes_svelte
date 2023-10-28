import { c as create_ssr_component, e as escape, i as is_void, d as add_attribute, v as validate_component } from "./index2.js";
import { T as Tag } from "./Tag.js";
const Card_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card.svelte-1xubg7p{width:var(--cardWidth, 300px);min-height:100%;background:var(--white);box-shadow:4px 4px 10px 1px rgba(0, 0, 0, 0.1)}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="card svelte-1xubg7p">${slots.default ? slots.default({}) : ``}
</div>`;
});
const Title_svelte_svelte_type_style_lang = "";
const css = {
  code: ".title.svelte-1giz2pu{color:var(--green);text-transform:uppercase}.tag-h1.svelte-1giz2pu{font-size:1.5rem;font-weight:700;line-height:2rem;margin-bottom:1rem}.tag-h1.svelte-1giz2pu{font-size:1.5rem;font-weight:700;line-height:2rem;margin-bottom:1rem}",
  map: null
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tag } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  $$result.css.add(css);
  return `${((tag$1) => {
    return tag$1 ? `<${tag} class="${"title tag-" + escape(tag, true) + " svelte-1giz2pu"}">${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}
`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
const TagLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { disabled = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  return `<a${add_attribute("href", href, 0)} class="button">${validate_component(Tag, "Tag").$$render($$result, { active: true, size: "lg", disabled }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</a>`;
});
export {
  Card as C,
  Title as T,
  TagLink as a
};
