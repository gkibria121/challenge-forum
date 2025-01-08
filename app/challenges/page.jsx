"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function page() {
  const router = useRouter();
  const handleOnclick =(event)=>{
    event.preventDefault();
     const challengeLinkEl = event.target.closest('.table__row');
     if(!challengeLinkEl) return;
     const challengeId = challengeLinkEl.dataset.challengeId;

     if(!challengeId){
      throw new Error("Challenge id not found!")
     }

    router.push(`/challenges/${challengeId}`)
  }
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <Link href="/dashboard" className="nav__link ">
              Dashboard
            </Link>
            <Link href="/challenges" className="nav__link ml-1 nav__link--active">
              Challenges
            </Link>
          </li>
          <li className="nav__list-item">
            <Link href="/login" className="nav__link">
              login
            </Link>
          </li>
        </ul>
      </nav>
      <main className="main">
        <div className="container">
          <h4 className="">All challenges</h4>

          <table className="table">
            <thead className="table__thead">
            <tr>
              <th className="table__th">No.</th>
              <th colSpan="3" className="table__th">Title</th>
              <th className="table__th table__th--tag">Tag</th>   
            </tr>
            </thead>
            <tbody
              className="table__tbody"onClick={handleOnclick} >
              <tr className="table__row" data-challenge-id="1">
                <td className="table__column">1</td>
                <td className="table__column" colSpan="3">
                  Palindrome Checker
                </td>
                <td className="table__column tags">
                  <span className="tag">principles</span>
                </td>
              </tr>
             <tr className="table__row" data-challenge-id="1">
                <td className="table__column">2</td>
                <td className="table__column" colSpan="3">
                  FizzBuzz
                </td>
                <td className="table__column tags">
                  <span className="tag">principles</span>
                </td>
              </tr>
             <tr className="table__row" data-challenge-id="1">
                <td className="table__column">3</td>
                <td className="table__column" colSpan="3">
                  Reverse a String
                </td>
                <td className="table__column tags">
                  <span className="tag">principles</span>
                </td>
              </tr>
             <tr className="table__row" data-challenge-id="1">
                <td className="table__column">4</td>
                <td className="table__column" colSpan="3">
                  Tower of Hanoi Algorithm
                </td>
                <td className="table__column tags">
                  <span className="tag">principles</span>
                </td>
              </tr>
             <tr className="table__row" data-challenge-id="1">
                <td className="table__column">5</td>
                <td className="table__column" colSpan="3">
                  Publisher Subscriber pattern
                </td>
                <td className="table__column tags">
                  <span className="tag">principles</span>
                </td>
              </tr>
             <tr className="table__row" data-challenge-id="1">
                <td className="table__column">6</td>
                <td className="table__column" colSpan="3">
                  Create a virtual DOM using JavaScript
                </td>
                <td className="table__column tags">
                  <span className="tag">principles</span>
                </td>
              </tr>
             <tr className="table__row" data-challenge-id="1">
                <td className="table__column">7</td>
                <td className="table__column" colSpan="3">
                  Singleton Method Design Pattern
                </td>
                <td className="table__column tags">
                  <span className="tag">principles</span>
                </td>
              </tr>
             <tr className="table__row" data-challenge-id="1">
                <td className="table__column">8</td>
                <td className="table__column" colSpan="3">
                  Design a URL Shortener
                </td>
                <td className="table__column tags">
                  <span className="tag">principles</span>
                </td>
              </tr>
             <tr className="table__row" data-challenge-id="1">
                <td className="table__column">9</td>
                <td className="table__column" colSpan="3">
                  Create a todo app maintaining SOLID
                </td>
                <td className="table__column tags">
                  <span className="tag">principles</span>
                </td>
              </tr>
             <tr className="table__row" data-challenge-id="1">
                <td className="table__column">10</td>
                <td className="table__column" colSpan="3">
                  Square Root
                </td>
                <td className="table__column tags">
                  <span className="tag">principles</span>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="pagination">
            <span className="page page--disabled">&lt;</span>
            <span className="page">1</span>
            <span className="page page--active">2</span>
            <span className="page">...</span>
            <span className="page">9</span>
            <span className="page">10</span>
            <span className="page page--disabled">&gt;</span>
          </div>
        </div>
      </main>
    </>
  );
}

export default page;
