"use client"

import { useActionState } from "react"
import { remove } from "@/app/action"

export default function ButtonDelte ({id}: {id: string}) {
     const deleteWithId = remove.bind(null, null, id)
     const [, actionDelete, isPending] = useActionState(deleteWithId, null)
     return(
          <form action={actionDelete}>
               <button type="submit" disabled={isPending}>Delete</button>
          </form>    
     )
}