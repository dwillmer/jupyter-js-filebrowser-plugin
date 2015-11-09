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

export
function menuLoader(extension: any) {
  return Promise.resolve(MENU);
}
