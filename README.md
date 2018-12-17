# gatsby-remark-instagram-embed

Embeds instagram posts into markdown

## Overview

### Embedding Posts

Given the following Instagram post URL:
[https://www.instagram.com/p/BpKjlo-B4uI/](https://www.instagram.com/p/BpKjlo-B4uI/)

Declare as an image using instagram as the `alt` attribute and Instagram post code as the url source in your markdown post:

```md
![instagram](BpKjlo-B4uI)
```

The result should be an iframe embedded into the post inline:

```html
<div>
  <iframe
    src="https://instagram.com/p/BpKjlo-B4uI/embed"
    frameborder="0"
    allowfullscreen
    scrolling="no"
    allowtransparency
    width="320"
    height="320"
  ></iframe>
</div>
```

## Installation

`npm install --save gatsby-remark-instagram-embed`

## How to use

**Important**: This module must appear after any `gatsby-remark-*` plugin modifying images in your plugins array, or the markup will preemptively transformed in a way in which it will not be picked up by this plugin and ignored.

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-instagram-embed',
            options: {
              width: 320,
              height: 320,
            },
          },
          `gatsby-remark-responsive-iframe`, // optional plugin but recommended
        ],
      },
    },
  ],
};
```

It's recommended to use [`gatsby-remark-responsive-iframe`](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-responsive-iframe) to dynamically change the dimensions of the iframe for different device sizes.
