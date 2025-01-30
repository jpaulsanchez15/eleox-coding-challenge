import { cookies } from "next/headers";

export async function POST(request: Request) {
  const { username, password } = await request.json();
  const data = await fetch(`${process.env.API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  /*
   * Blanket error handling of something went wrong but
   * in a real-world scenario, I would handle it in a few ways
   * 1. I would check the status code and return a more meaningful error message
   * 2. I would return a more meaningful error message to the user
   */

  if (data.status === 401) {
    return new Response("Unauthorized.", { status: 401 });
  }
  const { access_token: accessToken } = await data.json();
  (await cookies()).set("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  return Response.json({ message: "Logged in successfully.", status: 200 });
}
