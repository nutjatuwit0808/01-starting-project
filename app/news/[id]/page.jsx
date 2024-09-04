import React from "react";

export default function NewsDetail({ params }) {
  const newsId = params.id;
  return (
    <>
      <h1>News Detail</h1>
      <p>{newsId}</p>
    </>
  );
}
