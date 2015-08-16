# postcss-graeys

A [PostCSS](https://github.com/postcss/postcss) plugin to fix the spelling of the color "grey" to prevent breaking CSS.

Properties supported:

- [gray()](http://dev.w3.org/csswg/css-color/#grays)
- [filter(grayscale())](http://www.w3.org/TR/filter-effects-1/#funcdef-grayscale)
- [backdrop-filter(grayscale())](https://www.webkit.org/blog/3632/introducing-backdrop-filters/)
- CSS colors

## Examples:

Using grey as a color:

```css
p {
  color: dimgrey;
}
```

```css
p {
  color: dimgray;
}
```

Use a greyscale filter:

```css
img {
  filter: brightness(1.2) greyscale(50%); /* breaks things :( */
}
```

```css
img {
  filter: brightness(1.2) grayscale(50%); /* yay!! */
}
```

Published on [npm](https://www.npmjs.com/package/postcss-graeys) for convenience 💘

**So go ahead and write grey the way you want to!**