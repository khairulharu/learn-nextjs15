"use client"

export default function ButtonDelte ({id}: {id: string}) {
     return(
          <button onClick={() => console.log(id)}>Delete</button>
     )
}