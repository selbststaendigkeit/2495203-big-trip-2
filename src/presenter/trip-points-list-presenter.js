import {render} from '../render.js';
import TripPointAddingFormView from '../view/trip-point-adding-form-view.js';
import TripPointView from '../view/trip-point-view.js';

export default class TripPointsListPresenter {
  addingFormComponent = new TripPointAddingFormView();

  constructor({listElement, pointsModel}) {
    this.listElement = listElement;
    this.pointsModel = pointsModel;
  }

  init() {
    render(this.addingFormComponent, this.listElement);
    this.pointsModel.forEach((modelItem) => {
      render(new TripPointView(modelItem), this.listElement);
    });
  }
}
