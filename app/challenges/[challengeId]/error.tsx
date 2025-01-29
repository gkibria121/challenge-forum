"use client";

import { ErrorWithMessage } from "@/types/errors";

function error({ error }: ErrorWithMessage) {
  return <div>{error.message}</div>;
}

export default error;
