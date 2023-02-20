export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  rendererItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  // clear() {
  // this._container.innerHTML = '';
  // }

  setItem(element){
    this._container.prepend(element)
  };
}
