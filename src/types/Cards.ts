export interface TaskCard {
  id: string;
  listId?: string;
  title: string;
  done: boolean;
  startDate?: string;
  lastUpdate?: string;
  listTitle: string;
  tasks?: number;
  type: "list" | "todo";
}
