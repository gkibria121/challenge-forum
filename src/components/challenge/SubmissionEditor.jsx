"use client";
import React, { useState } from "react";

const SubmissionEditor = ({ onCancel, onSave }) => {
  const [formData, setFormData] = useState({
    language: "python",
    code: "",
    user: {
      name: "admin",
    },
    description: "",
    id: new Date().getTime(),
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const languages = [
    { value: "python", label: "Python" },
    { value: "csharp", label: "C#" },
    { value: "java", label: "Java" },
    { value: "javascript", label: "JavaScript" },
    { value: "php", label: "PHP" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.code.trim()) {
      newErrors.code = "Code is required";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      onSave(formData);
    } catch (error) {
      setErrors({ submit: "Failed to submit. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="rounded-lg p-4 shadow-md">
        <div className="mb-4">
          <select
            name="language"
            id="language"
            className="w-full rounded-md border bg-white p-2"
            value={formData.language}
            onChange={handleChange}
          >
            {languages.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <textarea
            name="description"
            placeholder="Brief description of your solution..."
            className={`w-full rounded-md border p-2 ${errors.description ? "border-red-500" : ""}`}
            value={formData.description}
            onChange={handleChange}
            rows={2}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-500">{errors.description}</p>
          )}
        </div>

        <div className="mb-4">
          <textarea
            name="code"
            placeholder="Write your code here..."
            className={`w-full rounded-md border p-2 font-mono ${errors.code ? "border-red-500" : ""}`}
            value={formData.code}
            onChange={handleChange}
            rows={10}
          />
          {errors.code && (
            <p className="mt-1 text-sm text-red-500">{errors.code}</p>
          )}
        </div>

        {errors.submit && (
          <div className="mb-4 text-red-500">{errors.submit}</div>
        )}

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="rounded border bg-gray-200 px-4 py-2 hover:bg-gray-300"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded border bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SubmissionEditor;
