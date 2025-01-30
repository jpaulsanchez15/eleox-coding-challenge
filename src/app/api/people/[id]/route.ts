import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const auth = request.headers.get("Authorization");
  // Extract `id` from the pathname `/api/people/[id]`
  const { pathname } = request.nextUrl;
  const personId = pathname.split("/").pop();

  const data = await fetch(`${process.env.API_URL}/people/${personId}`, {
    headers: {
      Authorization: `${auth}`,
    },
  });
  console.log(data);
  const people = await data.json();
  console.log(people);
  return Response.json(people);
}
