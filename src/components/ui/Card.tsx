"use client";
import { TaskCard } from "@/types/Card";
import { useTodo } from "@/store/todoStore";

import {
  LuCalendarPlus,
  LuCalendarClock,
  LuNotebook,
  LuNotebookText,
  LuTrash,
} from "react-icons/lu";

const Card = ({
  id,
  listId,
  title = "Card Title",
  done = false,
  type,
}: TaskCard) => {
  const { doneList, doneTodo, deleteTodo, deleteList } = useTodo();

  const handleDone = () => {
    if (type === "list") {
      doneList(id);
    } else if (type === "todo" && listId) {
      doneTodo(listId, id);
    }
  };

  const handleDelete = () => {
    if (type === "list") {
      deleteList(id);
    } else if (type === "todo" && listId) {
      deleteTodo(listId, id);
    }
  };

  return <div>card</div>;
};

export default Card;
