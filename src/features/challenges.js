"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
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
        const challenge = state.data.find(
          (challenge) => challenge.id === action.payload.id,
        );
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
          (challenge) => challenge.id === action.payload.challengeId,
        );
        if (!challenge) return;

        if (!challenge.submissions) challenge.submissions = [];

        const submission = challenge.submissions.find(
          (submission) => submission.id === action.payload.submissionId,
        );
        if (submission) submission.comments.push(action.payload.comment);
      },
    },
    deleteChallenge(state, action) {
      state.data = state.data.filter(
        (challenge) => challenge.id !== action.payload,
      );
    },
    addChallenge: {
      prepare(title, description, tags, hints) {
        return {
          payload: {
            title,
            description,
            tags,
            hints,
          },
        };
      },

      reducer(state, action) {
        state.data.push({
          id: state.data.at(-1)?.id + 1,
          title: action.payload.title,
          description: action.payload.description,
          tags: action.payload.tags.split(",").filter((e) => e !== ""),
          hints: action.payload.hints,
          submissions: [],
        });
      },
    },

    updateChallenge: {
      prepare(challengeId, title, description, tags, hints) {
        return {
          payload: {
            challengeId,
            title,
            description,
            tags,
            hints,
          },
        };
      },

      reducer(state, action) {
        state.data = state.data.map((challenge) => {
          if (challenge.id !== action.payload.challengeId) return challenge;
          challenge.description = action.payload.description;
          challenge.title = action.payload.title;
          challenge.tags = action.payload.tags
            .split(",")
            .filter((e) => e !== "");
          challenge.hints = action.payload.hints;
          return challenge;
        });
      },
    },
    setCurrentChallenge: {
      reducer(state, action) {
        state.currentChallenge = action.payload;
      },
    },
  },
});

export const {
  loaded,
  addSubmission,
  addComment,
  deleteChallenge,
  addChallenge,
  setCurrentChallenge,
  updateChallenge,
} = challengeSlice.actions;

export default challengeSlice.reducer;
