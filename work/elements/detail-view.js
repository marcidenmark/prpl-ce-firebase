/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

class DetailViewElement extends HTMLElement {
  static get observedAttributes() {
    return ['path'];
  }

  constructor() {
    super();
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr !== 'path' || !newValue) {
      return;
    }

    this.innerHTML = '';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `/data${newValue}.json`);
    xhr.addEventListener('load', () => this._renderItems(JSON.parse(xhr.responseText)));
    xhr.addEventListener('error', () => this._showNetworkError());
    xhr.send();

    // NOTE(keanulee): Fetch doesn't seem to look at H2 pushed resources :(
    // https://bugs.chromium.org/p/chromium/issues/detail?id=702727
    // window.fetch('/data/list.json')
    //   .then(response => response.json())
    //   .then(json => this._renderItems(json));
  }

  _renderItems(item) {
    this.innerHTML = `
      <img src="${item.imageUrl}">
      <a href="/" class="close-btn">&times;</a>
      <div>
        <h1>${item.name}</h1>
        <p>${item.description}</p>
      </div>`;
  }

  _showNetworkError() {
    this.innerHTML = `
      <a href="/" class="close-btn">&times;</a>
      <p class="error">No network connection</p>`;
  }
}

customElements.define('detail-view', DetailViewElement);