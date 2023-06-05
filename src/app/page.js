"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { handleClick } from "./util";

async function getData() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();

  return results;
}

// const GetRouter = (id) => {
//   const router = useRouter;
//   return router.push(`/movies/${id}`);
// };
// Warning: An error occurred during hydration. The server HTML was replaced with client content in <#document>.

export default async function Home() {
  const data = await getData();

  return (
    <div className="container">
      <title>Home | Next Movies</title>
      {data?.map((movie) => (
        <div key={movie.id}>
          <Link href={`movies/${movie.id}`}>
            <div
              // onClick={() => GetRouter(movie.id)}
              className="movie"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <h4>{movie.original_title}</h4>
            </div>
          </Link>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
