"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
     const pathName = usePathname()
     return (
          <nav>
               <ul>
                    <li>
                         <Link href={"/"} className={pathName === "/" ? 'active' : ""}>Home</Link>
                    </li>
                    <li>
                         <Link href={"about"} className={pathName === "/about" ? 'active' : ""}>About</Link>
                    </li>
               </ul>
          </nav>
     )
}