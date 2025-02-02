"use server";
import { signIn, signOut } from "@/../auth";
import { revalidatePath } from "next/cache";

export const login = async () => {
  await signIn("github", { redirectTo: "/" });
};

export const logout = async () => {
  await signOut({ redirectTo: "/login" });
  revalidatePath("/");
};
export { signIn, signOut };
