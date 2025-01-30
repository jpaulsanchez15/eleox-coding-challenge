import { cookies } from "next/headers";
import PeopleTable from "@/components/People/PeopleTable";
import { LoginForm } from "@/components/LoginForm";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const getCookies = await cookies();

  const accessToken = getCookies.get("accessToken")?.value;
  /* Return component to sign in */
  if (!accessToken) return <LoginForm />;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold text-center justify-center mx-auto flex">
        Eleox Coding Challenge
      </h1>
      <Button>Create Person</Button>
      <PeopleTable accessToken={accessToken} />
    </div>
  );
}
