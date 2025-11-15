interface Todo {
  id: string;
  title: string;
  done: boolean;
}

interface List {
  id: string;
  title: string;
  done: boolean;
  todos: Todo[];
}

export interface TodoStore {
  lists: List[];
  addTodo?: (listId: string, title: string) => void;
  doneTodo: (listId: string, todoId: string) => void;
  deleteTodo: (listId: string, todoId: string) => void;
  addList: (title: string) => void;
  doneList: (listId: string) => void;
  deleteList: (listId: string) => void;
}
