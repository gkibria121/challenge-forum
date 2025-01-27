import React, { useState } from 'react';

const SubmissionEditor = ({ onCancel, onSave }) => {
  const [formData, setFormData] = useState({
    language: 'python',
    code: '',
    user : {
      name : 'admin'
    },
    description: '',
    id : new Date().getTime()
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const languages = [
    { value: 'python', label: 'Python' },
    { value: 'csharp', label: 'C#' },
    { value: 'java', label: 'Java' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'php', label: 'PHP' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.code.trim()) {
      newErrors.code = 'Code is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Here you would typically make an API call
      // For now, we'll simulate an API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onSave(formData);
    } catch (error) {
      setErrors({ submit: 'Failed to submit. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="submission__content">
        <div className="mb-4">
          <select
            name="language"
            id="language"
            className="selection w-full p-2 border rounded-md bg-white"
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
            className={`w-full p-2 border rounded-md ${
              errors.description ? 'border-red-500' : ''
            }`}
            value={formData.description}
            onChange={handleChange}
            rows={2}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        <div className="mb-4">
          <textarea
            name="code"
            placeholder="Write your code here..."
            className={`submission__input w-full p-2 border rounded-md font-mono ${
              errors.code ? 'border-red-500' : ''
            }`}
            value={formData.code}
            onChange={handleChange}
            rows={10}
          />
          {errors.code && (
            <p className="text-red-500 text-sm mt-1">{errors.code}</p>
          )}
        </div>

        {errors.submit && (
          <div className="text-red-500 mb-4">{errors.submit}</div>
        )}

        <div className="submission__actions flex justify-end space-x-2">
          <button
            type="button"
            className="btn btn--back px-4 py-2"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn--add px-4 py-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SubmissionEditor;