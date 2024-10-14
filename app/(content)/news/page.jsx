import Link from "next/link";
import React from "react";
import NewsList from "../../../components/news-list"
import {getAllNews} from "@/lib/news"

export default async function News() {
  const news = await getAllNews();
  // const response = await fetch('http://localhost:8080/news');

  //  if(!response.ok) {
  //   throw new Error("Failed to fetch news.")
  //  }

  // const news = await response.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
      {/* <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <img
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul> */}
    </>
  );
}
