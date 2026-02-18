interface HeaderProps {
  onCreateNewTodo: () => void;
}

export function Header({ onCreateNewTodo }: HeaderProps) {
  return (
    <header>
      <h1>My new innovate to-do list!</h1>

      <button onClick={onCreateNewTodo}>Add new todo</button>
    </header>
  );
}
