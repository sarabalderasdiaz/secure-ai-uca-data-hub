const fs = require('node:fs');
const path = require('node:path');

function collect(root, prefix = '') {
  return fs.readdirSync(root, {withFileTypes: true}).flatMap(entry => {
    const rel = `${prefix}${entry.name}`;
    const file = path.join(root, entry.name);
    if (entry.isDirectory()) return collect(file, `${rel}/`);
    if (entry.name === '_category_.json') {
      const category = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (category.link?.type !== 'generated-index' || !category.link.slug) return [];
      return [{
        title: category.link.title || category.label,
        url: category.link.slug.replace(/^\//, '').replace(/\/$/, '') + '/',
        text: `${category.label}. ${category.link.description || ''}`,
      }];
    }
    if (!/\.mdx?$/.test(rel)) return [];
    const raw = fs.readFileSync(file, 'utf8');
    const metadata = raw.match(/^---\n([\s\S]*?)\n---/);
    const fm = metadata?.[1] || '';
    function field(key) {
      const value = fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1]?.trim();
      if (!value) return '';
      try { return JSON.parse(value); } catch { return value; }
    }
    if (field('draft') === true || field('draft') === 'true') return [];
    const title = field('title') || rel.replace(/\.mdx?$/, '');
    const slug = field('slug') || rel.replace(/\.mdx?$/, '');
    const url = slug === '/' ? '' : slug.replace(/^\//, '').replace(/\/$/, '') + '/';
    const text = raw.replace(/^---\n[\s\S]*?\n---/, '')
      .replace(/import .*?;\n/g, '').replace(/<[^>]*>/g, ' ')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[`#*_>|{}]/g, ' ').replace(/\s+/g, ' ').trim();
    return [{title, url, text}];
  });
}

module.exports = function(context) {
  return {
    name: 'hub-local-search',
    async postBuild({outDir}) {
      fs.writeFileSync(path.join(outDir, 'search-index.json'), JSON.stringify(collect(path.join(context.siteDir, 'docs'))));
    },
  };
};
