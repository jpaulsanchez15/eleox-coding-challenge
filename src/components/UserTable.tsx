import React from "react";
import { cookies } from "next/headers";

type PeopleType = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  avatar: string;
};

const PeopleTable = async () => {
  const getCookies = await cookies();
  const accessToken = getCookies.get("accessToken")?.value;
  const getPeople = await fetch(`http://localhost:3000/api/people`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const { people } = await getPeople.json();

  return (
    <div>
      {people.map((people: PeopleType) => {
        return (
          <div key={people.id}>
            <p>{people.first_name}</p>
            <p>{people.last_name}</p>
            <p>{people.email}</p>
            <p>{people.job_title}</p>
            <img src={people.avatar} alt="avatar" />
          </div>
        );
      })}
    </div>
  );
};

export default PeopleTable;
