import {createElement} from '../render';

function getTripPointsListTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class TripPointsListView {
  getTemplate() {
    return getTripPointsListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
