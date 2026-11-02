const path = require('node:path');
const {themes} = require('prism-react-renderer');
const hub = require('./hub.config.json');

// GitHub Actions obtiene automáticamente la cuenta y el repositorio.
// En el equipo local no hace falta sustituir ningún usuario.
const repo = process.env.GITHUB_REPOSITORY || '';
const [owner = '', name = 'secure-ai-uca-data-hub'] = repo.split('/');
const baseUrl = process.env.BASE_URL || (owner && name !== `${owner}.github.io` ? `/${name}/` : '/');

module.exports = {
  title: hub.nombre,
  tagline: 'Comprender, comprobar y corregir',
  favicon: 'img/hub.svg',
  url: process.env.SITE_URL || (owner ? `https://${owner}.github.io` : 'https://example.org'),
  baseUrl,
  trailingSlash: true,
  onBrokenLinks: 'throw',
  markdown: {mermaid: true, hooks: {onBrokenMarkdownLinks: 'throw'}},
  i18n: {defaultLocale: 'es', locales: ['es']},
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [path.resolve(__dirname, 'scripts/search-plugin.js')],
  presets: [['classic', {
    docs: {routeBasePath: '/', sidebarPath: require.resolve('./sidebars.js')},
    blog: false,
    theme: {customCss: require.resolve('./src/css/custom.css')},
  }]],
  themeConfig: {
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: false},
    navbar: {
      title: hub.nombre,
      logo: {alt: 'SECURE AI UCA Data Hub', src: 'img/hub.svg'},
      items: [
        {to: '/sesiones/', label: 'Sesiones', position: 'left'},
        {to: '/glosario/', label: 'Glosario', position: 'left'},
        {to: '/descargas/', label: 'Descargas', position: 'right'},
        {type: 'search', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {title: 'Aprender', items: [{label: 'CWE, CVE y CVSS', to: '/materiales/parte-1/cwe-cve-cvss/'}, {label: 'Casos reales', to: '/materiales/parte-2/sistemas-criticos/'}]},
        {title: 'Mantener', items: [{label: 'Licencia de uso', to: '/licencia/'}, {label: 'Publicar en GitHub', to: '/guias/publicar/'}, {label: 'Editar contenidos', to: '/guias/editar/'}]},
      ],
      copyright: 'SECURE AI UCA Data Hub · Material docente de Sara Balderas Díaz y Gabriel Guerrero Contreras · Curso 2026/27',
    },
    prism: {theme: themes.github, darkTheme: themes.dracula, additionalLanguages: ['python', 'bash', 'json', 'yaml', 'sql', 'java', 'c']},
    tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 3},
  },
};
