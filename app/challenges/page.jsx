"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ChallengesTable from "./ChallengesTable"; // Import ChallengesTable 
import Pagination from "./../../src/components/Pagination"
function page() {
  const router = useRouter();

  const challenges = [
    { id: "1", title: "Palindrome Checker", tag: "principles" },
    { id: "2", title: "FizzBuzz", tag: "principles" },
    { id: "3", title: "Reverse a String", tag: "principles" },
    { id: "4", title: "Tower of Hanoi Algorithm", tag: "principles" },
    { id: "5", title: "Publisher Subscriber pattern", tag: "principles" },
    { id: "6", title: "Create a virtual DOM using JavaScript", tag: "principles" },
    { id: "7", title: "Singleton Method Design Pattern", tag: "principles" },
    { id: "8", title: "Design a URL Shortener", tag: "principles" },
    { id: "9", title: "Create a todo app maintaining SOLID", tag: "principles" },
    { id: "10", title: "Square Root", tag: "principles" },
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
          <ChallengesTable challenges={challenges} onRowClick={handleRowClick} />
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
