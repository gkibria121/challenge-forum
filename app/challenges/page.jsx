"use client";

import React from "react";
import { useRouter } from "next/navigation"; 
import Pagination from "./../../src/components/Pagination"
import Table from "../../src/components/Table";
import Tag from "../dashboard/Tag";
import ActionButtons from "../dashboard/ActionButtons";

function page() {
  const router = useRouter();

  const challenges = [
    {
      id: 1,
      title: "Palindrome Checker",
      tags: ["coding"]
    },
    {
      id: 2,
      title: "FizzBuzz",
      tags: ["principles"]
    },
    {
      id: 3,
      title: "Reverse a String",
      tags: ["coding", "principles", "Design pattern"]
    },
    {
      id: 4,
      title: "Tower of Hanoi Algorithm",
      tags: ["singleton"]
    },
    {
      id: 5,
      title: "Publisher Subscriber pattern",
      tags: ["experimental"]
    },
    {
      id: 6,
      title: "Create a virtual DOM using JavaScript",
      tags: ["data modeling"]
    },
    {
      id: 7,
      title: "Singleton Method Design Pattern",
      tags: ["DOM"]
    },
    {
      id: 8,
      title: "Design a URL Shortener",
      tags: ["AJAX"]
    },
    {
      id: 9,
      title: "Create a todo app maintaining SOLID",
      tags: ["IFI"]
    },
    {
      id: 10,
      title: "Square Root",
      tags: ["principles"]
    }
  ];

  const handleRowClick = (event) => {
    const challengeLinkEl = event.target.closest(".table__row");
    if (!challengeLinkEl) return;
    const challengeId = challengeLinkEl.dataset.challengeId;

    if (!challengeId) {
      throw new Error("Challenge id not found!");
    }

    router.push(`/challenges/${challengeId}`);
  };

  const handlePageClick = (page) => {
    console.log(`Navigating to page ${page}`);
  };

  return (
    <>
      <main className="main">
        <div className="container">
          <h4 className="">All challenges</h4>
          <Table
          onClick={handleRowClick}
          headers={[
            { label: "No.", key: "id", colSpan: 1 },
            { label: "Title", key: "title", colSpan: 1 },
            { label: "Tag", key: "tags", colSpan: 1 }, 
          ]}
          data={challenges}
          renderRow={(challenge) => (
            <>
              <td className="table__column">{challenge.id}</td>
              <td className="table__column" colSpan="1">
                {challenge.title}
              </td>
              <td className="table__column table__column--tags tags">
                {challenge.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </td> 
            </>
          )}
        />
          <Pagination
            currentPage={2}
            totalPages={10}
            onPageClick={handlePageClick}
          />
        </div>
      </main>
    </>
  );
}

export default page;
