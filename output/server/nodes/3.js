

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recipes/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.a00fa917.js","_app/immutable/chunks/index.874377d6.js","_app/immutable/chunks/TagLink.7c9a8aaa.js","_app/immutable/chunks/Tag.f4a9141b.js","_app/immutable/chunks/index.d2685eda.js","_app/immutable/chunks/paths.ccd215ee.js"];
export const stylesheets = ["_app/immutable/assets/3.7d1b9c19.css","_app/immutable/assets/TagLink.e1b41c39.css","_app/immutable/assets/Tag.92cb0eb9.css"];
export const fonts = [];
