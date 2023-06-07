"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Detail() {
  const params = useParams();
  const url = params.id.split("/");
  console.log(url);

  return <h4>{url[1]}</h4>;
}
