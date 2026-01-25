import AbstractView from '../framework/view/abstract-view.js';
import {NoPointsMessage} from '../constants';

function getMessageTemplate(filter) {
  return (
    `<p class="trip-events__msg">${NoPointsMessage[filter.toUpperCase()]}</p>`
  );
}

export default class MessageView extends AbstractView {
  #currentFilter = null;

  constructor({currentFilter}) {
    super();
    this.#currentFilter = currentFilter;
  }

  get template() {
    return getMessageTemplate(this.#currentFilter);
  }
}
