// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import {
  FileBrowser
} from 'jupyter-js-filebrowser';

import {
  IMenuExtension, IUIExtension
} from 'phosphide';

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


/**
 * Plugin loader function for the menu.
 */
export
function menuLoader(): Promise<IMenuExtension> {
  return Promise.resolve(MENU);
}


/**
 * Plugin loader function for the UI items.
 */
export
function uiLoader(): Promise<IUIExtension> {
  var ui = {
    items: [new FileBrowser("http://localhost:8765", './')],
    tabs: [new Tab('FileBrowser')]
  };
  return Promise.resolve(ui);
}
