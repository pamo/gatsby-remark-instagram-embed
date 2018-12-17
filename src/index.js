const visit = require('unist-util-visit');

let embedOptions = { width: 320, height: 320 };

function instagramEmbed() {
  return transformer;
}
function embedCode(code) {
  return `<div><iframe src="https://instagram.com/p/${code}/embed" frameborder="0" allowfullscreen scrolling="no" allowtransparency width="${
    embedOptions.width
  }" height="${embedOptions.width}"></iframe></div>`;
}

function transformer(tree) {
  visit(tree, 'image', visitor);
}

function visitor(node, options) {
  const { alt = '', url = '' } = node;

  if (alt === 'instagram') {
    node.type = 'html';
    node.value = embedCode(url);
  }
}

module.exports = ({ markdownAST }, options = embedOptions) => {
  embedOptions = { ...embedOptions, ...options };
  instagramEmbed()(markdownAST);

  return markdownAST;
};
