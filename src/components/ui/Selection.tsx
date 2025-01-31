import React from "react";

function Selection({
  name,
  id,
  defaultValue,
  value,
  onChange,
  options,
}: {
  name: string;
  id?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  options: { value: string; label: string }[];
}) {
  return (
    <select
      name={name}
      id="language"
      className="w-full rounded-md border bg-white p-2"
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default Selection;
