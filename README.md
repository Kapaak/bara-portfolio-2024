# Barbora Nováková - Portfolio

 Website for graphic designer Barbora Nováková. This website consists of
frontend created in `Astro.js` and headless CMS in `Sanity.io`.

> Repository for the CMS is located
> [here](https://github.com/Kapaak/sanity-bara-novakova)

## 🚀 Project Structure

```text
├── public/
│   └── fonts
├── src/
│   ├── assets
│   ├── components
│   ├── constants
│   ├── domains
│   ├── layouts
│   ├── pages
│   ├── sanity
│   ├── sections
│   ├── ui/
│       └── components
│       └── theme
│   ├── utils
└── package.json
```

## 👾 Styling

All styling is done with `Tailwindjs`. There are some default styles written in
.css -> `ui/theme/...` for initial setup. All of these .css files are imported
in `Layout.astro`.

## 🥗 Components

There are 2 types of components, first of them are without logic (located in
`src/ui/components/...`) and the rest are some reusable components with logic
(located in `src/components/...`).

Each item in components folder can be made of multiple parts, where these parts
are used only in this particular place. For such subcomponents there is a
`parts` folder.

## 🔖 Sections

Every page is made of multiple sections. In this folder there is following
structure -> `sections/page-name/SectionName.astro`. These sections are then
imported in specific Page in `/src/pages/...`

## 🎉 Assets

The difference between images/icons put in assets folder and public folder is
that the `/src/assets/...` items are by default optimized by Astro.js. The only
reason to place image-like files in public folder is when its required to target
them via css or when they are needed in HTML structure.

## 💡 Start the development

- Use yarn package manager.
- Development is in port 4321 and start it by typing `yarn dev`.
- ❗️There is an issue, where the `yarn dev` sometimes crashes on error with
  `"string-width"` package. To resolve this delete `yarn.lock` file and install
  dependencies again.
