import { calendarApi } from '../__fake-api__/calendar-api';
import { slice } from '../slices/calendar';

export const getEvents = () => async (dispatch) => {
  const response = await calendarApi.getEvents();

  dispatch(slice.actions.getEvents(response));
};

export const createEvent = (params) => async (dispatch) => {
  const response = await calendarApi.createEvent(params);

  dispatch(slice.actions.createEvent(response));
};

export const updateEvent = (params) => async (dispatch) => {
  const response = await calendarApi.updateEvent(params);

  dispatch(slice.actions.updateEvent(response));
};

export const deleteEvent = (params) => async (dispatch) => {
  await calendarApi.deleteEvent(params);

  dispatch(slice.actions.deleteEvent(params.eventId));
};
