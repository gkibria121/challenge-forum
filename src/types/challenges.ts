import { User } from "./users";

export interface Submission {
  id: string;
  user: User;
  description: string;
  code: string;
  language: string;
  commants: Comment[];
}

export interface Comment {
  id: string;
  user: User;
  comment: string;
  rating: number;
}
export type Tag = string;
export type Hints = {
  title: string;
  description: string;
};
export interface ChallengeWithoutID {
  title: string;
  description: string;
  tags: Tag[];
  submissions: Submission[];
  hints: Hints;
}

export interface Challenge extends ChallengeWithoutID {
  id: string;
}

type challengeDataField =
  | ["title", string]
  | ["description", string]
  | ["tags", string]
  | ["submissions", string]
  | ["hintsTitle", string]
  | ["hintsDescription", string];

export type ChallengeData = challengeDataField[] | FormData;
export type ChallengeDataObject = {
  title: string;
  description: string;
  tags: string;
  submissions: string;
  hintsTitle: string;
  hintsDescription: string;
};

export type PropsWithChallengeId = {
  challengeId: string;
};
