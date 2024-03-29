export class Section {
  constructor({ renderer }, containerSelector) {

    this._renderer = renderer;
    this._container = containerSelector;
  }

  renderItems(items) {
    items.forEach(item => {
      this._renderer(item)
    });
  }

  addItem(element) {
    this._container.append(element);
  }

  addItemPrepend(item) {
  this._container.prepend(item);
  }
}
