"use client";

import React, { useEffect, useState } from "react";
import PersonCard, { PersonType } from "./PersonCard";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const PeopleTable = ({ accessToken }: { accessToken: string }) => {
  const [people, setPeople] = useState<PersonType[]>([]);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const fetchPeople = async () => {
      const response = await fetch(`http://localhost:3000/api/people`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();
      setPeople(data.people);
    };

    fetchPeople();
  }, []);

  const handleDeletePerson = async (id: string) => {
    const deletePerson = await fetch(`http://localhost:3000/api/people`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ id }),
    });

    if (deletePerson.ok) {
      toast({
        title: "Person deleted.",
        description: `Person with id ${id} has been deleted.`,
      });
      router.refresh();
    }
  };

  return (
    <div className="grid grid-cols-3 gap-8">
      {people.map((person: PersonType) => (
        <div key={person.id}>
          <PersonCard person={person} deletePerson={handleDeletePerson} />
        </div>
      ))}
    </div>
  );
};

export default PeopleTable;
