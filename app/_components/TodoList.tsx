"use client"

import Link from "next/link";
import ButtonDelete from "./ButtonDelete";
import { useRouter } from "next/navigation";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export default function TodoList({ todo }: { todo: Todo }) {
     const router = useRouter()

     async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
          await fetch(`${process.env.NEXT_PUBLIC_API}/${todo.id}`, {
               method: 'PATCH',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                    completed: e.target.checked
               })
          })

          router.refresh()
     }

  return (
    <>
      <div className="todo_header">
        <Link href={`todo/${todo.id}`}>
          <p>{todo.title}</p>
        </Link>
          <input type="checkbox" checked={todo.completed} onChange={handleChange} />
      </div>
      <ButtonDelete id={todo.id}/>
    </>
  );
}
