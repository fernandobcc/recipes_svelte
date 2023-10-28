

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.15e27d00.js","_app/immutable/chunks/index.874377d6.js","_app/immutable/chunks/TagLink.7c9a8aaa.js","_app/immutable/chunks/Tag.f4a9141b.js","_app/immutable/chunks/index.d2685eda.js","_app/immutable/chunks/paths.ccd215ee.js","_app/immutable/chunks/singletons.bc24d0a3.js"];
export const stylesheets = ["_app/immutable/assets/2.7814be60.css","_app/immutable/assets/TagLink.e1b41c39.css","_app/immutable/assets/Tag.92cb0eb9.css"];
export const fonts = [];
