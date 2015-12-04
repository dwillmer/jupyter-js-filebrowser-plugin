// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import {
  IContribution
} from 'phosphor-plugins';

import {
  FileBrowser
} from 'jupyter-js-filebrowser';


var MENU = {
  items: [
    {
      location: ["New", "File Browser"],
      command: "jupyter.new.filebrowser"
    }
  ]
};


let contribProto: IContribution = {
  item: null,
  isDisposed: false,
  dispose: function() {
    this.isDisposed = true;
    this.item = null;
  }
};


/**
 * Plugin loader function for the menu.
 */
export
function createMenuContribution(): IContribution {
  let contrib = Object.create(contribProto);
  contrib.item = MENU;
  return contrib;
}


/**
 * Plugin loader function for the UI item.
 */
export
function createUIContribution(): IContribution {
  let contrib = Object.create(contribProto);
  var fb = new FileBrowser("http://localhost:8765", './');
  fb.title.text = 'Filebrowser';
  contrib.item = fb;
  return contrib;
}
