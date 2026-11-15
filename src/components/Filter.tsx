import { useAppDispatch, useAppSelector } from '../store';
import { changeFilter } from '../store/actions';

function Filter() {
  const value = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  return (
    <input
      className="filter"
      placeholder="Фильтр по названию"
      value={value}
      onChange={(event) => dispatch(changeFilter(event.target.value))}
    />
  );
}

export default Filter;
