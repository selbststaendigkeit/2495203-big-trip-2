import {
  render,
  RenderPosition,
} from '../framework/render.js';
import TripPointAddingFormView from '../view/trip-point-adding-form-view.js';
import PointPresenter from './point-presenter.js';
import {
  sortByDateAsc,
  sortByDurationAsc,
  sortByPriceAsc
} from '../utils.js';

const SortCriteria = {
  START_DAY: 'sort-day',
  DURATION: 'sort-time',
  PRICE: 'sort-price'
};

export default class TripPointsListPresenter {
  #listElement = null;
  #pointsModel = null;
  #pointTypes = null;
  #cities = null;
  #addButtonComponent = null;
  #addingFormComponent = null;
  #pointPresenters = new Map();
  #currentSortCriteria = SortCriteria.START_DAY;

  constructor({listElement, pointsModel}) {
    this.#listElement = listElement;
    this.#pointsModel = pointsModel;
    this.#pointTypes = this.#pointsModel.pointTypes;
    this.#cities = this.#pointsModel.cities;

    this.#pointsModel.setpointEditObserver(this.#handleModelPointChange);
  }

  get points() {
    switch (this.#currentSortCriteria) {
      case SortCriteria.DURATION: {
        return [...this.#pointsModel.tripPoints.sort(sortByDurationAsc)];
      }
      case SortCriteria.PRICE: {
        return [...this.#pointsModel.tripPoints.sort(sortByPriceAsc)];
      }
      case SortCriteria.START_DAY: {
        return [...this.#pointsModel.tripPoints.sort(sortByDateAsc)];
      }
    }

    return [...this.#pointsModel.tripPoints];
  }

  init({addButtonView}) {
    this.#addButtonComponent = addButtonView;
    if (this.points.length) {
      this.#renderPoints(this.points);
    }
  }

  openAddingForm() {
    this.#addingFormComponent = new TripPointAddingFormView({
      cities: this.#pointsModel.cities,
      pointTypes: this.#pointsModel.pointTypes,
      blankPoint: this.#pointsModel.blankPoint,
      onFormSubmit: this.#handleAddFormSubmit,
      addButtonView: this.#addButtonComponent
    });
    this.#resetAllForms();
    render(this.#addingFormComponent, this.#listElement, RenderPosition.AFTERBEGIN);
  }

  handleSortChange = (sortCriteria) => {
    if (sortCriteria === this.#currentSortCriteria) {
      return;
    }

    this.#currentSortCriteria = sortCriteria;
    this.#rerenderPoints();
  };

  clearPointsList = () => {
    this.#pointPresenters.forEach((point) => {
      point.destroy();
    });
  };

  #enableButton() {
    this.#addButtonComponent.element.disabled = false;
  }

  #renderPoints(pointsData) {
    pointsData.forEach((pointData) => {
      this.#renderPoint(pointData);
    });
  }

  #renderPoint(pointData) {
    const pointPresenter = new PointPresenter({
      listElement: this.#listElement,
      handleDataChange: this.#handlePointChange,
      handlePointEditClick: this.#resetAllForms
    });

    pointPresenter.init(pointData, this.#pointTypes, this.#cities);
    this.#pointPresenters.set(pointData.id, pointPresenter);
  }

  #resetAllForms = () => {
    this.#pointPresenters.forEach((point) => {
      point.resetForm();
    });
  };

  #rerenderPoints = () => {
    this.clearPointsList();
    this.#renderPoints(this.points);
  };

  #handlePointChange = (changedPoint) => {
    this.#pointsModel.updatePoint(changedPoint);
  };

  #handleModelPointChange = (changedPoint) => {
    this.#pointPresenters.get(changedPoint.id).init(changedPoint, this.#pointTypes, this.#cities);
    this.#rerenderPoints();
  };

  #handleAddFormSubmit = (pointData) => {
    this.#pointsModel.addPoint(pointData);
    this.#enableButton();
  };
}
