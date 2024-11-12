import FormTodo from "./_components/FormTodo"
import TodoList from "./_components/TodoList"

type Todo = {
     id: string
     title: string
     completed: boolean
}
export default async function Home () {
     const rest = await fetch(process.env.NEXT_PUBLIC_API as string, {
          next: {
               tags: ["todo"],
          }
     })
     const data: Todo[] = await rest.json()

     return (
          <main>
               <FormTodo/>
               <h2>Todo Lists</h2>
               <section className="todo_list">
                    {!!data && data.map(todo => (
                         <div key={todo.id} className="card">
                              <TodoList todo={todo}/>
                         </div>
                    ))}
               </section>
          </main>
     )
}