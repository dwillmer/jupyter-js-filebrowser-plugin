// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import {
  FileBrowser
} from 'jupyter-js-filebrowser';

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
export
function menuLoader(extension: any) {
  return Promise.resolve(MENU);
}

/**
 * Plugin loader function for the UI items.
 */
export
function uiLoader(extension: any): Promise<any> {
  var fb = new FileBrowser("http://localhost:8765", './');
  fb.title.text = 'Filebrowser';
  fb.title.closable = true;
  var ui = {
    items: [fb]
  };
  return Promise.resolve(ui);
}
