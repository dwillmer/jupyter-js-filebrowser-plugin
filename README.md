Jupyter JS Filebrowser Plugin
=============================

Plugin Providing a filebrowser for the Jupyter project.

[API Docs](http://jupyter.github.io/jupyter-js-filebrowser-plugin/)


Package Install
---------------

**Prerequisites**
- [node](http://nodejs.org/)

```bash
npm install --save jupyter-js-filebrowser-plugin
```


Source Build
------------

**Prerequisites**
- [git](http://git-scm.com/)
- [node 0.12+](http://nodejs.org/)

```bash
git clone https://github.com/jupyter/jupyter-js-filebrowser-plugin.git
cd jupyter-js-filebrowser
npm install
npm run build
```

**Rebuild**
```bash
npm run clean
npm run build
```


Run Tests
---------

Follow the source build instructions first.

```bash
npm test
```


Build Docs
----------

Follow the source build instructions first.

```bash
npm run docs
```

Navigate to `docs/index.html`.


Supported Runtimes
------------------

The runtime versions which are currently *known to work* are listed below.
Earlier versions may also work, but come with no guarantees.

- IE 11+
- Firefox 32+
- Chrome 38+


Usage Examples
--------------

**Note:** This module is fully compatible with Node/Babel/ES6/ES5. Simply
omit the type declarations when using a language other than TypeScript.
