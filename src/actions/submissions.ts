"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  language: z.string().min(1, { message: "Programming language is required." }),
  challengeId: z.string().min(1, { message: "Challenge ID is required." }),
  description: z
    .string()
    .min(1, { message: "Challenge description is required." }),
  code: z.string().min(1, { message: "Solution code is required." }),
});

export const handleSubmission = async (
  formData: FormData,
  redirectTo?: string,
) => {
  const validatedFileds = schema.safeParse({
    challengeId: formData.get("challengeId"),
    language: formData.get("language"),
    description: formData.get("description"),
    code: formData.get("code"),
  });
  console.log(Array.from(formData));
  if (!validatedFileds.success) {
    return {
      errors: validatedFileds.error.flatten().fieldErrors,
    };
  }

  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/submissions/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: JSON.stringify({
      ...validatedFileds.data,
      user: { id: "1", name: "admin" },
    }),
  });

  if (!resp.ok)
    return {
      error: "something went wrong!",
    };
  if (redirectTo) redirect(redirectTo);
};
