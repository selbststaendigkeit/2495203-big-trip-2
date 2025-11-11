import {render} from '../render.js';
import TripPointAddingFormView from '../view/trip-point-adding-form-view.js';
import TripPointView from '../view/trip-point-view.js';

export default class TripPointsListPresenter {
  addingFormComponent = new TripPointAddingFormView();

  constructor({listContainer}) {
    this.listContainer = listContainer;
  }

  init() {
    render(this.addingFormComponent, this.listContainer);
    for (let i = 0; i < 3; i++) {
      render(new TripPointView(), this.listContainer);
    }
  }
}
