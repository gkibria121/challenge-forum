import React from "react";

function page() {
  return (
    <>  
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
            </div>
            <div className="tabs__body">
              <div className="tab">
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
                    <div className="submission__content">
                      <select name="language" id="language" className="selection">
                        <option className="selection__option" value="python">
                          Python
                        </option>
                        <option className="selection__option" value="c#">
                          C#
                        </option>
                        <option className="selection__option" value="java">
                          Java
                        </option>
                        <option className="selection__option" value="javascript">
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
                        value={"this..."}
                      ></textarea>
                      <div className="submission__actions">
                        <button className="btn btn--add">Save</button>
                        <button className="btn btn--back"> Cancel</button>
                      </div>
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
