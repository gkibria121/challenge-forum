"use client"
import React from "react";
import Table from "../../src/components/Table";
import Pagination from "../../src/components/Pagination";
import ActionButtons from "./ActionButtons";
import Tag from "./Tag"; 
const ChallengesPage = () => {
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

  return (
    <main className="main">
      <div className="container">
        <div className="flex justify-between items-center mb-4">
          <h4>All challenges</h4>
          <a className="btn btn--add" href="/dashboard/challenges/add">
            Add
          </a>
        </div>
        <Table
          headers={[
            { label: "No.", key: "id", colSpan: 1 },
            { label: "Title", key: "title", colSpan: 3 },
            { label: "Tag", key: "tags", colSpan: 1 },
            { label: "Actions", key: "actions", colSpan: 1 },
          ]}
          data={challenges}
          renderRow={(challenge) => (
            <>
              <td className="table__column">{challenge.id}</td>
              <td className="table__column" colSpan="3">
                {challenge.title}
              </td>
              <td className="table__column table__column--tags tags">
                {challenge.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </td>
              <td className="table__column">
                <ActionButtons />
              </td>
            </>
          )}
        />
        <Pagination
          currentPage={2}
          totalPages={10}
          onPageChange={(page) => console.log("Go to page:", page)}
        />
      </div>
    </main>
  );
};

export default ChallengesPage;
