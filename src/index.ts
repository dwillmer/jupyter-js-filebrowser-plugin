// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import {
  FileBrowser
} from 'jupyter-js-filebrowser';

import {
  Tab
} from 'phosphor-tabs';

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

export
function uiLoader(extension: any): Promise<any> {
  var ui = {
    items: [new FileBrowser("http://localhost:8765", './')],
    tabs: [new Tab('FileBrowser')]
  };
  return Promise.resolve(ui);
}
