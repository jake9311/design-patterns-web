
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/design-patterns-web/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/design-patterns-web"
  },
  {
    "renderMode": 2,
    "route": "/design-patterns-web/home"
  },
  {
    "renderMode": 2,
    "route": "/design-patterns-web/patterns"
  },
  {
    "renderMode": 2,
    "route": "/design-patterns-web/patterns/strategy"
  },
  {
    "renderMode": 2,
    "route": "/design-patterns-web/patterns/factory"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 521, hash: 'a6f68b8b6c0eaf5c781e489d2c7d7c4ff4d4082a57f34547d6149271625af656', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: 'd570c16775df5a3879a1296c8e1f82d83084ad23b338010120259fb4217bbab0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 5233, hash: 'ef7abb9025a7a5db7fb30ac5bb66b112e9d2a322a60f461aa15bcf15b354ad61', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'patterns/factory/index.html': {size: 5233, hash: 'ef7abb9025a7a5db7fb30ac5bb66b112e9d2a322a60f461aa15bcf15b354ad61', text: () => import('./assets-chunks/patterns_factory_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5233, hash: 'ef7abb9025a7a5db7fb30ac5bb66b112e9d2a322a60f461aa15bcf15b354ad61', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'patterns/index.html': {size: 5233, hash: 'ef7abb9025a7a5db7fb30ac5bb66b112e9d2a322a60f461aa15bcf15b354ad61', text: () => import('./assets-chunks/patterns_index_html.mjs').then(m => m.default)},
    'patterns/strategy/index.html': {size: 5233, hash: 'ef7abb9025a7a5db7fb30ac5bb66b112e9d2a322a60f461aa15bcf15b354ad61', text: () => import('./assets-chunks/patterns_strategy_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
