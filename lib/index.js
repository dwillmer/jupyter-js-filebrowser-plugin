// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';
var jupyter_js_filebrowser_1 = require('jupyter-js-filebrowser');
var jupyter_js_services_1 = require('jupyter-js-services');
var MENU = {
    items: [
        {
            location: ["New", "File Browser"],
            command: "jupyter.new.filebrowser"
        }
    ]
};
var contribProto = {
    item: null,
    isDisposed: false,
    dispose: function () {
        this.isDisposed = true;
        this.item = null;
    }
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
 * Plugin loader function for the UI item.
 */
function createUIContribution() {
    var contrib = Object.create(contribProto);
    var baseUrl = "http://localhost:8888";
    var contents = new jupyter_js_services_1.Contents(baseUrl);
    var fbModel = new jupyter_js_filebrowser_1.FileBrowserViewModel('', contents);
    var fb = new jupyter_js_filebrowser_1.FileBrowser(fbModel);
    fb.title.text = 'Filebrowser';
    contrib.item = fb;
    return contrib;
}
exports.createUIContribution = createUIContribution;
//# sourceMappingURL=index.js.map