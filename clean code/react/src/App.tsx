import { useEffect, useState } from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Input as InputOld } from "./components/input.old";
import * as Input from "./components/input";

export function App() {
  const [todos, setTodo] = useState<string[]>([]);

  useEffect(() => {
    // carregar uma lista de todos do backend
  }, []);

  function handleCreateNewTodo() {}

  const isTodoListEmpty = todos.length === 0;

  return (
    <div>
      <Header onCreateNewTodo={() => {}} />

      <InputOld
        label="Nome"
        errorMessage="Digite o seu nome corretamente!"
        icon={<div />}
      />

      <Input.Root>
        <Input.Label htmlFor="name" id="name-label" />

        <Input.FormField />

        <Input.Icon>
          <span />
        </Input.Icon>

        <Input.ErrorMessage message="Digite seu nome corretamente!" />
      </Input.Root>
      <main>
        <h2>Advantages</h2>

        <section>
          <div>
            <h3>Blazing fast</h3>
            <p>This to-do list app is insanely fast.</p>
          </div>

          <div>
            <h3>No CSS</h3>
            <p>Clean and flat design with no CSS.</p>
          </div>
        </section>

        <ul>
          {todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>

        {isTodoListEmpty && <p>Nenhum todo cadastrado.</p>}
      </main>
      <Footer />
    </div>
  );
}
