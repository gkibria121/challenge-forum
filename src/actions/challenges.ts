"use server";
import { addChallenge, updateChallenge } from "@/services/challenge";
import {
  Challenge,
  ChallengeData,
  ChallengeDataObject,
  ChallengeWithoutID,
} from "@/types/challenges";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export const addChallengeAction = async (data: ChallengeData) => {
  const dataObject: ChallengeDataObject = Object.fromEntries(
    data,
  ) as ChallengeDataObject;
  const newChallenge: ChallengeWithoutID = {
    title: dataObject.title,
    tags: dataObject.tags.split(",").map((tag: string) => {
      return tag.trim();
    }),
    description: dataObject.description,
    submissions: JSON.parse(dataObject.submissions),
    hints: {
      title: dataObject.hintsTitle,
      description: dataObject.hintsDescription,
    },
  };
  const responseData = await addChallenge(newChallenge);
  revalidatePath("/dashboard");
  redirect("/dashboard");
};

export const updateChallengeAction = async (
  id: string,
  data: ChallengeData,
) => {
  const dataObject: ChallengeDataObject = Object.fromEntries(
    data,
  ) as ChallengeDataObject;
  const updatedChallenge: Challenge = {
    id: id,
    title: dataObject.title,
    tags: dataObject.tags.split(",").map((tag) => {
      return tag.trim();
    }),
    description: dataObject.description,
    submissions: JSON.parse(dataObject.submissions),
    hints: {
      title: dataObject.hintsTitle,
      description: dataObject.hintsDescription,
    },
  };
  const responseData = await updateChallenge(id, updatedChallenge);
  console.log(updatedChallenge);
  revalidatePath(`/dashboard`);
  redirect("/dashboard");
};
