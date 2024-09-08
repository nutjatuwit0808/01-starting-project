import Link from "next/link";
import React from "react";

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((newsItem) => {
        return (
          <li>
            <Link href={`/news/${newsItem.slug}`}>
              <img src={`/images/news/${newsItem.image}`} alt={newsItem.slug} />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
