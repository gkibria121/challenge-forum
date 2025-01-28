"use server";
import { updateChallenge } from "@/services/challenge";
import { addChallenge } from "@/services/challenge";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export const addChallengeAction = async (data) => {
  const dataObject = Object.fromEntries(data);
  const newChallenge = {
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
  console.log(newChallenge);
  const responseData = await addChallenge(newChallenge);
  revalidatePath("/dashboard");
  redirect("/dashboard");
};

export const updateChallengeAction = async (id, data) => {
  const dataObject = Object.fromEntries(data);
  const updatedChallenge = {
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
