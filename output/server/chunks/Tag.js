import { w as writable } from "./index.js";
import { c as create_ssr_component, e as escape } from "./index2.js";
const { subscribe, set, update } = writable([]);
const myList = {
  subscribe,
  addIngredients: (item) => update((items) => [...items, item]),
  removeIngredients: (item) => update((items) => items.filter((i) => i !== item)),
  reset: () => set([])
};
const Tag_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tag.svelte-jb7kgq{height:48px;border-radius:8px;padding:1rem;text-align:center;color:var(--color-main-text);background-color:var(--gray);display:flex;justify-content:center;align-items:center;transition:all 0.2s ease-in-out}.active.svelte-jb7kgq{color:var(--white);background-color:var(--orange)}.lg.svelte-jb7kgq{font-size:1.125rem;padding:1rem 1.5rem}.disabled.svelte-jb7kgq{opacity:0.8;cursor:default}",
  map: null
};
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active = false } = $$props;
  let { size = "md" } = $$props;
  let { disabled = false } = $$props;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  $$result.css.add(css);
  return `<div class="${[
    "tag " + escape(size, true) + " svelte-jb7kgq",
    (active ? "active" : "") + " " + (disabled ? "disabled" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Tag as T,
  myList as m
};
