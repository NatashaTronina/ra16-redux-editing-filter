import { useDispatch, useSelector } from 'react-redux';
import { combineReducers, legacy_createStore as createStore } from 'redux';
import { filterReducer, formReducer, itemsReducer } from './reducers';

const rootReducer = combineReducers({
  items: itemsReducer,
  form: formReducer,
  filter: filterReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
