import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import React from "react";

async function page({ params }) {
  const { challengeId } = params;

  redirect(`/challenges/${challengeId}/description`); // Navigate to the new post page
}

export default page;
