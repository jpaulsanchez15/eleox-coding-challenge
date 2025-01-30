"use client";

export default function Home() {
  // const data = await fetch(`http://localhost:3000/api/login`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     username: "asdfa",
  //     password: "eleox",
  //   }),
  // });

  // const json = await data.text();
  // console.log(json);

  const handleClick = async () => {
    await fetch(`http://localhost:3000/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "int@eleox.com",
        password: "eleox",
      }),
    });
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Eleox Coding Challenge</h1>
      <button onClick={handleClick}>Log In</button>
    </div>
  );
}
