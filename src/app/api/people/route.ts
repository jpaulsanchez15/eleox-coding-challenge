export async function GET(request: Request) {
  const auth = request.headers.get("Authorization");

  const data = await fetch(`${process.env.API_URL}/people`, {
    headers: {
      Authorization: `${auth}`,
    },
  });
  const people = await data.json();
  return Response.json(people);
}
