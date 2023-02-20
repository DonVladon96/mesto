export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  rendererItems(item) {
    item.array.forEach((item) => {
      //почему array? или использовать map?
      this._renderer(item);
    });
  }

  clear() {
  this._container.innerHTML = '';
  }

  setItem(element){
    this._container.prepend(element)
  };
}
