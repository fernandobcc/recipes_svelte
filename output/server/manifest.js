export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icons/category_ingredients/animal_proteins.png","icons/category_ingredients/bread_and_pasta.png","icons/category_ingredients/candies.png","icons/category_ingredients/cereal_grains_and_legumes.png","icons/category_ingredients/dried_fruits.png","icons/category_ingredients/flour.png","icons/category_ingredients/fresh_fruits.png","icons/category_ingredients/milk_and_egg.png","icons/category_ingredients/oils_fats_and_vinegars.png","icons/category_ingredients/seasonings_and_spices.png","icons/category_ingredients/sugar.png","icons/category_ingredients/vegetables_and_greens.png","icons/close.svg","icons/registered.png","images/amazing-logo.svg","images/footer.png","images/header.png","images/marble_texture.png","images/recipes/butter_with_thyme_and_garlic.png","images/recipes/chicken_cream.png","images/recipes/chocolate_milkshake.png","images/recipes/chocolate_mousse.png","images/recipes/cod_with_garlic_chips.png","images/recipes/garlic_and_oil_pasta.png","images/recipes/garlic_bread.png","images/recipes/garlic_rice.png","images/recipes/pancake.png","images/recipes/roasted_garlic.png","images/recipes/roasted_garlic_paste.png","images/recipes/roasted_garlic_pate.png","images/recipes/tortei.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.8bc2f537.js","app":"_app/immutable/entry/app.326d877d.js","imports":["_app/immutable/entry/start.8bc2f537.js","_app/immutable/chunks/index.874377d6.js","_app/immutable/chunks/singletons.bc24d0a3.js","_app/immutable/chunks/index.d2685eda.js","_app/immutable/chunks/paths.ccd215ee.js","_app/immutable/entry/app.326d877d.js","_app/immutable/chunks/index.874377d6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
