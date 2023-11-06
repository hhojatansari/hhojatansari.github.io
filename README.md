# hacked-jekyll

Hacked Jekyll is a responsive, minimalistic Jekyll theme for a tiny (163.3 kb!) personal website. It consists of a homepage and a 404 page. The homepage lists information set within the configuration file in a format that resembles JSON, giving the website a "hacked" appearance. The user description features [typed.js](https://mattboldt.com/demos/typed-js/) to cycle through multiple lines of text, as long as multiple lines are provided in the configuration.

The style is rebooted through [normalize.css](https://necolas.github.io/normalize.css/) and based on the [open color](https://yeun.github.io/open-color/) library. The monospaced typeface [Hack](https://sourcefoundry.org/hack/) is served together with the website. The favicons are generated by [favicon.io](https://favicon.io/).

See the [demo](https://hacked-jekyll.netlify.app) to check the end result.

![](https://github.com/piazzai/hacked-jekyll/blob/master/screenshot.jpg)

## Installation

1.  Clone this repository.
2.  Rename it to `[username].github.io`.
3.  Start editing!

## Usage

All customization happens in the `json` section of `_config.yml`. Eight variables can be set, including the user's name and description (note that this is not the same as site description), path to the CV, address and contact details, homepage, repository, and social profiles. All of these variables are optional.

The user description and address variables can be set as arrays (default) or single strings. The contact variable can be set as a hash (default) or single string. The profiles variable must necessarily be a hash.

The color scheme is determined by three lines in `_sass/base.scss`.

```scss
body {
  font-family: "hack", monospace;
  font-size: 16px;
  font-weight: 400;
  background-color: var(--oc-gray-9); // background
  color: var(--oc-green-4); // main text and links
}
```

```scss
a {
  color: inherit;
  font-style: italic;

  &:hover,
  &:active {
    color: var(--oc-green-5); // links on hover
  }
}
```

## Bugs

If you find any problem using the theme, please [open an issue](https://github.com/piazzai/hacked-jekyll/issues).