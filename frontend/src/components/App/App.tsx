import Header from '../../components/Header';
import TodoList from '../../components/TodoList';

function App() {
  return (
    <>
      <Header />
      <main className='pt-20'>
        <TodoList />
      </main>
    </>
  );
}

export default App;