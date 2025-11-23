import {render} from '../framework/render.js';
import TripPointAddingFormView from '../view/trip-point-adding-form-view.js';
import TripPointView from '../view/trip-point-view.js';

export default class TripPointsListPresenter {
  #listElement = null;
  #pointsModel = null;
  #pointsData = null;
  #pointTypes = null;
  #cities = null;
  #addingFormComponent = null;

  constructor({listElement, pointsModel}) {
    this.#listElement = listElement;
    this.#pointsModel = pointsModel;
    this.#pointsData = this.#pointsModel.tripPoints;
    this.#pointTypes = this.#pointsModel.pointTypes;
    this.#cities = this.#pointsModel.cities;
    this.#addingFormComponent = new TripPointAddingFormView({
      cities: this.#pointsModel.cities,
      pointTypes: this.#pointsModel.pointTypes,
      blankPoint: this.#pointsModel.blankPoint,
    });
  }

  init() {
    //render(this.#addingFormComponent, this.#listElement);
    this.#renderPoints(this.#pointsData);
  }

  #renderPoints(pointsData) {
    pointsData.forEach((pointData) => {
      render(new TripPointView({
        pointData,
        pointTypes: this.#pointTypes,
        cities: this.#cities
      }), this.#listElement);
    });
  }
}
