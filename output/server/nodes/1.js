

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.bae1e852.js","_app/immutable/chunks/index.874377d6.js","_app/immutable/chunks/singletons.bc24d0a3.js","_app/immutable/chunks/index.d2685eda.js","_app/immutable/chunks/paths.ccd215ee.js"];
export const stylesheets = [];
export const fonts = [];
