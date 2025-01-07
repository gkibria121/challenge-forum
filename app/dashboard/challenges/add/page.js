import React from "react";

function page() {
  return (
    <>
     
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <a href="Dashboard.html" className="nav__link ">
              Dashboard
            </a>
            <a href="Challenges.html" className="nav__link ml-1">
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
                Hints
              </button>
            </div>
            <div className="tabs__body">
              <div className="tab">
                <form className="challenge">
                  <div className="form__group">
                    <label for="title">Title</label>
                    <input
                      type="text"
                      className="challenge__title mt-1"
                      id="title"
                      placeholder="Challenge title"
                    />
                  </div>

                  <div className="form__group">
                    <label for="content">Description</label>
                    <textarea
                      className="challenge__description"
                      id="description"
                      placeholder="Challenge descriptions"
                    ></textarea>
                  </div>
                  <div className="form__group">
                    <label for="tags">Tags</label>
                    <input
                      name="tags mt-1"
                      id="tags"
                      className="challenge__tags"
                      placeholder="Coding, Principles etc"
                    />
                  </div>
                  <div className="tab__actions">
                    <button className="btn btn--add">Save</button>
                    <button className="btn btn--back">cancel</button>
                  </div>
                </form>
              </div>
              <div className="tab tab--active">
                <textarea className="hints" placeholder="Hints"></textarea>
                <div className="tab__actions">
                  <button className="btn btn--add">Save</button>
                  <button className="btn btn--back">cancel</button>
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
