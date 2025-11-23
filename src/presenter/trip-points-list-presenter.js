import {render} from '../render.js';
import TripPointAddingFormView from '../view/trip-point-adding-form-view.js';
import TripPointView from '../view/trip-point-view.js';

export default class TripPointsListPresenter {
  #listElement = null;
  #pointsModel = null;
  #pointsData = null;
  #addingFormComponent = null;

  constructor({listElement, pointsModel}) {
    this.#listElement = listElement;
    this.#pointsModel = pointsModel;
    this.#pointsData = this.#pointsModel.tripPoints;
    this.#addingFormComponent = new TripPointAddingFormView(this.#pointsModel);
  }

  init() {
    render(this.#addingFormComponent, this.#listElement);
    this.#pointsData.forEach((pointData) => {
      render(new TripPointView(pointData), this.#listElement);
    });
  }
}
