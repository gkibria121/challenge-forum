import { useChallengeCreationContext } from "@/contexts/ChallengeCreationContext.js";
import React from "react";

const Form = ({ isActive, mode = "create" }) => {
  const { setTitle, setDescription, setTags, title, description, tags } =
    useChallengeCreationContext();

  return (
    <div className={`hidden h-full w-full p-4 ${isActive ? "block" : ""}`}>
      <form className="space-y-6 rounded-lg bg-white p-6 shadow-lg">
        {/* Title Input */}
        <div className="form__group">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            id="title"
            placeholder="Challenge title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Description Input */}
        <div className="form__group">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            id="description"
            placeholder="Challenge descriptions"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Tags Input */}
        <div className="form__group">
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-gray-700"
          >
            Tags
          </label>
          <input
            type="text"
            name="tags"
            id="tags"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Coding, Principles, etc"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
