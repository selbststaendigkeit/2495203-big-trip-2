import {render, RenderPosition} from './render.js';
import TripMainInfoView from './view/trip-main-info.js';
import FilterView from './view/filter-view.js';

const tripMainElement = document.querySelector('.trip-main');
const filterContainer = document.querySelector('.trip-controls__filters');

render(new TripMainInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), filterContainer);
