export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  renderItems() {
    this._items.forEach(item => {
      this._renderer(this._container, item)
    });
  }

  // clear() {
  // this._container.innerHTML = '';
  // }

  addItem(element) {
    this._renderer(this._container, element)
  }
}
