
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/VictorMuniz7/cmh-website',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/VictorMuniz7/cmh-website"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 17410, hash: '7a357fa304e7d1ff14d1e43d554b33be3aae6d19ef68ad3df68d168663c9bfb1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17549, hash: '43b92516cf9185e8f979b42ed2329f09e0f7b8e8e335b3d600ef09352487efcc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 29177, hash: '843c98a35beba3f4aab65d4d7e05564b73b0fcb07933a851b3bb1091719d05bb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UGM2CLQ7.css': {size: 256, hash: 'KmoIPNyWZoY', text: () => import('./assets-chunks/styles-UGM2CLQ7_css.mjs').then(m => m.default)}
  },
};
