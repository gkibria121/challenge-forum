import React from "react";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import FormGroup from "@/components/ui/FormGroup";
const AddChallengeForm = ({}) => {
  return (
    <div className="mt-8 space-y-6 rounded-lg">
      {/* Title Input */}
      <FormGroup>
        <Label htmlFor="title">Title</Label>
        <Input type="text" id="title" placeholder="Challenge title" />
      </FormGroup>

      {/* Description Input */}
      <FormGroup>
        <Label htmlFor="description">Description</Label>
        <TextArea
          id="description"
          placeholder="Challenge descriptions"
        ></TextArea>
      </FormGroup>

      {/* Tags Input */}
      <FormGroup>
        <Label htmlFor="tags">Tags</Label>
        <Input
          type="text"
          name="tags"
          id="tags"
          placeholder="Coding, Principles, etc"
        />
      </FormGroup>
    </div>
  );
};

export default AddChallengeForm;
