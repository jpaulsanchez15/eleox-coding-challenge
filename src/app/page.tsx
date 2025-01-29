const API_URL = "https://eleox-interview-api-7n5su.ondigitalocean.app";

export default async function Home() {
  const data = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "int@eleox.com",
      password: "eleox",
    }),
  });
  const { access_token: accessToken } = await data.json();

  const people = await fetch(`${API_URL}/people`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const peopleData = await people.json();
  const {
    id,
    first_name: firstName,
    last_name: lastName,
    email,
    job_title: jobTitle,
    avatar,
  } = peopleData.people[0];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Eleox Coding Challenge</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <img src={avatar} alt="Avatar" className="w-40 h-40 rounded-full" />
        <div key={id}>
          <p className="text-lg font-semibold">{`${firstName} ${lastName}`}</p>
          <p className="text-sm">{jobTitle}</p>
          <p className="text-sm">{email}</p>
        </div>
      </div>
    </div>
  );
}
