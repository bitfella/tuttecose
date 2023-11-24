import TodoList from '../../components/TodoList';

const App = (): JSX.Element => {
  return (
    <>
      <main className={`
        flex
        flex-col
        items-center
        justify-center
        min-h-[100dvh]
        px-8
        py-16
        font-mono
      `}>
        <TodoList />
      </main>
    </>
  );
}

export default App;
