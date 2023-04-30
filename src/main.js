import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import TripEventListView from './view/trip-event-list-view.js';
import EventEditView from './view/event-edit.js';
import EventEditHeaderView from './view/event-edit-header.js';
import EventEditDetailsView from './view/event-edit-details.js';
import TripPointView from './view/trip-point-view.js';
import { RenderPosition, render } from './render.js';

const siteTripMainElement = document.querySelector('.trip-main');
const siteFiltersMainElement = document.querySelector('.trip-controls');
const siteEventsMainElement = document.querySelector('.trip-events');

render(new TripInfoView(), siteTripMainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), siteFiltersMainElement);
render(new SortView(), siteEventsMainElement);
render(new TripEventListView(), siteEventsMainElement);

const tripEventsList = document.querySelector('.trip-events__list');

render(new EventEditView(), tripEventsList);

const eventEditElement = document.querySelector('.event--edit');

render(new EventEditHeaderView(), eventEditElement);
render(new EventEditDetailsView(), eventEditElement);

for (let i = 0; i < 3; i++) {
  render(new TripPointView(), tripEventsList);
}
