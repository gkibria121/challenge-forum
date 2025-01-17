"use client";

import { configureStore } from "@reduxjs/toolkit";

import ChallengesReducer from "./features/challenges";

const store = configureStore({
  reducer: {
    challenges: ChallengesReducer,
  },
});

export default store;
