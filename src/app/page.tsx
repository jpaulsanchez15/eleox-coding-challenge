import { cookies } from "next/headers";
import PeopleTable from "@/components/UserTable";

export default async function Home() {
  const getCookies = await cookies();

  const accessToken = getCookies.get("accessToken");

  /* Return component to sign in */
  if (!accessToken) return <div>Not logged in</div>;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Eleox Coding Challenge</h1>
      <PeopleTable />
    </div>
  );
}
