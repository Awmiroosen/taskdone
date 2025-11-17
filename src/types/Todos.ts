export interface Todo {
  id: string;
  listId: string;
  title: string;
  done: boolean;
  listTitle: string;
  editedAt?: string;
}

interface List {
  id: string;
  title: string;
  done: boolean;
  editedAt?: string;
  todos: Todo[];
}

export interface TodoStore {
  lists: List[];
  pinLists: List[];
  addTodo?: (listId: string, title: string) => void;
  doneTodo: (listId: string, todoId: string) => void;
  deleteTodo: (listId: string, todoId: string) => void;
  addList: (title: string) => void;
  doneList: (listId: string) => void;
  deleteList: (listId: string) => void;
  addPinList: (listId: string) => void;
  deletePinList: (listId: string) => void;
}
