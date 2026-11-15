import { useAppDispatch, useAppSelector } from '../store';
import { removeItem, startEdit } from '../store/actions';

function ItemList() {
  const items = useAppSelector((state) => state.items);
  const filter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const query = filter.trim().toLowerCase();
  const visibleItems = query === '' ? items : items.filter((item) => item.name.toLowerCase().includes(query));

  return (
    <ul className="list">
      {visibleItems.map((item) => (
        <li key={item.id}>
          {item.name} {item.price}{' '}
          <button type="button" aria-label="Редактировать" onClick={() => dispatch(startEdit(item))}>✎</button>
          <button type="button" aria-label="Удалить" onClick={() => dispatch(removeItem(item.id))}>✕</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
