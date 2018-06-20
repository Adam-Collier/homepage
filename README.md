# Lazy Homepage

Missguided homepage, built in HTML, SASS and Js.

### Dependencies

- Slick (jQuery)
- lazySizes (jQuery)

## Getting Started

These instructions will get you a copy of the homepage up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the homepages on Magento.

---

### Installing

You will need Node.js for this step.

```bash
# clone the repo
$ git clone

# install NPM dependencies
$ npm install

# start gulp & browsersync
$ npm start
```

---

## Project structure

```
├── index.html
├── css
|  └── style.css
├── sass
|  └── style.scss
|  └── _breakOut.scss
|  └── _lazy.scss
|  └── _reset.scss
|  └── _typography.scss
|  └── _UI.scss
├── sassdoc
├── views
|  └── your-html.html
├── gulpfile.js
├── index.html
├── main.js
├── package.json
└── README.md
```

### files and what they do.

- `index.html` is a replica of the magento wrapper, and includes scripts & stylesheets just like the real thing.
- `your-html.html` is where our custom code is added, this is injected into `index.html` on line 384.
- `main.js` injects `your-html.html` into `index.html` on load.

---

## Process

```bash
# start gulp & browsersync
$ npm start
```

Amend any of the SCSS, HTML or JS files and see the browser update with your changes live in browser.

---

## Deployment

Code good to go? OK, copy all the code within _your-html.html_ and paste into the 'Content' tab of the CMS page on Magento.

See _layout.xml_ for necceasry code to be inserted within **Design > Layout Update XML**

---

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
