
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
    'index.csr.html': {size: 521, hash: 'e0a923240a1f194229de925f04e6e1b0b10c6c40d9f6387f583e7defa8fceb0e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: '056516a84f5379b12196a1e699dcd9f2e1a6f2d5de9ef1edaaeac44a942c095b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 5252, hash: '0ad5078edcb37770e8d48989fa7b1ae7b3fdf88e278709b0a75131547347f177', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'patterns/strategy/index.html': {size: 7582, hash: '26c96305a8f7e4e1a85eca6b6d70cf9870f72368023add8ae61881fbf68bb537', text: () => import('./assets-chunks/patterns_strategy_index_html.mjs').then(m => m.default)},
    'patterns/index.html': {size: 4406, hash: 'da93e71908c38ae03309b901d5a1cffa0cb89efc2fc6d95c1e230f3773f64b93', text: () => import('./assets-chunks/patterns_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5252, hash: '0ad5078edcb37770e8d48989fa7b1ae7b3fdf88e278709b0a75131547347f177', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'patterns/factory/index.html': {size: 8106, hash: 'ac1d17684906190dafd6d8f143ee65eb9c4c1aa03d9aeb6a8143ded927a206ce', text: () => import('./assets-chunks/patterns_factory_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
