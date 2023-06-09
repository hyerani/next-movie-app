"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Detail() {
  const params = useParams();
  const url = params.id.split("/");
  const [title, id] = url;

  return <h4>{title}</h4>;
}
