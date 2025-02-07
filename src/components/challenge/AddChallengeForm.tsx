import React from "react";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import FormGroup from "@/components/ui/FormGroup";
import { Challenge } from "@/types/challenges";
const AddChallengeForm = ({
  challenge,
  isEditing = false,
}: {
  challenge?: Challenge;
  isEditing: boolean;
}) => {
  return (
    <div className="mt-8 space-y-6 rounded-lg">
      {/* Title Input */}
      <FormGroup>
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Challenge title"
          defaultValue={isEditing && challenge ? challenge.title : ""}
        />
      </FormGroup>

      {/* Description Input */}
      <FormGroup>
        <Label htmlFor="description">Description</Label>
        <TextArea
          id="description"
          name="description"
          required
          placeholder="Challenge descriptions"
          defaultValue={isEditing && challenge ? challenge.description : ""}
        ></TextArea>
      </FormGroup>

      {/* Tags Input */}
      <FormGroup>
        <Label htmlFor="tags">Tags</Label>
        <Input
          type="text"
          name="tags"
          id="tags"
          required
          placeholder="Coding, Principles, etc"
          defaultValue={isEditing && challenge ? challenge.tags.join(",") : ""}
        />
      </FormGroup>
    </div>
  );
};

export default AddChallengeForm;
