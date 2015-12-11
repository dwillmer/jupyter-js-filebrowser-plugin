// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import {
  IContribution
} from 'phosphor-plugins';

import {
  FileBrowser, FileBrowserViewModel
} from 'jupyter-js-filebrowser';

import {
  Contents
} from 'jupyter-js-services';


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
  let baseUrl = "http://localhost:8888"
  let contents = new Contents(baseUrl);
  let fbModel = new FileBrowserViewModel('', contents);
  var fb = new FileBrowser(fbModel);
  fb.title.text = 'Filebrowser';
  contrib.item = fb;
  return contrib;
}
