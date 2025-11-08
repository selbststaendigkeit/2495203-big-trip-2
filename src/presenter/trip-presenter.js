import {render} from '../render.js';
import SortView from '../view/sort-view.js';
import TripPointsListView from '../view/trip-points-list-view.js';
import TripPointsListPresenter from './trip-points-list-presenter.js';

export default class TripPresenter {
  sortComponent = new SortView();
  tripPointsListComponent = new TripPointsListView();
  tripPointsListPresenter = new TripPointsListPresenter({listContainer: this.tripPointsListComponent.getElement()});

  constructor({tripContainer}) {
    this.tripContainer = tripContainer;
  }

  init() {
    render(this.sortComponent, this.tripContainer);
    render(this.tripPointsListComponent, this.tripContainer);
    this.tripPointsListPresenter.init();
  }
}
