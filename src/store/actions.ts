import type { Item } from '../models/item';

export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const START_EDIT = 'START_EDIT';
export const RESET_FORM = 'RESET_FORM';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export type FormField = 'name' | 'price';

export const addItem = (name: string, price: number) =>
  ({ type: ADD_ITEM, payload: { id: crypto.randomUUID(), name, price } }) as const;

export const updateItem = (item: Item) => ({ type: UPDATE_ITEM, payload: item }) as const;

export const removeItem = (id: string) => ({ type: REMOVE_ITEM, payload: { id } }) as const;

export const changeField = (field: FormField, value: string) =>
  ({ type: CHANGE_FIELD, payload: { field, value } }) as const;

export const startEdit = (item: Item) => ({ type: START_EDIT, payload: item }) as const;

export const resetForm = () => ({ type: RESET_FORM }) as const;

export const changeFilter = (value: string) => ({ type: CHANGE_FILTER, payload: { value } }) as const;

export type AppAction = ReturnType<
  | typeof addItem
  | typeof updateItem
  | typeof removeItem
  | typeof changeField
  | typeof startEdit
  | typeof resetForm
  | typeof changeFilter
>;
