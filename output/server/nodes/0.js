import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.bad5790d.js","_app/immutable/chunks/index.874377d6.js","_app/immutable/chunks/Tag.f4a9141b.js","_app/immutable/chunks/index.d2685eda.js"];
export const stylesheets = ["_app/immutable/assets/0.d1da191b.css","_app/immutable/assets/Tag.92cb0eb9.css"];
export const fonts = [];
