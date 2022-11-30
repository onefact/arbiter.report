import { kanbanApi } from '../__fake-api__/kanban-api';
import { slice } from '../slices/kanban';

export const getBoard = () => async (dispatch) => {
  const data = await kanbanApi.getBoard();

  dispatch(slice.actions.getBoard(data));
};

export const createColumn = (params) => async (dispatch) => {
  const response = await kanbanApi.createColumn(params);

  dispatch(slice.actions.createColumn(response));
};

export const updateColumn = (params) => async (dispatch) => {
  const response = await kanbanApi.updateColumn(params);

  dispatch(slice.actions.updateColumn(response));
};

export const clearColumn = (params) => async (dispatch) => {
  await kanbanApi.clearColumn(params);

  dispatch(slice.actions.clearColumn(params.columnId));
};

export const deleteColumn = (params) => async (dispatch) => {
  await kanbanApi.deleteColumn(params);

  dispatch(slice.actions.deleteColumn(params.columnId));
};

export const createCard = (params) => async (dispatch) => {
  const response = await kanbanApi.createCard(params);

  dispatch(slice.actions.createCard(response));
};

export const updateCard = (params) => async (dispatch) => {
  const response = await kanbanApi.updateCard(params);

  dispatch(slice.actions.updateCard(response));
};

export const moveCard = (params) => async (dispatch) => {
  await kanbanApi.moveCard(params);

  dispatch(slice.actions.moveCard(params));
};

export const deleteCard = (params) => async (dispatch) => {
  await kanbanApi.deleteCard(params);

  dispatch(slice.actions.deleteCard(params.cardId));
};

export const addComment = (params) => async (dispatch) => {
  const response = await kanbanApi.addComment(params);

  dispatch(slice.actions.addComment(response));
};

export const addChecklist = (params) => async (dispatch) => {
  const response = await kanbanApi.addChecklist(params);

  dispatch(slice.actions.addChecklist({
    cardId: params.cardId,
    checklist: response
  }));
};

export const updateChecklist = (params) => async (dispatch) => {
  const response = await kanbanApi.updateChecklist(params);

  dispatch(slice.actions.updateChecklist({
    cardId: params.cardId,
    checklist: response
  }));
};

export const deleteChecklist = (params) => async (dispatch) => {
  await kanbanApi.deleteChecklist(params);

  dispatch(slice.actions.deleteChecklist(params));
};

export const addCheckItem = (params) => async (dispatch) => {
  const response = await kanbanApi.addCheckItem(params);

  dispatch(slice.actions.addCheckItem({
    cardId: params.cardId,
    checklistId: params.checklistId,
    checkItem: response
  }));
};

export const updateCheckItem = (params) => async (dispatch) => {
  const response = await kanbanApi.updateCheckItem(params);

  dispatch(slice.actions.updateCheckItem({
    cardId: params.cardId,
    checklistId: params.checklistId,
    checkItem: response
  }));
};

export const deleteCheckItem = (params) => async (dispatch) => {
  await kanbanApi.deleteCheckItem(params);

  dispatch(slice.actions.deleteCheckItem(params));
};
