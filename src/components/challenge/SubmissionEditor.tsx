"use client";
import React, { useState } from "react";
import Selection from "../ui/Selection";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";
import { handleSubmission } from "@/actions/submissions";
import Input from "../ui/Input";
import { useParams } from "next/navigation";
import Error from "../ui/Error";
const languages = [
  { value: "python", label: "Python" },
  { value: "csharp", label: "C#" },
  { value: "java", label: "Java" },
  { value: "javascript", label: "JavaScript" },
  { value: "php", label: "PHP" },
];
const SubmissionEditor = ({}) => {
  const onCancel = () => {};

  const [errors, setErrors] = useState<
    Record<string, string | string[]> | undefined
  >({});

  const { challengeId } = useParams();

  const clientSideAction = async (formData: FormData) => {
    const response = await handleSubmission(
      formData,
      `/challenges/${challengeId}/submissions`,
    );
    setErrors(response?.errors);
  };

  return (
    <form
      action={clientSideAction}
      className="h-full space-y-4 rounded-lg p-4 shadow-md"
    >
      <Input type="hidden" name="challengeId" value={challengeId} />
      <div className="mb-4">
        <Selection options={languages} name="language" defaultValue="python" />
        <Error message={errors?.language} isError={!!errors?.language} />
      </div>

      <div className="mb-4">
        <TextArea
          rows={2}
          name="description"
          placeholder="Brief description of your solution..."
          error={errors?.description}
        ></TextArea>
      </div>

      <div className="mb-4">
        <TextArea
          name="code"
          rows={10}
          placeholder="Write your code here..."
          error={errors?.code}
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
