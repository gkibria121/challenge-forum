import React from "react";

function page() {
  return <>    <nav className="nav">
  <ul className="nav__list">
    <li className="nav__list-item">
      <a href="Dashboard.html" className="nav__link nav__link--active">Dashboard</a>
      <a href="Challenges.html" className="nav__link ml-1 ">Challenges</a>
    </li>
    <li className="nav__list-item">
      <a href="login.html" className="nav__link">login</a>
    </li>
  </ul>
</nav>
<main className="main">

    <div className="container">

      <h4 className="">All challenges</h4>
      <a className="btn btn--add" href="/dashboard/challenges/add">Add</a>
      <table className="table">
        <thead className="table__thead">
            <tr>
              <th>No.</th>
              <th colSpan="3">Title</th>
              <th>Tag</th>  
              <th>Actions</th>
            </tr>
           
           
        </thead>
        <tbody className="table__tbody"  >
          <tr className="table__row">
            <td className="table__column">1</td>
            <td className="table__column" colSpan="3">Palindrome Checker</td>
            <td className="table__column" ><span className="tag">principles</span></td>
            <td className="table__column" >
                 <button className="btn btn--edit">edit</button>
                 <button className="btn btn--delete">delete</button>
            </td>
          </tr>
          <tr className="table__row">
            <td className="table__column">2</td>
            <td className="table__column" colSpan="3">FizzBuzz</td>
            <td className="table__column"><span className="tag">principles</span></td>
            <td className="table__column" >
                <button className="btn btn--edit">edit</button>
                <button className="btn btn--delete">delete</button>
           </td>
          </tr>
          <tr className="table__row"> 
            <td className="table__column">3</td>
            <td className="table__column" colSpan="3">Reverse a String</td>
            <td className="table__column"><span className="tag">principles</span></td>
            <td className="table__column" >
                <button className="btn btn--edit">edit</button>
                <button className="btn btn--delete">delete</button>
           </td>
          </tr>
          <tr className="table__row">
            <td className="table__column">4</td>
            <td className="table__column" colSpan="3">Tower of Hanoi Algorithm</td>
            <td className="table__column"><span className="tag">principles</span></td>
            <td className="table__column" >
                <button className="btn btn--edit">edit</button>
                <button className="btn btn--delete">delete</button>
           </td>
          </tr>
          <tr className="table__row"> 
            <td className="table__column">5</td>
            <td className="table__column" colSpan="3">Publisher Subscriber pattern</td>
            <td className="table__column"><span className="tag">principles</span></td>
            <td className="table__column" >
                <button className="btn btn--edit">edit</button>
                <button className="btn btn--delete">delete</button>
           </td>
          </tr>
          <tr className="table__row"> 
            <td className="table__column">6</td>
            <td className="table__column" colSpan="3">Create a virtual DOM using JavaScript</td>
            <td className="table__column"><span className="tag">principles</span></td>
            <td className="table__column" >
                <button className="btn btn--edit">edit</button>
                <button className="btn btn--delete">delete</button>
           </td>
          </tr>
          <tr className="table__row"> 
            <td className="table__column">7</td>
            <td className="table__column" colSpan="3">Singleton Method Design Pattern</td>
            <td className="table__column"><span className="tag">principles</span></td>
            <td className="table__column" >
                <button className="btn btn--edit">edit</button>
                <button className="btn btn--delete">delete</button>
           </td>
          </tr>
          <tr className="table__row">
            <td className="table__column">8</td>
            <td className="table__column" colSpan="3">Design a URL Shortener</td>
            <td className="table__column"><span className="tag">principles</span></td>
            <td className="table__column" >
                <button className="btn btn--edit">edit</button>
                <button className="btn btn--delete">delete</button>
           </td>
          </tr>
          <tr className="table__row">
            <td className="table__column">9</td>
            <td className="table__column" colSpan="3">Create a todo app maintaining SOLID</td>
            <td className="table__column"><span className="tag">principles</span></td>
            <td className="table__column" >
                <button className="btn btn--edit">edit</button>
                <button className="btn btn--delete">delete</button>
           </td>
          </tr>
          <tr className="table__row">
            <td className="table__column">10</td>
            <td className="table__column" colSpan="3">Square Root</td>
            <td className="table__column"><span className="tag">principles</span></td>
            <td className="table__column" >
                <button className="btn btn--edit">edit</button>
                <button className="btn btn--delete">delete</button>
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
   
</main></>;
}

export default page;
