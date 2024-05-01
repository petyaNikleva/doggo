import { notFound } from "next/navigation";

export default async function NotFoundInterceptor() {
  return notFound();
}
