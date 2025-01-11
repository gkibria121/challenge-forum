"use client"
import React, { useState } from "react";
import { useChallenges } from "../../../../src/contexts/ChallengesContext"; // Adjust the path to your context

const Form = ({ isActive }) => {
  const {setTitle,setDescription,setTags, title,description,tags } = useChallenges(); // Use context for managing challenges




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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form__group">
          <label htmlFor="description">Description</label>
          <textarea
            className="challenge__description"
            id="description"
            placeholder="Challenge descriptions"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form__group">
          <label htmlFor="tags">Tags</label>
          <input
            name="tags"
            id="tags"
            className="challenge__tags mt-1"
            placeholder="Coding, Principles etc"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div> 
      </form>
    </div>
  );
};

export default Form;
