import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import React from "react";

async function Page({ params }) {
  const { challengeId } = params;

  redirect(`/challenges/${challengeId}/description`); // Navigate to the new post Page
}

export default Page;
