import {render, RenderPosition} from './render.js';
import TripMainInfoView from './view/trip-main-info.js';
import FilterView from './view/filter-view.js';
import TripPointAddingButtonView from './view/trip-point-adding-button-view.js';
import TripPresenter from './presenter/trip-presenter.js';

const tripMainElement = document.querySelector('.trip-main');
const filterContainer = document.querySelector('.trip-controls__filters');
const eventsContainer = document.querySelector('.trip-events');

const tripPresenter = new TripPresenter({tripContainer: eventsContainer});

render(new TripMainInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), filterContainer);
render(new TripPointAddingButtonView(), tripMainElement);

tripPresenter.init();
