// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';
var MENU = {
    items: [
        {
            location: ["New", "File Browser"],
            command: "jupyter.new.filebrowser"
        }
    ]
};
function menuLoader(extension) {
    return Promise.resolve(MENU);
}
exports.menuLoader = menuLoader;
//# sourceMappingURL=index.js.map