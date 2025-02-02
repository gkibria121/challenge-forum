"use server";

import { z } from "zod";

const schema = z.object({
  rating: z.string().min(1), // Ensure rating is not empty
  comment: z.string().min(1, "Comment is required"), // Ensure comment is provided
});

export async function saveComment(formData: FormData) {
  const newComment = Object.fromEntries(formData);

  const validatedForms = schema.safeParse(newComment);

  if (!validatedForms.success) {
    console.log(validatedForms.error.format());
    return { errors: validatedForms.error.format() }; // Return structured validation errors
  }

  // Process the valid data (e.g., save to a database)
  return { success: true, data: validatedForms.data };
}
