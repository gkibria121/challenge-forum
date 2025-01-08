import React from "react";

const Form = ({ isActive }) => {
  return (
    <div className={`tab ${isActive ? "tab--active" : ""}`}>
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
          <label htmlFor="description">Description</label>
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
      </form>
    </div>
  );
};

export default Form;
