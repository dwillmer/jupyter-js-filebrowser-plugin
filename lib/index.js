// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';
var jupyter_js_filebrowser_1 = require('jupyter-js-filebrowser');
// import {
//   Tab
// } from 'phosphor-tabs';
var MENU = {
    items: [
        {
            location: ["New", "File Browser"],
            command: "jupyter.new.filebrowser"
        }
    ]
};
/**
 * Plugin loader function for the menu.
 */
function menuLoader(extension) {
    return Promise.resolve(MENU);
}
exports.menuLoader = menuLoader;
/**
 * Plugin loader function for the UI items.
 */
function uiLoader(extension) {
    var fb = new jupyter_js_filebrowser_1.FileBrowser("http://localhost:8765", './');
    fb.title.text = 'Filebrowser';
    fb.title.closable = true;
    var ui = {
        items: [fb]
    };
    return Promise.resolve(ui);
}
exports.uiLoader = uiLoader;
//# sourceMappingURL=index.js.map