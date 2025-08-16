
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/cmh-website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/cmh-website"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 17380, hash: '63af815b86e276895c0fa49fd89c23b9f0303508257be484cb1fa341ab0e019a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17519, hash: 'b3869e59802d7b1fddb2982462bf4a37573cc30d8a8946c00ed5a8fb30297df1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 29148, hash: 'b29c07c6bf1efe5cab08ecb42fc01667a30c74c671c2e57f75dbfef3ca8a0158', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UGM2CLQ7.css': {size: 256, hash: 'KmoIPNyWZoY', text: () => import('./assets-chunks/styles-UGM2CLQ7_css.mjs').then(m => m.default)}
  },
};
