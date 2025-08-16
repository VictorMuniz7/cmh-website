
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
    'index.csr.html': {size: 17410, hash: 'dc78a5df05644e8fc92f9f9bdb70fb716edbae04d0b173450ff70f37595455ca', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17549, hash: '83ccc53e010e77c4b4ad9ed49eb441d00b945cad0df28590b8b9efbc51843e25', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 29178, hash: '5724b0c8ae098573ded10185d5e0b82bde9ab3e8d82c82dd0a0afa4c5b2b4730', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UGM2CLQ7.css': {size: 256, hash: 'KmoIPNyWZoY', text: () => import('./assets-chunks/styles-UGM2CLQ7_css.mjs').then(m => m.default)}
  },
};
