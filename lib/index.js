// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';
var jupyter_js_filebrowser_1 = require('jupyter-js-filebrowser');
// import {
//   Tab
// } from 'phosphor-tabs';
var MENU = [
    {
        location: ["New", "File Browser"],
        command: "jupyter.new.filebrowser"
    }
];
/**
 * Plugin loader function for the menu.
 */
function createMenuContribution(extension) {
    console.log("FB PLUGIN - menuLoader called");
    return {
        item: MENU,
        isDisposed: false,
        dispose: function () { }
    };
}
exports.createMenuContribution = createMenuContribution;
/**
 * Plugin loader function for the UI items.
 */
function createUIContribution(extension) {
    console.log("FB PLUGIN - uiLoader called");
    var fb = new jupyter_js_filebrowser_1.FileBrowser("http://localhost:8765", './');
    fb.title.text = 'Filebrowser';
    fb.title.closable = true;
    var ui = {
        item: [fb],
        isDisposed: false,
        dispose: function () { }
    };
    return ui;
}
exports.createUIContribution = createUIContribution;
//# sourceMappingURL=index.js.map