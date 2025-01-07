import React from "react";

function page() {
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <a href="Dashboard.html" className="nav__link">
              Dashboard
            </a>
            <a
              href="Challenges.html"
              className="nav__link ml-1 nav__link--active"
            >
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
            <div className="tabs__header">
              <button className="tab__link" data-tab-id="1">
                Description
              </button>
              <button className="tab__link tab__link--active" data-tab-id="2">
                Submissions
              </button>
              <button className="tab__link" data-tab-id="3">
                Hints
              </button>
              <button className="btn btn--add">Add</button>
              <button className="btn btn--back">&leftarrow; Back</button>
            </div>
            <div className="tabs__body">
              {/* <div className="tab">
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
              <div className="tab">
              <h4 className="tab__heading">1.Palindrome checker</h4>

              <p className="tab__content">
                Write a program to determine whether a given string is a
                palindrome.<br />
                The string may contain spaces, punctuation, or mixed-case
                letters, which should be ignored while checking. Input A string,
                such as "Was it a car or a cat I saw?".
                <br />
                Output A boolean value (true or false) indicating whether the
                string is a palindrome.
              </p>
            </div> */}
              <div className="tab tab--active">
                <div className="submissions">
                  <div className="submissions__list">
                    <div className="card card--active">
                      <div className="user__info">
                        <p className="user__name">gkibria</p>
                      </div>
                      <div className="card__description">
                        Easy solve with ptyhon.
                      </div>
                    </div>
                    <div className="card">
                      <div className="user__info">
                        <p className="user__name">mehedi</p>
                      </div>
                      <div className="card__description">
                        Implemented with java
                      </div>
                    </div>
                    <div className="card">
                      <div className="user__info">
                        <p className="user__name">talha</p>
                      </div>
                      <div className="card__description">
                        Implemented with javascript
                      </div>
                    </div>
                  </div>
                  <div className="submission">
                    <div className="submission__content">
                      this is a solution...
                    </div>
                    <div className="comments comments--short  ">
                      <p className="comments__title">Comments(10)</p>
                      <button className="btn btn--add">Add</button>
                      <div className="comments__short">
                        <p>Solution is acceptable. but it can be imporved.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab tab--active">
                <div className="submissions">
                  <div className="submissions__list">
                    <div className="card">
                      <div className="user__info">
                        <p className="user__name">gkibria</p>
                      </div>
                      <div className="card__description">
                        Easy solve with ptyhon.
                      </div>
                    </div>
                    <div className="card">
                      <div className="user__info">
                        <p className="user__name">mehedi</p>
                      </div>
                      <div className="card__description">Implemented with java</div>
                    </div>
                    <div className="card">
                      <div className="user__info">
                        <p className="user__name">talha</p>
                      </div>
                      <div className="card__description">
                        Implemented with javascript
                      </div>
                    </div>
                  </div>
                  <div className="submission">
                    <div className="submission__content">this is a solution...</div>
                    <div className="comments comments--short hidden">
                      <p className="comments__title">Comments(10)</p>
                      <button className="btn btn--add">Add</button>
                      <div className="comments__short">
                        <p>Solution is acceptable. but it can be imporved.</p>
                      </div>
                    </div>
                    <div className="comments">
                      <p className="comments__title">Comments(10)</p>
                      <div className="comments__add">
                        <div className="user__info">admin</div>
                        <div className="comments__input-container">
                          <textarea
                            name="comment"
                            id="comment"
                            className="comments__input"
                          ></textarea>
                        </div>
                        <div className="comments__actions">
                          <button className="btn btn--back">cancel</button>
                          <button className="btn btn--add">save</button>
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
              <div className="tab">
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

            <div className="tabs__footer hidden">
              <button className="btn btn--next">Previous</button>
              <button className="btn btn--prev">Next</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default page;
