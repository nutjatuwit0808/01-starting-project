import Link from "next/link";
import classes from "./page.module.css"

export default function HomePage() {
  return (
    <div id="home" className={classes.home}>
      <h1>Next.js Routing & Page Rendering</h1>
      <div className={classes.linkWrapper}>
        <Link href={"/news"}>
          News
        </Link>
      </div>
    </div>
  );
}
