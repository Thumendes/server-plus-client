import { TodoService } from "@services/TodoService";
import { Controller } from "@utils/Controller";
import { Request, Response } from "express";

export class TodoController extends Controller {
  baseRoute = "/todos";

  constructor(private todoService: TodoService) {
    super();
    this.route.get("/", this.index.bind(this));
    this.route.post("/", this.create.bind(this));
    this.route.put("/:id", this.update.bind(this));
    this.route.delete("/:id", this.delete.bind(this));
  }

  static make() {
    return new TodoController(TodoService.make());
  }

  async index(req: Request, res: Response) {
    const todos = this.todoService.getAll();

    res.json(todos);
  }

  async create(req: Request, res: Response) {
    const todo = req.body;

    const newTodo = this.todoService.create(todo);

    res.json(newTodo);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const todo = req.body;

    const updatedTodo = this.todoService.update(+id, todo);

    res.json(updatedTodo);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const deletedTodo = this.todoService.delete(+id);

    res.json(deletedTodo);
  }
}
