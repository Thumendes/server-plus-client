export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export class TodoService {
  private todos: Todo[] = [];

  constructor() {
    this.todos = [
      {
        id: 1,
        title: "Learn TypeScript",
        completed: false,
      },
      {
        id: 2,
        title: "Learn React",
        completed: false,
      },
      {
        id: 3,
        title: "Learn Node.js",
        completed: false,
      },
    ];
  }

  static make() {
    return new TodoService();
  }

  public getAll(): Todo[] {
    return this.todos;
  }

  public getById(id: number): Todo | undefined {
    return this.todos.find((todo) => todo.id === id);
  }

  public create(todo: Todo): Todo {
    const newTodo = {
      ...todo,
      id: this.todos.length + 1,
    };

    this.todos.push(newTodo);

    return newTodo;
  }

  public update(id: number, todo: Todo): Todo | undefined {
    const index = this.todos.findIndex((t) => t.id === id);

    if (index === -1) return;

    this.todos[index] = todo;

    return this.todos[index];
  }

  public delete(id: number): Todo | undefined {
    const index = this.todos.findIndex((t) => t.id === id);

    if (index === -1) return;

    const deletedTodo = this.todos[index];

    this.todos.splice(index, 1);

    return deletedTodo;
  }
}
