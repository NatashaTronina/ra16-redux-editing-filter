import type { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { addItem, changeField, resetForm, updateItem } from '../store/actions';

function ItemForm() {
  const { name, price, editingId } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const parsedPrice = Number(price);
    if (trimmedName === '' || price === '' || !Number.isFinite(parsedPrice) || parsedPrice < 0) {
      return;
    }

    dispatch(
      editingId === null
        ? addItem(trimmedName, parsedPrice)
        : updateItem({ id: editingId, name: trimmedName, price: parsedPrice }),
    );
    dispatch(resetForm());
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        aria-label="Название"
        value={name}
        required
        onChange={(event) => dispatch(changeField('name', event.target.value))}
      />
      <input
        aria-label="Цена"
        type="number"
        min="0"
        value={price}
        required
        onChange={(event) => dispatch(changeField('price', event.target.value))}
      />
      <button type="submit">Save</button>
      {editingId !== null && (
        <button type="button" onClick={() => dispatch(resetForm())}>Cancel</button>
      )}
    </form>
  );
}

export default ItemForm;
