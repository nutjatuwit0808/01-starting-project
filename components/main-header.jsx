import React from "react";
import classes from "./main-header.module.css";
import Link from "next/link";

export default function MainHeader() {
  return (
    <>
      <div className={classes.mainHeader}>
        <Link href={"/"}>Home</Link>
        <Link href={"/news"}>News</Link>
      </div>
    </>
  );
}
