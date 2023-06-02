"use client";
import { useState } from "react";

async function getData() {
  return { title: "About | Next Movies" }; // Your blog content
}

export default async function About() {
  const [counter, setCounter] = useState(0);
  const { title } = await getData();

  return (
    <div>
      <title>{title}</title>
      <h1 className={counter % 2 === 0 ? "active" : ""}>counter {counter}</h1>
      <button onClick={() => setCounter((pre) => pre + 1)}>+</button>
      <style jsx>{`
        .active {
          color: blue;
        }
      `}</style>
    </div>
  );
}
