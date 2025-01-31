import { PropsWithChildren } from "react";

export default function Label({
  htmlFor,
  children,
  ...props
}: PropsWithChildren & {
  htmlFor: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-4 block text-sm font-medium text-gray-700"
      {...props}
    >
      {children}
    </label>
  );
}
