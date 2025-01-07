"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function page() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("1");
  const handleTabLinkClick = (event) => {
    const tabLinkEl = event.target.closest(".tab__link");
    if (!tabLinkEl) return;
    const tabId = tabLinkEl.dataset.tabId;
    if (!tabId) return;

    setActiveTab(tabId);
  };
  const goTo = (link) => {
    return (event) => {
      event.preventDefault();
      router.push(link);
    };
  };
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <a href="Dashboard.html" className="nav__link ">
              Dashboard
            </a>
            <a href="/challenges" className="nav__link ml-1">
              Challenges
            </a>
          </li>
          <li className="nav__list-item">
            <a href="login.html" className="nav__link">
              login
            </a>
          </li>
        </ul>
      </nav>
      <main className="main">
        <div className="container">
          <div className="tabs">
            <div className="tabs__header" onClick={handleTabLinkClick}>
              <button
                className={`tab__link ${
                  activeTab === "1" ? "tab__link--active" : ""
                }`}
                data-tab-id="1"
              >
                Description
              </button>
              <button
                className={`tab__link ${
                  activeTab === "2" ? "tab__link--active" : ""
                }`}
                data-tab-id="2"
              >
                Hints
              </button>
            </div>
            <div className="tabs__body">
              <div className={`tab ${activeTab === "1" ? "tab--active" : ""}`}>
                <form className="challenge">
                  <div className="form__group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="challenge__title mt-1"
                      id="title"
                      placeholder="Challenge title"
                    />
                  </div>

                  <div className="form__group">
                    <label htmlFor="content">Description</label>
                    <textarea
                      className="challenge__description"
                      id="description"
                      placeholder="Challenge descriptions"
                    ></textarea>
                  </div>
                  <div className="form__group">
                    <label htmlFor="tags">Tags</label>
                    <input
                      name="tags mt-1"
                      id="tags"
                      className="challenge__tags"
                      placeholder="Coding, Principles etc"
                    />
                  </div>
                  <div className="tab__actions">
                    <Link className="btn btn--add" href={"/dashboard"}>
                      Save
                    </Link>
                    <Link className="btn btn--back" href={"/dashboard"}>
                      {" "}
                      cancel
                    </Link>
                  </div>
                </form>
              </div>
              <div className={`tab ${activeTab === "2" ? "tab--active" : ""}`}>
                <textarea className="hints" placeholder="Hints"></textarea>
                <div className="tab__actions">
                  <Link className="btn btn--add" href={"/dashboard"}>
                    Save
                  </Link>
                  <Link className="btn btn--back" href={"/dashboard"}>
                    {" "}
                    cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default page;
