import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const auth = request.headers.get("Authorization");

  const data = await fetch(`${process.env.API_URL}/people`, {
    headers: {
      Authorization: `${auth}`,
    },
  });
  const people = await data.json();
  return Response.json(people);
}

export async function DELETE(request: NextRequest) {
  const auth = request.headers.get("Authorization");
  const deletedPersonData = await request.json();

  const deletedPerson = await fetch(
    `${process.env.API_URL}/people/${deletedPersonData.id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `${auth}`,
      },
    }
  );

  const data = await deletedPerson.json();

  /* Kind of the same as the other route but I would check for the status code
   * And just return the information, such as if the user doesn't exist and they
   * tried to delete it, etc.
   */

  if (!data.ok) {
    return Response.json({ message: "Something went wrong." }, { status: 500 });
  }

  return Response.json({ message: "Person deleted." });
}
