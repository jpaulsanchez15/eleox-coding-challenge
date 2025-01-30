"use client";

import { Eye } from "lucide-react";
import { Card, CardTitle, CardDescription } from "../ui/card";

export type PersonType = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  avatar: string;
};

export interface PersonCardProps {
  person: PersonType;
  deletePerson: (id: string) => void;
}

const PersonCard = ({ person, deletePerson }: PersonCardProps) => {
  return (
    <Card className="p-12 flex flex-col items-center justify-center text-center relative">
      <button
        onClick={() => deletePerson(person.id)}
        className="absolute top-0 right-0 p-2 cursor-pointer font-bold text-xl"
      >
        X
      </button>
      <img
        className="rounded-full mb-4"
        src={person.avatar ?? "/placeholder-img"}
        alt="avatar"
      />
      <CardTitle>
        {person.first_name} {person.last_name}
      </CardTitle>
      <div className="">
        <CardDescription>{person.email}</CardDescription>
        <CardDescription>{person.job_title}</CardDescription>
      </div>
      <button
        onClick={() => console.log("")}
        className="absolute bottom-0 right-0 p-2 cursor-pointer"
      >
        <Eye />
      </button>
    </Card>
  );
};

export default PersonCard;
