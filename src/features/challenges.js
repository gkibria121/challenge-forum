"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      title: "Palindrome Checker",
      tags: ["coding"],
      description: "random description",
      submissions: [
        {
          id: "1",
          user: {
            name: "gkibria",
          },

          description: "Easy solve with python.",
          code: "print('hello world!')",
          language: "python",
          comments: [],
        },
        {
          id: "2",
          user: {
            name: "mehedi",
          },
          description: "Implemented with java",
          code: "System.console.printLine('hello, worl'!)",
          language: "python",
          comments: [],
        },
        {
          id: "3",
          user: {
            name: "talha",
          },
          description: "Implemented with javascript",
          code: "console.log('hello world!')",
          language: "python",
          comments: [],
        },
      ],
      hints: {
        title: "What is palindrome",
        description: "A palindrome reads the same backward as forward.",
      },
    },
    { id: 2, title: "FizzBuzz", tags: ["principles"] },
    {
      id: 3,
      title: "Reverse a String",
      tags: ["coding", "principles", "Design pattern"],
    },
    { id: 4, title: "Tower of Hanoi Algorithm", tags: ["singleton"] },
    { id: 5, title: "Publisher Subscriber pattern", tags: ["experimental"] },
    {
      id: 6,
      title: "Create a virtual DOM using JavaScript",
      tags: ["data modeling"],
    },
    { id: 7, title: "Singleton Method Design Pattern", tags: ["DOM"] },
    { id: 8, title: "Design a URL Shortener", tags: ["AJAX"] },
    { id: 9, title: "Create a todo app maintaining SOLID", tags: ["IFI"] },
    { id: 10, title: "Square Root", tags: ["principles"] },
  ],
};

const challengeSlice = createSlice({
  name: "challenges",
  initialState,
  reducers: {
    loaded(state, action) {
      state.data = action.payload;
    },
    addSubmission: {
      prepare(id, submission) {
        return {
          payload: {
            id,
            submission,
          },
        };
      },

      reducer(state, action) {
        const challenge = state.data.find((challenge) => challenge.id === action.payload.id);
        if (!challenge) return;

        if (!challenge.submissions) challenge.submissions = [];

        challenge.submissions.push(action.payload.submission);
      },
    },
    addComment: {
      prepare(challengeId, submissionId, comment) {
        return {
          payload: {
            challengeId,
            submissionId,
            comment,
          },
        };
      },

      reducer(state, action) {
        const challenge = state.data.find(
          (challenge) => challenge.id === action.payload.challengeId
        );
        if (!challenge) return;

        if (!challenge.submissions) challenge.submissions = [];

        const submission = challenge.submissions.find(
          (submission) => submission.id === action.payload.submissionId
        );
        if (submission) submission.comments.push(action.payload.comment);
      },
    },
    deleteChallenge(state, action) {
      state.data = state.data.filter((challenge) => challenge.id !== action.payload);
    },
  },
});

export const { loaded, addSubmission, addComment, deleteChallenge } = challengeSlice.actions;

export default challengeSlice.reducer;
