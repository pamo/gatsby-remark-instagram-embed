const Remark = require(`remark`);
const plugin = require(`../index`);

const remark = new Remark();

describe(`gatsby-remark-instagram-embed`, () => {
  it(`should convert embed image nodes to html code blocks`, () => {
    const markdownAST = remark.parse(`\`![instagram](hello-world)\``);
    const transformed = plugin({ markdownAST });
    // const transformed = plugin({ markdownAST }, { directory: `examples` });

    expect(transformed).toEqual(
      '<div><iframe src="https://instagram.com/p/hello-world/embed" frameborder="0" allowfullscreen scrolling="no" allowtransparency width="320" height="320"></iframe></div>'
    );
  });
});
