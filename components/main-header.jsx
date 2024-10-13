"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from './nav-link'

export default function MainHeader() {
  const path = usePathname();
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            {/* <Link href="/news" className={path.startsWith('/news') ? 'active' : undefined} >News</Link> */}
            <NavLink href={"/news"}>News</NavLink>
          </li>
          <li>
            {/* <Link href="/archive" className={path.startsWith('/archive') ? 'active' : undefined}>Archive</Link> */}
            <NavLink href={"/archive"}>Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
