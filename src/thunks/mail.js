import { mailApi } from '../__fake-api__/mail-api';
import { slice } from '../slices/mail';

export const getLabels = () => async (dispatch) => {
  const response = await mailApi.getLabels();

  dispatch(slice.actions.getLabels(response));
};

export const getEmails = (params) => async (dispatch) => {
  const response = await mailApi.getEmails(params);

  dispatch(slice.actions.getEmails(response));
};

export const getEmail = (params) => async (dispatch) => {
  const response = await mailApi.getEmail(params);

  dispatch(slice.actions.getEmail(response));
};

export const openSidebar = () => async (dispatch) => {
  dispatch(slice.actions.openSidebar());
};

export const closeSidebar = () => async (dispatch) => {
  dispatch(slice.actions.closeSidebar());
};

export const openComposer = () => async (dispatch) => {
  dispatch(slice.actions.openCompose());
};

export const closeComposer = () => async (dispatch) => {
  dispatch(slice.actions.closeCompose());
};
