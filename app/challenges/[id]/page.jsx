"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

function page() {
  const [isCommenting, setIsCommenting] = useState(false);
  const [activeSubmission, setActiveSubmission] = useState("");
  const [activeTab, setActiveTab] = useState("2");
  const [rating, setRating] = useState(10);
  const { id } = useParams();
  const ratings = [2, 4, 6, 8, 10];

  const handleRatingChange = (event) => {
    const star = event.target.closest(".ratings__rating");
    if (!star) return;

    // Calculate whether the click is on the left half
    const isLeft = isClickOnLeftHalf(star, event);
    const selectedRating = isLeft
      ? +star.dataset.rating - 1
      : +star.dataset.rating;

    // Update the ratings visually
    updateRatingClasses(selectedRating);

    // Set the state for the selected rating
    setRating(selectedRating);
  };

  const updateRatingClasses = (selectedRating) => {
    const ratingsContainer = document.querySelector(".ratings");
    const ratingElements = Array.from(ratingsContainer.children);

    ratingElements.forEach((ratingEl) => {
      const ratingValue = +ratingEl.dataset.rating;
      let newClass;

      if (selectedRating >= ratingValue) {
        newClass = "ratings__rating ratings__rating--fill";
      } else if (selectedRating === ratingValue - 1) {
        newClass = "ratings__rating ratings__rating--half-fill";
      } else {
        newClass = "ratings__rating ratings__rating--empty";
      }

      ratingEl.className = newClass;
    });
  };

  const isClickOnLeftHalf = (element, event) => {
    const rect = element.getBoundingClientRect();
    const midpoint = rect.left + rect.width / 2;
    return event.clientX < midpoint;
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const handleTabLinkClick = (event) => {
    const tabLinkEl = event.target.closest(".tab__link");
    if (!tabLinkEl) return;
    const tabId = tabLinkEl.dataset.tabId;
    if (!tabId) return;

    setActiveTab(tabId);
  };

  const goTo = (link) => {
    if (!link) return;
    return () => router.push(link);
  };

  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <a href="/dashboard" className="nav__link">
              Dashboard
            </a>
            <a href="/challenges" className="nav__link ml-1 nav__link--active">
              Challenges
            </a>
          </li>
          <li className="nav__list-item">
            <a href="/login" className="nav__link">
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
                Submissions
              </button>
              <button
                className={`tab__link ${
                  activeTab === "3" ? "tab__link--active" : ""
                }`}
                data-tab-id="3"
              >
                Hints
              </button>
              <button
                className={`btn btn--add ${isSubmitting ? "hidden" : ""}`}
                onClick={() => setIsSubmitting(true)}
              >
                Add
              </button>
              <button onClick={goTo("/challenges")} className="btn btn--back">
                {String.fromCharCode(8592)} Back
              </button>
            </div>
            <div className="tabs__body">
              <div className={`tab ${activeTab === "1" ? "tab--active" : ""}`}>
                <h4 className="tab__heading">1.Palindrome checker</h4>

                <p className="tab__content">
                  Write a program to determine whether a given string is a
                  palindrome.
                  <br />
                  The string may contain spaces, punctuation, or mixed-case
                  letters, which should be ignored while checking. Input A
                  string, such as "Was it a car or a cat I saw?".
                  <br />
                  Output A boolean value (true or false) indicating whether the
                  string is a palindrome.
                </p>
              </div>

              <div className={`tab ${activeTab === "2" ? "tab--active" : ""}`}>
                <div className="submissions">
                  <div className="submissions__list">
                    <div
                      className={`card ${
                        activeSubmission == "1" ? "card--active" : ""
                      }`}
                      onClick={() => setActiveSubmission("1")}
                    >
                      <div className="user__info">
                        <p className="user__name">gkibria</p>
                      </div>
                      <div className="card__description">
                        Easy solve with ptyhon.
                      </div>
                    </div>
                    <div
                      className={`card ${
                        activeSubmission == "2" ? "card--active" : ""
                      }`}
                      onClick={() => setActiveSubmission("2")}
                    >
                      <div className="user__info">
                        <p className="user__name">mehedi</p>
                      </div>
                      <div className="card__description">
                        Implemented with java
                      </div>
                    </div>
                    <div
                      className={`card ${
                        activeSubmission == "3" ? "card--active" : ""
                      }`}
                      onClick={() => setActiveSubmission("3")}
                    >
                      <div className="user__info">
                        <p className="user__name">talha</p>
                      </div>
                      <div className="card__description">
                        Implemented with javascript
                      </div>
                    </div>
                  </div>

                  <div className="submission">
                    {isSubmitting ? (
                      <div className="submission__content">
                        <select
                          name="language"
                          id="language"
                          className="selection"
                        >
                          <option className="selection__option" value="python">
                            Python
                          </option>
                          <option className="selection__option" value="c#">
                            C#
                          </option>
                          <option className="selection__option" value="java">
                            Java
                          </option>
                          <option
                            className="selection__option"
                            value="javascript"
                          >
                            JavaScript
                          </option>
                          <option className="selection__option" value="php">
                            PHP
                          </option>
                        </select>
                        <textarea
                          name="submission"
                          id="submission"
                          className="submission__input"
                          defaultValue={"this..."}
                        ></textarea>
                        <div className="submission__actions">
                          <button
                            className="btn btn--add"
                            onClick={() => setIsSubmitting(false)}
                          >
                            Save
                          </button>
                          <button
                            className="btn btn--back"
                            onClick={() => setIsSubmitting(false)}
                          >
                            {" "}
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="submission__content">
                        this is a solution...
                      </div>
                    )}

                    <div
                      className={`comments comments--short ${
                        isCommenting ? "hidden" : ""
                      }`}
                    >
                      <p className="comments__title">Comments(10)</p>
                      <button
                        className="btn btn--add"
                        onClick={() => setIsCommenting((prev) => !prev)}
                      >
                        Add
                      </button>
                      <div className="comments__short">
                        <p>Solution is acceptable. but it can be imporved.</p>
                      </div>
                    </div>
                    <div
                      className={`comments  ${isCommenting ? "" : "hidden"}`}
                    >
                      <p className="comments__title">Comments(10)</p>
                      <div className="comments__add">
                        <div className="user__info">admin</div>
                        <div
                          className="ratings"
                          onMouseMove={handleRatingChange}
                        >
                          {ratings.map((ratingValue) => (
                            <span
                              key={ratingValue}
                              className="ratings__rating ratings__rating--fill"
                              data-rating={ratingValue}
                            ></span>
                          ))}
                        </div>

                        <div className="comments__input-container">
                          <textarea
                            name="comment"
                            id="comment"
                            className="comments__input"
                            defaultValue={""}
                          ></textarea>
                        </div>
                        <div className="comments__actions">
                          <button
                            className="btn btn--back"
                            onClick={() => setIsCommenting((prev) => !prev)}
                          >
                            cancel
                          </button>
                          <button
                            className="btn btn--add"
                            onClick={() => setIsCommenting((prev) => !prev)}
                          >
                            save
                          </button>
                        </div>
                      </div>
                      <div className="comments__content">
                        <div className="user__info">admin</div>
                        <div className="comments__description">
                          <p>Solution is acceptable. but it can be imporved.</p>
                        </div>
                      </div>
                      <div className="comments__content">
                        <div className="user__info">admin</div>
                        <div className="comments__description">
                          <p>Solution is acceptable. but it can be imporved.</p>
                        </div>
                      </div>
                      <div className="comments__content">
                        <div className="user__info">admin</div>
                        <div className="comments__description">
                          <p>Solution is acceptable. but it can be imporved.</p>
                        </div>
                      </div>
                      <div className="comments__content">
                        <div className="user__info">admin</div>
                        <div className="comments__description">
                          <p>Solution is acceptable. but it can be imporved.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`tab ${activeTab === "3" ? "tab--active" : ""}`}>
                <h4 className="tab__heading">What is a Palindrome?</h4>
                <br />
                <p className="tab__content">
                  A palindrome is a word, phrase, number, or sequence of
                  characters that reads the same backward as forward, ignoring
                  spaces, punctuation, and capitalization. For example: Words:
                  "radar," "level," "madam" Phrases: "A man, a plan, a canal,
                  Panama" Numbers: 121, 1221, 12321 Palindromes are fascinating
                  because they exhibit symmetry, and they are often used as
                  puzzles or challenges in coding and linguistics.
                </p>
              </div>
            </div>
          </div>
          <div className={`tabs__footer ${activeTab !== "1" ? "hidden" : ""}`}>
            <button className="btn btn--next">Previous</button>
            <button className="btn btn--prev">Next</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default page;
