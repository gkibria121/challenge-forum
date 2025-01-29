import FormGroup from "@/components/ui/FormGroup";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import { Hints } from "@/types/challenges";

const HintEditor = ({
  hints,
  isEditing,
}: {
  hints: Hints | undefined;
  isEditing: Boolean;
}) => {
  return (
    <div className={`mt-8 space-y-6 rounded-lg`}>
      <FormGroup>
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          name="hintsTitle"
          id="title"
          defaultValue={isEditing && hints ? hints.title : ""}
          placeholder="Hints title"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="description">Description</Label>
        <TextArea
          id="description"
          name="hintsDescription"
          defaultValue={isEditing && hints ? hints.description : ""}
          placeholder="Hints"
        ></TextArea>
      </FormGroup>
    </div>
  );
};

export default HintEditor;
