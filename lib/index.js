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
var contribProto = {
    item: null,
    isDisposed: false,
    dispose: function () {
        this.isDisposed = true;
        this.item = null;
    },
};
/**
 * Plugin loader function for the menu.
 */
function createMenuContribution() {
    var contrib = Object.create(contribProto);
    contrib.item = MENU;
    return contrib;
}
exports.createMenuContribution = createMenuContribution;
/**
 * Plugin loader function for the UI items.
 */
function createUIContribution() {
    console.log("FB PLUGIN - uiLoader called");
    var contrib = Object.create(contribProto);
    var fb = new jupyter_js_filebrowser_1.FileBrowser("http://localhost:8765", './');
    fb.title.text = 'Filebrowser';
    fb.title.closable = true;
    contrib.item = [fb];
    return contrib;
}
exports.createUIContribution = createUIContribution;
//# sourceMappingURL=index.js.map