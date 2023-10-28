import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, d as add_attribute, b as each } from "../../chunks/index2.js";
import { C as Card, T as Title, a as TagLink } from "../../chunks/TagLink.js";
import { m as myList, T as Tag } from "../../chunks/Tag.js";
import { b as base } from "../../chunks/paths.js";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const SelectedIngredient_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "button.svelte-10z98yb{cursor:pointer}",
  map: null
};
const SelectedIngredient = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let $myList, $$unsubscribe_myList;
  $$unsubscribe_myList = subscribe(myList, (value) => $myList = value);
  let { ingredient } = $$props;
  if ($$props.ingredient === void 0 && $$bindings.ingredient && ingredient !== void 0)
    $$bindings.ingredient(ingredient);
  $$result.css.add(css$2);
  selected = $myList.includes(ingredient);
  $$unsubscribe_myList();
  return `<button class="svelte-10z98yb">${validate_component(Tag, "Tag").$$render($$result, { active: selected }, {}, {
    default: () => {
      return `${escape(ingredient)}`;
    }
  })}
</button>`;
});
const Category_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".category-container.svelte-gvqygo{padding:0.75rem 0.5rem}.category-image.svelte-gvqygo{margin-bottom:0.5rem}.category-name.svelte-gvqygo{font-size:1.125rem;color:var(--green);margin-bottom:0.875rem}.ingredients.svelte-gvqygo{display:flex;flex-wrap:wrap;justify-content:center;gap:0.75rem 1rem}",
  map: null
};
const Category = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { category } = $$props;
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  $$result.css.add(css$1);
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="category-container svelte-gvqygo"><img src="${"icons/category_ingredients/" + escape(category.image, true)}"${add_attribute("alt", category.name, 0)} class="category-image svelte-gvqygo">

		<h3 class="category-name svelte-gvqygo">${escape(category.name)}</h3>

		<ul class="ingredients svelte-gvqygo">${each(category.ingredients, (ingredient) => {
        return `<li>${validate_component(SelectedIngredient, "SelectedIngredient").$$render($$result, { ingredient }, {}, {})}
				</li>`;
      })}</ul></div>`;
    }
  })}`;
});
const categories = [
  {
    name: "Milk and Eggs",
    ingredients: [
      "Eggs",
      "Cheese",
      "Milk",
      "Butter",
      "Sour Cream",
      "Yogurt",
      "Condensed Milk",
      "Ice Cream"
    ],
    image: "milk_and_egg.png"
  },
  {
    name: "Flour and Yeast",
    ingredients: [
      "Wheat flour",
      "Povilho",
      "Bread flour",
      "Canjica",
      "Cassava flour",
      "Corn meal",
      "Linseed",
      "Chemical yeast"
    ],
    image: "flour.png"
  },
  {
    name: "Seasonings and Spices",
    ingredients: [
      "Cinnamon",
      "Clove",
      "Oregano",
      "Nutmeg",
      "Thyme",
      "Black Pepper",
      "Cumin"
    ],
    image: "seasonings_and_spices.png"
  },
  {
    name: "Oils, Fats and Vinegars",
    ingredients: [
      "Vinegar",
      "Oil",
      "Palm",
      "Olive Oil",
      "Larth",
      "Balsamic Aceto",
      "Coconut Oil"
    ],
    image: "oils_fats_and_vinegars.png"
  },
  {
    name: "Vegetables and Greens",
    ingredients: [
      "Onion",
      "Garlic",
      "Tomato",
      "Pumpkin",
      "Zucchini",
      "Potato",
      "Pepper",
      "Spinach",
      "Carrot"
    ],
    image: "vegetables_and_greens.png"
  },
  {
    name: "Sugars and Sweeteners",
    ingredients: [
      "White sugar",
      "Brown sugar",
      "Crystal sugar",
      "Molasses",
      "Honey",
      "Vanilla",
      "Glucose",
      "Xylite",
      "Stevia"
    ],
    image: "sugar.png"
  },
  {
    name: "Animal Proteins",
    ingredients: [
      "Fish",
      "Beef",
      "Pork",
      "Chicken",
      "Bacon",
      "Sausage",
      "Tuna",
      "Salmon",
      "Ham",
      "Cod"
    ],
    image: "animal_proteins.png"
  },
  {
    name: "Grains, Cereals and Legumes",
    ingredients: [
      "Rice",
      "Beans",
      "Oats",
      "Peas",
      "Lentils",
      "Chickpeas",
      "Corn",
      "Sesame",
      "Quinoa"
    ],
    image: "cereal_grains_and_legumes.png"
  },
  {
    name: "Fresh fruit",
    ingredients: [
      "Banana",
      "Apple",
      "Grape",
      "Pear",
      "Lemon",
      "Strawberry",
      "Plum",
      "Raspberry",
      "Apineapple"
    ],
    image: "fresh_fruits.png"
  },
  {
    name: "Dried fruits",
    ingredients: [
      "Cashew Nut",
      "Brazil Nut",
      "Raisin",
      "Apricot",
      "Date",
      "Pistachio",
      "Almond",
      "Peanut"
    ],
    image: "dried_fruits.png"
  },
  {
    name: "Breads and Pasta",
    ingredients: [
      "Bread",
      "Flatbread",
      "Tortilla",
      "Pasta",
      "Gnocchi",
      "Pastry dough",
      "Lasagna dough",
      "Biscuit",
      "Cornbread"
    ],
    image: "bread_and_pasta.png"
  },
  {
    name: "Sweets and Candies",
    ingredients: [
      "Chocolate",
      "Jam",
      "Guava",
      "Caramel",
      "Whipped cream",
      "Cocoa powder",
      "Sigh",
      "Jello",
      "Paçoca"
    ],
    image: "candies.png"
  }
];
const beforeNavigate = /* @__PURE__ */ client_method("before_navigate");
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".info.svelte-t82isa.svelte-t82isa{margin-bottom:3.375rem}.info.svelte-t82isa>p.svelte-t82isa{line-height:2rem}.categories.svelte-t82isa.svelte-t82isa{margin-bottom:4.6875rem;display:flex;flex-wrap:wrap;justify-content:center;gap:1.5rem}.search-recipes.svelte-t82isa.svelte-t82isa{display:flex;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isListEmpty;
  let $myList, $$unsubscribe_myList;
  $$unsubscribe_myList = subscribe(myList, (value) => $myList = value);
  beforeNavigate(async (navigation) => {
    isListEmpty && navigation.to?.route.id === "/recipes" ? navigation.cancel() : null;
  });
  $$result.css.add(css);
  isListEmpty = $myList.length === 0;
  $$unsubscribe_myList();
  return `${$$result.head += `<!-- HEAD_svelte-1k0e4ah_START -->${$$result.title = `<title>APP | Index</title>`, ""}<!-- HEAD_svelte-1k0e4ah_END -->`, ""}

<main>${validate_component(Title, "Title").$$render($$result, { tag: "h1" }, {}, {
    default: () => {
      return `Ingredients`;
    }
  })}
	<div class="info svelte-t82isa"><p class="svelte-t82isa">Please select the ingredients you would like to use below:</p>
		<p class="svelte-t82isa">*Important: It is assumed that you already have salt, pepper and water at
			home.
		</p></div>

	<ul class="categories svelte-t82isa">${each(categories, (category) => {
    return `<li>${validate_component(Category, "Category").$$render($$result, { category }, {}, {})}
			</li>`;
  })}</ul>

	<div class="search-recipes svelte-t82isa">${validate_component(TagLink, "TagLink").$$render(
    $$result,
    {
      disabled: isListEmpty,
      href: `${base}/recipes`
    },
    {},
    {
      default: () => {
        return `Search recipes!`;
      }
    }
  )}</div>
</main>`;
});
export {
  Page as default
};
