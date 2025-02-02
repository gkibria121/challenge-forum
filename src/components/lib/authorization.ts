import { useSession } from "next-auth/react";

export const isAuthrized = () => {
  const session = useSession();
  return session;
};
