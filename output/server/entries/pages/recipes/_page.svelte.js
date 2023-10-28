import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute, a as subscribe, b as each } from "../../../chunks/index2.js";
import { C as Card, T as Title, a as TagLink } from "../../../chunks/TagLink.js";
import { b as base } from "../../../chunks/paths.js";
import { m as myList } from "../../../chunks/Tag.js";
const Recipes_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".recipe-img.svelte-hye4qa{width:100%;height:150px}.recipe-name.svelte-hye4qa{font-size:1.125rem}.recipe-info.svelte-hye4qa{padding:0.75rem 0.875rem}",
  map: null
};
const Recipes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { recipe } = $$props;
  if ($$props.recipe === void 0 && $$bindings.recipe && recipe !== void 0)
    $$bindings.recipe(recipe);
  $$result.css.add(css$1);
  return `<div style="display: contents; --cardWidth:280px;">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<img src="${"/images/recipes/" + escape(recipe.image, true)}"${add_attribute("alt", recipe.name, 0)} class="recipe-img svelte-hye4qa">

	<div class="recipe-info svelte-hye4qa"><h3 class="recipe-name svelte-hye4qa">${escape(recipe.name)}</h3></div>`;
    }
  })}</div>`;
});
const recipes = [
  {
    name: "Roasted Garlic Paste",
    ingredients: [
      "Garlic",
      "Olive Oil"
    ],
    image: "roasted_garlic_paste.png"
  },
  {
    name: "Roasted Garlic Pate",
    ingredients: [
      "Garlic",
      "Olive Oil"
    ],
    image: "roasted_garlic_pate.png"
  },
  {
    name: "Roasted Garlic",
    ingredients: [
      "Garlic",
      "Olive Oil",
      "Oregano"
    ],
    image: "roasted_garlic.png"
  },
  {
    name: "Garlic Rice",
    ingredients: [
      "Rice",
      "Garlic",
      "Oil"
    ],
    image: "garlic_rice.png"
  },
  {
    name: "Garlic Bread",
    ingredients: [
      "Bread",
      "Butter",
      "Garlic",
      "Oregano"
    ],
    image: "garlic_bread.png"
  },
  {
    name: "Garlic and Oil Pasta",
    ingredients: [
      "Pasta",
      "Garlic",
      "Oil",
      "Butter"
    ],
    image: "garlic_and_oil_pasta.png"
  },
  {
    name: "Cod with Garlic Chips",
    ingredients: [
      "Cod",
      "Garlic",
      "Olive Oil",
      "Lemon"
    ],
    image: "cod_with_garlic_chips.png"
  },
  {
    name: "Butter with Thyme and Garlic",
    ingredients: [
      "Butter",
      "Garlic",
      "Thyme"
    ],
    image: "butter_with_thyme_and_garlic.png"
  },
  {
    name: "Pie with pumpkin filling",
    ingredients: [
      "Pastry dough",
      "Pumpkin",
      "Tomato",
      "Garlic",
      "Oil",
      "Bread flour",
      "Nutmeg"
    ],
    image: "tortei.png"
  },
  {
    name: "Chicken Cream",
    ingredients: [
      "Chicken",
      "Milk",
      "Sour Cream",
      "Corn",
      "Eggs"
    ],
    image: "chicken_cream.png"
  },
  {
    name: "Pancake",
    ingredients: [
      "Wheat flour",
      "Butter",
      "Milk",
      "Eggs"
    ],
    image: "pancake.png"
  },
  {
    name: "Chocolate Milkshake",
    ingredients: [
      "Chocolate",
      "Whipped cream"
    ],
    image: "chocolate_milkshake.png"
  },
  {
    name: "Chocolate Mousse",
    ingredients: [
      "Sour Cream",
      "Chocolate",
      "Eggs",
      "Butter"
    ],
    image: "chocolate_mousse.png"
  }
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".info.svelte-1bus9xv.svelte-1bus9xv{margin-bottom:3.375rem}.info.svelte-1bus9xv>p.svelte-1bus9xv{line-height:2rem}.info.svelte-1bus9xv>p.green.svelte-1bus9xv{color:var(--green)}.recipes.svelte-1bus9xv.svelte-1bus9xv{text-align:start;margin-bottom:3.75rem;display:flex;flex-wrap:wrap;justify-content:center;gap:1.5rem}.recipes.svelte-1bus9xv>li.svelte-1bus9xv{list-style-type:none}.edit-list.svelte-1bus9xv.svelte-1bus9xv{display:flex;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredRecipes;
  let $myList, $$unsubscribe_myList;
  $$unsubscribe_myList = subscribe(myList, (value) => $myList = value);
  $$result.css.add(css);
  filteredRecipes = recipes.filter((recipe) => recipe.ingredients.every((ingredient) => $myList.includes(ingredient)));
  $$unsubscribe_myList();
  return `${$$result.head += `<!-- HEAD_svelte-cwdhnw_START -->${$$result.title = `<title>APP | Recipes</title>`, ""}<!-- HEAD_svelte-cwdhnw_END -->`, ""}

<main>${validate_component(Title, "Title").$$render($$result, { tag: "h1" }, {}, {
    default: () => {
      return `Amazing Recipes | Recipes`;
    }
  })}

	<div class="info svelte-1bus9xv"><p class="green svelte-1bus9xv">Results found: ${escape(filteredRecipes.length)}</p>
		${filteredRecipes.length ? `<p class="svelte-1bus9xv">Check recipe options found with selected options:</p>` : `<p class="svelte-1bus9xv">Try to select other or more ingredients</p>`}</div>

	${filteredRecipes.length ? `<ul class="recipes svelte-1bus9xv">${each(filteredRecipes, (recipe) => {
    return `<li class="svelte-1bus9xv">${validate_component(Recipes, "Recipes").$$render($$result, { recipe }, {}, {})}
				</li>`;
  })}</ul>` : ``}

	<div class="edit-list svelte-1bus9xv">${validate_component(TagLink, "TagLink").$$render($$result, { href: base + "/" }, {}, {
    default: () => {
      return `Edit list!`;
    }
  })}</div>
</main>`;
});
export {
  Page as default
};
