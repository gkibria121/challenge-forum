import React from "react";
import CreateEditChallenge from "@/components/challenge/CreateEditChallenge.jsx";
function Page() {
  return <CreateEditChallenge mode="create" />;
}

export default Page;

export const metadata = {
  title: "Add challenge",
};
