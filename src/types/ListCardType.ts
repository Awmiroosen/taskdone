export interface ListCardType {
  id: string;
  title: string;
  done?: boolean;
  editedAt?: string;
  listLength: number;
  doneCount: number;
  link: string;
}
