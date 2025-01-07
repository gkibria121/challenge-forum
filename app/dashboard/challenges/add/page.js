import React from "react";

function page() {
  return (
    <>
     
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__list-item">
            <a href="Dashboard.html" class="nav__link ">
              Dashboard
            </a>
            <a href="Challenges.html" class="nav__link ml-1">
              Challenges
            </a>
          </li>
          <li class="nav__list-item">
            <a href="login.html" class="nav__link">
              login
            </a>
          </li>
        </ul>
      </nav>
      <main class="main">
        <div class="container">
          <div class="tabs">
            <div class="tabs__header">
              <button class="tab__link" data-tab-id="1">
                Description
              </button>
              <button class="tab__link tab__link--active" data-tab-id="2">
                Hints
              </button>
            </div>
            <div class="tabs__body">
              <div class="tab">
                <form class="challenge">
                  <div class="form__group">
                    <label for="title">Title</label>
                    <input
                      type="text"
                      class="challenge__title mt-1"
                      id="title"
                      placeholder="Challenge title"
                    />
                  </div>

                  <div class="form__group">
                    <label for="content">Description</label>
                    <textarea
                      class="challenge__description"
                      id="description"
                      placeholder="Challenge descriptions"
                    ></textarea>
                  </div>
                  <div class="form__group">
                    <label for="tags">Tags</label>
                    <input
                      name="tags mt-1"
                      id="tags"
                      class="challenge__tags"
                      placeholder="Coding, Principles etc"
                    />
                  </div>
                  <div class="tab__actions">
                    <button class="btn btn--add">Save</button>
                    <button class="btn btn--back">cancel</button>
                  </div>
                </form>
              </div>
              <div class="tab tab--active">
                <textarea class="hints" placeholder="Hints"></textarea>
                <div class="tab__actions">
                  <button class="btn btn--add">Save</button>
                  <button class="btn btn--back">cancel</button>
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
