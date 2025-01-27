export default function Label({ htmlFor, children, ...props }) {
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
