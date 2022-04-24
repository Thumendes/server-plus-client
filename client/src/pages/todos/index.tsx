import { Header } from "../../components/Header";
import { findAllTodoQuery } from "../../services/queries";

export const TodosPage = () => {
  const { data, isLoading, error } = findAllTodoQuery();

  return (
    <>
      <Header title="Todos" />

      {isLoading && <div className="alert bg-cyan-500">Carregando...</div>}
      {error && (
        <div className="alert bg-red-500">
          Erro... {(error as Error).message}
        </div>
      )}

      <div className="flex">
        {data?.data.map((todo) => (
          <div className="flex-1 p-4" key={todo.id}>
            <h1>{todo.title}</h1>
            <p>{todo.completed}</p>
          </div>
        ))}
      </div>
    </>
  );
};
