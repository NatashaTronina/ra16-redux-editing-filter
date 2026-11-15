import { Provider } from 'react-redux';
import Filter from './components/Filter';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import { store } from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <main className="app">
        <ItemForm />
        <Filter />
        <ItemList />
      </main>
    </Provider>
  );
}

export default App;
