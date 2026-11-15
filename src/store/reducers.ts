import { ADD_ITEM, CHANGE_FIELD, CHANGE_FILTER, REMOVE_ITEM, RESET_FORM, START_EDIT, UPDATE_ITEM } from './actions';
import type { AppAction } from './actions';
import type { Item } from '../models/item';

const initialItems: Item[] = [
  { id: 'glass', name: 'Замена стекла', price: 21000 },
  { id: 'display', name: 'Замена дисплея', price: 25000 },
  { id: 'battery', name: 'Замена аккумулятора', price: 4000 },
  { id: 'microphone', name: 'Замена микрофона', price: 2500 },
];

export function itemsReducer(state: Item[] = initialItems, action: AppAction): Item[] {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case UPDATE_ITEM:
      return state.map((item) => (item.id === action.payload.id ? action.payload : item));
    case REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}

export interface FormState {
  name: string;
  price: string;
  editingId: string | null;
}

const initialForm: FormState = { name: '', price: '', editingId: null };

export function formReducer(state: FormState = initialForm, action: AppAction): FormState {
  switch (action.type) {
    case CHANGE_FIELD:
      return { ...state, [action.payload.field]: action.payload.value };
    case START_EDIT:
      return { name: action.payload.name, price: String(action.payload.price), editingId: action.payload.id };
    case RESET_FORM:
      return initialForm;
    case REMOVE_ITEM:
      // Удалённую запись больше нельзя сохранить, поэтому форма возвращается к добавлению.
      return state.editingId === action.payload.id ? initialForm : state;
    default:
      return state;
  }
}

export function filterReducer(state = '', action: AppAction): string {
  return action.type === CHANGE_FILTER ? action.payload.value : state;
}
