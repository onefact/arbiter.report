import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: []
};

export const slice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    getEvents(state, action) {
      state.events = action.payload;
    },
    createEvent(state, action) {
      state.events.push(action.payload);
    },
    updateEvent(state, action) {
      const event = action.payload;

      state.events = state.events.map((_event) => {
        if (_event.id === event.id) {
          return event;
        }

        return _event;
      });
    },
    deleteEvent(state, action) {
      state.events = state.events.filter((event) => event.id !== action.payload);
    }
  }
});

export const { reducer } = slice;
