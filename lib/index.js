// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';
var jupyter_js_filebrowser_1 = require('jupyter-js-filebrowser');
var phosphor_tabs_1 = require('phosphor-tabs');
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
    var ui = {
        items: [new jupyter_js_filebrowser_1.FileBrowser("http://localhost:8765", './')],
        tabs: [new phosphor_tabs_1.Tab('FileBrowser')]
    };
    return Promise.resolve(ui);
}
exports.uiLoader = uiLoader;
//# sourceMappingURL=index.js.map