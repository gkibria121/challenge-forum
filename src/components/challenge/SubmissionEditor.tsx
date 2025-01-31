"use client";
import React, { useState } from "react";
import Selection from "../ui/Selection";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";
import { handleSubmission } from "@/actions/submissions";

const SubmissionEditor = ({}) => {
  const onCancel = () => {};

  const languages = [
    { value: "python", label: "Python" },
    { value: "csharp", label: "C#" },
    { value: "java", label: "Java" },
    { value: "javascript", label: "JavaScript" },
    { value: "php", label: "PHP" },
  ];

  return (
    <form
      action={handleSubmission}
      className="h-full space-y-4 rounded-lg p-4 shadow-md"
    >
      <div className="mb-4">
        <Selection options={languages} name="language" defaultValue="python" />
      </div>

      <div className="mb-4">
        <TextArea
          rows={2}
          name="description"
          placeholder="Brief description of your solution..."
        ></TextArea>
      </div>

      <div className="mb-4">
        <TextArea
          name="code"
          rows={10}
          placeholder="Write your code here..."
        ></TextArea>
      </div>

      <div className="flex justify-end space-x-2">
        <Button onClick={onCancel} variant="danger" buttonType="reset">
          Cancel
        </Button>

        <Button buttonType="submit">Save</Button>
      </div>
    </form>
  );
};

export default SubmissionEditor;
