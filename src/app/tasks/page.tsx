"use client";

import ListCard from "@/components/ui/ListCard";
import { useTodo } from "@/store/todoStore";

const Tasks = () => {
  const { lists } = useTodo();

  return (
    <section className="p-2 ">
      <div>tasks add</div>
      <div>
        {lists.length === 0 ? (
          <div>Nothing Here Yet</div>
        ) : (
          lists.map((list) => (
            <ListCard
              key={list.id}
              {...list}
              link={`/tasks/${list.id}`}
              editedAt={
                list.editedAt
                  ? new Date(list.editedAt).toLocaleDateString()
                  : "N/A"
              }
              listLength={list.todos.length}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Tasks;
