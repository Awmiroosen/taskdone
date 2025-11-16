export interface TaskCard {
  id: string;
  listId?: string;
  title: string;
  done: boolean;
  type: "list" | "todo";
}
