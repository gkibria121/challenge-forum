"use client";
import { Challenge, Submission, Comment, Hints } from "@/types/challenges";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state interface
interface ChallengesState {
  data: Challenge[];
  currentChallenge: Challenge | null;
}

// Define the initial state with type
const initialState: ChallengesState = {
  data: [],
  currentChallenge: null,
};

// Define action payload types
interface AddSubmissionPayload {
  id: Challenge["id"];
  submission: Submission;
}

interface AddCommentPayload {
  challengeId: Challenge["id"];
  submissionId: Submission["id"];
  comment: Comment;
}

interface AddChallengePayload {
  title: string;
  description: string;
  tags: string;
  hints: Hints;
}

interface UpdateChallengePayload {
  challengeId: Challenge["id"];
  title: string;
  description: string;
  tags: string;
  hints: Hints;
}

const challengeSlice = createSlice({
  name: "challenges",
  initialState,
  reducers: {
    loaded(state, action: PayloadAction<Challenge[]>) {
      state.data = action.payload;
    },

    addSubmission: {
      prepare(id: Challenge["id"], submission: Submission) {
        return {
          payload: {
            id,
            submission,
          } as AddSubmissionPayload,
        };
      },
      reducer(state, action: PayloadAction<AddSubmissionPayload>) {
        const challenge = state.data.find(
          (challenge) => challenge.id === action.payload.id,
        );
        if (!challenge) return;

        if (!challenge.submissions) challenge.submissions = [];
        challenge.submissions.push(action.payload.submission);
      },
    },

    addComment: {
      prepare(
        challengeId: Challenge["id"],
        submissionId: Submission["id"],
        comment: Comment,
      ) {
        return {
          payload: {
            challengeId,
            submissionId,
            comment,
          } as AddCommentPayload,
        };
      },
      reducer(state, action: PayloadAction<AddCommentPayload>) {
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

    deleteChallenge(state, action: PayloadAction<Challenge["id"]>) {
      state.data = state.data.filter(
        (challenge) => challenge.id !== action.payload,
      );
    },

    addChallenge: {
      prepare(title: string, description: string, tags: string, hints: Hints) {
        return {
          payload: {
            title,
            description,
            tags,
            hints,
          } as AddChallengePayload,
        };
      },
      reducer(state, action: PayloadAction<AddChallengePayload>) {
        const newId =
          state.data.length > 0 ? state.data[state.data.length - 1].id + 1 : 1;
        state.data.push({
          id: newId as string,
          title: action.payload.title,
          description: action.payload.description,
          tags: action.payload.tags.split(",").filter((e) => e !== ""),
          hints: action.payload.hints,
          submissions: [],
        });
      },
    },

    updateChallenge: {
      prepare(
        challengeId: Challenge["id"],
        title: string,
        description: string,
        tags: string,
        hints: Hints,
      ) {
        return {
          payload: {
            challengeId,
            title,
            description,
            tags,
            hints,
          } as unknown as UpdateChallengePayload,
        };
      },
      reducer(state, action: PayloadAction<UpdateChallengePayload>) {
        state.data = state.data.map((challenge) => {
          if (challenge.id !== action.payload.challengeId) return challenge;
          return {
            ...challenge,
            description: action.payload.description,
            title: action.payload.title,
            tags: action.payload.tags.split(",").filter((e) => e !== ""),
            hints: action.payload.hints,
          };
        });
      },
    },

    setCurrentChallenge(state, action: PayloadAction<Challenge | null>) {
      state.currentChallenge = action.payload;
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
