export default function Error({
  message,
  isError,
}: {
  message?: string | string[];
  isError?: boolean | string;
}) {
  return isError && <div className="pl-2 text-sm text-red-500">{message}</div>;
}
