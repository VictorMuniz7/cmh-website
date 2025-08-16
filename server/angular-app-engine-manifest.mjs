
export default {
  basePath: 'https://github.com/VictorMuniz7/cmh-website',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
